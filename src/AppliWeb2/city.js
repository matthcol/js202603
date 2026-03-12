import cities from './city_fr_names.json' with { type: 'json' }

function loadPage(pageNum, pageSize){
    return cities.slice(pageNum * pageSize, (pageNum + 1) * pageSize)
}

function displayPage(cityPage){
    const cityListElement = document.getElementById('city-list')
    const content = cityPage
        .map(city => `<li>${city}</li>`)
        .join('\n')
    // console.log(content)
    cityListElement.innerHTML = content
}

let pageNum = 0
const pageSize = 20
const pageCount = Math.ceil(cities.length / pageSize)
let cityPage = []

// page prev/next controls :
const btnPagePrev = document.getElementById("btn-page-prev")
const btnPageNext = document.getElementById("btn-page-next")

console.log(btnPagePrev)
console.log(btnPageNext)

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

// load 1st page
updatePage()

