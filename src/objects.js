// object city with its properties (key: value)
const city = {
    name: "Toulouse",
    code_postal: "31000",
    dep_code: "31",
    population: 500000
}

console.log(city)
console.log(typeof city)

// read a property
console.log('city name:', city.name)
console.log('city name:', city['name'])

// update a property
city.population += 1000
console.log(city)

// add/remove a property
city.area = 10000
console.log(city)
console.log(city.area ?? 'no area')
delete city.area
console.log(city)
console.log(city.area) // undefined
console.log(city.area ?? 'no area')

// a new object from another + extra properties
const cityA = {
    ...city,
    area: 2000
}
console.log(cityA)

// destructuration of an abject
// * const name = city.name
// * const dep_code = city.dep_code
const {name, dep_code} = city
console.log(name, dep_code)

// * const name1 = city.name
// * const dep_code1 = city.dep_code
const {name: name1, dep_code: dep_code1} = city
console.log(name1, dep_code1)

const {area, code_postal, ...cityND} = cityA
console.log(cityND)

function displayCityFr(city){
    console.log('Nom:', city.name)
    console.log('Département:', city.dep_code)
    console.log('Code Postal:', city.code_postal ?? '')
    console.log('Population:', city.population)
}

console.log()
displayCityFr(city)
console.log()
displayCityFr(cityA)
console.log()
displayCityFr(cityND)

function displayCityFr2({name, dep_code, code_postal, population}){
    console.log('Nom:', name)
    console.log('Département:', dep_code)
    console.log('Code Postal:', code_postal ?? '')
    console.log('Population:', population)
}

console.log()
displayCityFr2(city)
console.log()
displayCityFr2(cityA)
console.log()
displayCityFr2(cityND)

const cities = [
    {
        name: "Toulouse",
        code_postal: "31000",
        dep_code: "31",
        population: 500000
    },
    {
        name: "Pau",
        code_postal: "64000",
        dep_code: "64",
        population: 77000
    },
    {
        name: "Paris",
        code_postal: "75000",
        dep_code: "75",
        population: 2000000
    },
]

// 1 - afficher les villes une à une (Hint: forEach)
console.log()
cities.forEach(displayCityFr)

console.log()
cities.forEach(city => console.log(` - ${city.name} (${city.dep_code})`))

console.log()
cities.forEach(({name, dep_code}) => console.log(` * ${name} (${dep_code})`))

console.log()
cities.forEach(({name, dep_code}, index) => console.log(` -${index+1}- ${name} (${dep_code})`))

// 2 - extraire les villes de + de 100 000 habitants (Hint: filter)
const bigCities = cities.filter(city => city.population > 100000)
console.log(bigCities)

const bigCities2 = cities.filter(({population}) => population > 100000)
console.log(bigCities2)

// 3 - extraire les noms de villes dans un nouveau tableau (Hint: map)
const names = cities.map(city => city.name)
console.log(names)

const names2 = cities.map(({name}) => name)
console.log(names2)

const bigCityNames = cities.filter(city => city.population >= 100000)
    .map(city => city.name)
console.log(bigCityNames)

const extract1 = cities.filter(city => city.population >= 100000)
    .map((city, index) => [index + 1, city.name])
console.log(extract1)

console.log()
cities.filter(city => city.population >= 100000)
    .map((city, index) => [index + 1, city.name])
    // .forEach(index_name => console.log(` -${index_name[0]}- ${index_name[1]}`))
    .forEach(([index, name]) => console.log(` -${index}- ${name}`))