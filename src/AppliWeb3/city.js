import cities from './city_fr.json' with { type: 'json' }

let cityFiltered = cities
let pageNum = 0
const pageSize = 20
const pageCount = Math.ceil(cityFiltered.length / pageSize)
let cityPage = []

const comparatorSortFr = new Intl.Collator('fr-FR').compare
const comparatorSearchFr = new Intl.Collator(
    'fr-FR', 
    {
        sensitivity: 'base',
        usage: 'search'
    }).compare

// page prev/next controls :
const btnPagePrev = document.getElementById("btn-page-prev")
const btnPageNext = document.getElementById("btn-page-next")
const btnSortName = document.getElementById("btn-sort-name")
const btnSortDept = document.getElementById("btn-sort-dept")
const btnSortPopDesc = document.getElementById("btn-sort-pop-desc")
const btnSortPopAsc = document.getElementById("btn-sort-pop-asc")
const inputSearch = document.getElementById('input-search')


function loadPage(pageNum, pageSize){
    return cityFiltered.slice(pageNum * pageSize, (pageNum + 1) * pageSize)
}

function sortByPopulationDesc(){
    cityFiltered.sort((city1, city2) => city2.population - city1.population)
}

function sortByPopulationAsc(){
    cityFiltered.sort((city1, city2) => city1.population - city2.population)
}

function sortByDept(){
    cityFiltered.sort((city1, city2) => comparatorSortFr(city1.dep_code, city2.dep_code))
}

function sortByName(){
    cityFiltered.sort((city1, city2) => comparatorSortFr(city1.nom, city2.nom))
}

function isNumber(text){
    return !Number.isNaN(Number(text))
}

function isCodePostal(query){
    return (query.length == 5) && isNumber(query)
}

function isCodeDept(query){
    const codeU = query.toUpperCase()
    return (codeU == '2A') 
        || (codeU == '2B')
        || (
                [2,3].includes(codeU.length)
                && isNumber(codeU)
        )
}

function searchCityByCP(query){
    cityFiltered = cities.filter(city => city.code_postal == query.toUpperCase())
}

function searchCityByDept(query){
    cityFiltered = cities.filter(city => city.dep_code == query)
}

function searchCityByName(query){
    // TODO: improve with partial content
    cityFiltered = cities.filter(city => comparatorSearchFr(city.nom, query) == 0)
}

function searchCity(query){
    const queryNum = parseInt(query)
    if (isCodePostal(query)){
        searchCityByCP(query)
    } else if (isCodeDept(query)) {
        searchCityByDept(query)
    } else {
        searchCityByName(query)
    }
}

function cityCard(city) {
    return `<div class="city-card">
        <div class="city-name">${city.nom}</div>
        <div class="city-meta>
            <span class="city-dept">${city.dep_code} - ${city.dep_nom}</span>
            CP ${city.code_postal} . ${city.population} hab.
        </div>
    </div>`
}

function displayPage(cityPage){
    const cityListElement = document.getElementById('city-list')
    const content = cityPage
        // .map(city => `<li>${city.nom}</li>`)
        .map(cityCard)
        .join('\n')
    // console.log(content)
    cityListElement.innerHTML = content
}

const updateInfoPage = () => {
    // display :
    // - page size
    // - total nb of cities
    // - current num page 
    // - total nb of page
    console.log(pageSize, cities.length, pageNum + 1, pageCount)
    document.getElementById("info-page-size").innerText = pageSize
    document.getElementById("info-page-total").innerText = cities.length
    document.getElementById("info-page-num").innerText = pageNum + 1
    document.getElementById("info-page-count").innerText = pageCount
}

const updatePage = () => {
    cityPage = loadPage(pageNum, pageSize)
    // console.log(cityPage)
    displayPage(cityPage)
    updateInfoPage()
    // if (pageNum == 0) {
    //     btnPagePrev.disabled = true
    // } else {
    //     btnPagePrev.disabled = false
    // }
    btnPagePrev.disabled = (pageNum == 0)
    btnPageNext.disabled = (pageNum == pageCount -1)
}

// Event listeners on each button

btnPagePrev.addEventListener('click', () =>  {
    pageNum--
    console.log('Previous Page:', pageNum)
    updatePage()
})

btnPageNext.addEventListener('click', () => {
    pageNum++
    console.log('Next Page:', pageNum)
    updatePage()
})

btnSortPopDesc.addEventListener('click', () => {
    console.log('sort by population desc')
    // sort
    sortByPopulationDesc()
    // back to page 0
    pageNum = 0
    // refresh
    updatePage()
})

btnSortPopAsc.addEventListener('click', () => {
    console.log('sort by population asc')
    // sort
    sortByPopulationAsc()
    // back to page 0
    pageNum = 0
    // refresh
    updatePage()
})

btnSortDept.addEventListener('click', () => {
    console.log('sort by dept')
    // sort
    sortByDept()
    // back to page 0
    pageNum = 0
    // refresh
    updatePage()
})

btnSortName.addEventListener('click', () => {
    console.log('sort by nom')
    // sort
    sortByName()
    // back to page 0
    pageNum = 0
    // refresh
    updatePage()
})


inputSearch.addEventListener('input', () => {
    const query = inputSearch.value.trim()
    console.log('Search city query:', query)
    if (query.length > 0) {
        searchCity(query)
    } else {
        cityFiltered = cities
    }
    pageNum = 0
    updatePage()
})

// load 1st page
updatePage()

