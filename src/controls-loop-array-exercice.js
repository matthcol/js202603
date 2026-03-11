const cities = [
    'Pau', 'Toulouse', 
    'Paris', 'Nantes', 
    'Quimper', 
    'Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson', 
    'Y'
]

// const thresholdCharacterCount = 5
const thresholdCharacterCount = 50

const filteredCities = cities.filter(city => city.length >= thresholdCharacterCount)
console.log('filtered cities:', filteredCities)

const firstFilteredCity = cities.find(city => city.length >= thresholdCharacterCount)
if (firstFilteredCity === undefined) { // oldschool
    console.log('first filtered city: no result')
} else {
    console.log('first filtered city:', firstFilteredCity)
}

const lastFilteredCity = cities.findLast(city => city.length >= thresholdCharacterCount)
console.log('last filtered city:', lastFilteredCity??'no result')