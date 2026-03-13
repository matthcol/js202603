const cities = [
    'Pau', 'Toulouse', 
    'Paris', 'Nantes', 
    'Quimper', 
    'Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson', 
    'Y'
]
console.log(cities)

cities.push('Bayonne')
cities.push('Biarritz', 'Tarbes', 'Lille')
console.log(cities)

const otherCities = [
    'Brest',
    'Lyon',
    'Marseille'
]
cities.push(...otherCities)
console.log(cities)

const citiesCopy = [...cities] // copy

const selection1 = ['Pau', 'Tarbes']
const selection2 = ['Nantes', 'Quimper', 'Brest']
const selection3 = ['Paris', 'Marseille']
const citiesAll = [...selection1, ...selection2, ...selection3, 'Lyon']
console.log(citiesAll)

const lastCity = citiesAll.pop() // last one
console.log(lastCity)
console.log(citiesAll)

const citySearch = 'Marseille'
const indexSearch = citiesAll.findIndex(city => city == citySearch)
if (indexSearch >= 0) {
    console.log(`city ${citySearch} found at index ${indexSearch}`)
    citiesAll.splice(indexSearch, 1) // delete 1 element
    console.log(citiesAll)
} else {
    console.log(`city ${citySearch} not found`)
}

citiesAll.splice(4, 0, 'Lille', 'Montpellier', 'Toulouse') // insert
console.log(citiesAll)