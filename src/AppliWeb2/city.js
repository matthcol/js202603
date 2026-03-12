import cities from './city_fr_names.json' with { type: 'json' }

function loadPage(pageNum, pageSize){
    return cities.slice(pageNum * pageSize, (pageNum + 1) * pageSize)
}

function displayPage(cityPage){
    const cityListElement = document.getElementById('city-list')
    const content = cityPage
        .map(city => `<li>${city}</li>`)
        .join('\n')
    console.log(content)
    cityListElement.innerHTML = content
}

let pageNum = 0
const pageSize = 20

let cityPage = loadPage(pageNum, pageSize)
console.log(cityPage)

displayPage(cityPage)


// page controls :
const btnPagePrev = document.getElementById("btn-page-prev")
const btnPageNext = document.getElementById("btn-page-next")

console.log(btnPagePrev)
console.log(btnPageNext)

btnPagePrev.addEventListener('click', () => console.log('Prev'))
btnPageNext.addEventListener('click', () => {
    pageNum++
    console.log('Next Page:', pageNum)
    cityPage = loadPage(pageNum, pageSize)
    console.log(cityPage)
    displayPage(cityPage)
})

