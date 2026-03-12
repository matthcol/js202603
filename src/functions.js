function displayCity(cityName){
    console.log(`${cityName.toUpperCase()} (${cityName.length})`)
    // this function doesn't return anything
}

function normalizeCity(cityName) {
    return `${cityName.toUpperCase()} (${cityName.length})`
}

displayCity('Toulouse')

console.log(normalizeCity('Toulouse'))
const cityNameNorm = normalizeCity('Toulouse')
console.log(cityNameNorm)

const cities = ['Pau', 'Toulouse', 'Paris', 'Nantes', 'Quimper', 'Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson', 'Y']

console.log()
cities.forEach(displayCity) // no result in memory

console.log()
const citiesNorm = cities.map(normalizeCity)
console.log(citiesNorm)
console.log(citiesNorm.length)
    

function normalizeCityLimit(cityName, limit=5){
    // 1. cut the cityName to limit characters max
    //    Ex:  'Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson' with limit=10 => 'Saint-Remy'
    const cutName = cityName.slice(0, limit)
    // 2. normalize
    //    Ex: SAINT-REMY (10/45)
    const normalizedName = cutName.toUpperCase()
    return `${normalizedName} (${normalizedName.length}/${cityName.length})`
}

// console.log(normalizeCityLimit())
console.log(normalizeCityLimit('Toulouse'))
console.log(normalizeCityLimit('Pau', 10))
console.log(normalizeCityLimit('Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson', 10))

// apply normalizeCityLimit to all cities with default limit
const citiesNorm5 = cities.map(normalizeCityLimit)  // !! limit = index
console.log(citiesNorm5)

const citiesNorm5b = cities.map(city => normalizeCityLimit(city))
console.log(citiesNorm5b)

// apply normalizeCityLimit to all cities with limit=10
const citiesNorm10 = cities.map(city => normalizeCityLimit(city, 10))
console.log(citiesNorm10)

console.log()
cities.forEach(city => console.log(city))

console.log()
cities.forEach((city, i) => console.log(` . ${i+1} - ${city}`))

console.log()
cities.slice(0,3).forEach((city, i, arr) => console.log(` . ${i+1}/${arr.length} - ${city}`))

const normalizeCityLimit10 = city => normalizeCityLimit(city, 10)

console.log(normalizeCityLimit10('Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson'))

const citiesNorm10b = cities.map(normalizeCityLimit10)
console.log(citiesNorm10b)