import cities from './city_fr.json' with { type: 'json' }

let cityFiltered = cities
let pageNum = 0
const pageSize = 20
const pageCount = Math.ceil(cityFiltered.length / pageSize)
let cityPage = []

// page prev/next controls :
const btnPagePrev = document.getElementById("btn-page-prev")
const btnPageNext = document.getElementById("btn-page-next")
const btnSortDept = document.getElementById("btn-sort-dept")
const btnSortPopDesc = document.getElementById("btn-sort-pop-desc")
const btnSortPopAsc = document.getElementById("btn-sort-pop-asc")


function loadPage(pageNum, pageSize){
    return cityFiltered.slice(pageNum * pageSize, (pageNum + 1) * pageSize)
}

function sortByPopulationDesc(){
    cityFiltered.sort((city1, city2) => city2.population - city1.population)
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
    // sort
    sortByPopulationDesc()
    // back to page 0
    pageNum = 0
    // refresh
    updatePage()
})

// load 1st page
updatePage()

