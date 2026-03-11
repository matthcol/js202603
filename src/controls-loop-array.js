//---------------------------
//    Loops
//---------------------------

// for ... i : 3 parts
//  - 1st part : initialization
//  - 2nd part : condition to enter next iteration
//  - 3rd part : action between loops
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// Example: an array of string
const cities = ['Pau', 'Toulouse', 'Paris', 'Nantes', 'Quimper', 'Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson', 'Y']
console.log('Cities:', cities)
console.log('Nb of cities:', cities.length)
console.log('1st city: ', cities[0])
console.log('5th city: ', cities[4])
console.log('6th city: ', cities[5]) // undefined

// for ... i loop (oldschool)
console.log("Cities:")
for (let i = 0; i < cities.length; i++) {
    console.log(' -', cities[i])
}

// for ... of (iterable data)
console.log("Cities:")
for (const city of cities) {
    console.log(' #', city)
}

// Exercice: display each city with the number of characters
// - Pau (3)
// - Toulouse (8)
console.log(`Cities (${cities.length}):`)
for (const city of cities) {
    console.log(` ~ ${city} (${city.length})`)
}


// NB: others loops
// - for .. in (on properties)
// - while
// - do ... while

// --------------------------
// modern functionnal loops
//  - .forEach()
//  - .map()
//  - .filter()
//  - .find()
//  - etc.
console.log(`Cities (${cities.length}):`)
cities.forEach(city => console.log(` * ${city} (${city.length})`))

// NB: Fonction anonyme
// city => console.log(` * ${city} (${city.length})`)

// Function with name
function displayCity(city) {
    console.log(` . ${city} (${city.length})`)
}

console.log(`Cities (${cities.length}):`)
cities.forEach(displayCity)

const citiesWith5CharAndMore = cities.filter(city => city.length >= 5)
console.log(citiesWith5CharAndMore)

const city5CharAndMore = cities.find(city => city.length >= 5)
console.log(city5CharAndMore)

const city5CharAndMore2 = cities.findLast(city => city.length >= 5)
console.log(city5CharAndMore2)


const citiesWith50CharAndMore = cities.filter(city => city.length >= 50) // []
console.log(citiesWith50CharAndMore)

const city50CharAndMore = cities.find(city => city.length >= 50) // undefined
console.log(city50CharAndMore)

const city50CharAndMore2 = cities.findLast(city => city.length >= 50) // undefined
console.log(city50CharAndMore2)