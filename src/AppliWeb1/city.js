import cities from './city_fr_names.json' with { type: 'json' }

const city0 = cities[0]
console.log(city0)

const cityPage = cities.slice(0, 10)
console.log(cityPage)

// get element HTML to display cities from document
const cityListElement = document.getElementById('city-list')
console.log(cityListElement)

// update HTML element with .innerText or .innerHTML
// cityListElement.innerText = city0
// cityListElement.innerHTML = `<li>${city0}</li>`

const content = cityPage
    .map(city => `<li>${city}</li>`)
    .join('\n')
console.log(content)

cityListElement.innerHTML = content