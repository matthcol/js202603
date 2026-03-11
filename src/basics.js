// program JS = a series of instructions
console.log('Learning JS 💕')
console.log("Let's begin with simple data")

console.log('NB: a semi column is optional at the end of an instruction');

// variables : 1 variable = 1 case mémoire
// keywords: 'const', 'let' ('var' obsolete)

// 1 - numbers
const price = 12.5
const nbPerson = 4
console.log(price)
console.log('Price U:', price)
console.log('Total:', price * 10)

// 2 - text
const city = 'Pau'
console.log('city')
console.log(city)
console.log('city', city)


console.log(price,nbPerson,city)
console.log(price, nbPerson, city)
console.log(
    price,
    nbPerson,
    city
)

// type d'1 variable, 1 donnée
console.log(typeof price)    // number
console.log(typeof nbPerson) // number
console.log(typeof city)     // string

// 3. boolean : true, false
console.log(price > 1) // true
console.log(true, false)

// operators
console.log('Mathematical operators')
console.log('+', price + 0.25)
console.log('*', price * 0.25)
console.log('-', price - 0.25)
console.log('-', -price)
console.log('/', price / 0.25)
console.log('% (modulo)', price % 4)
console.log("** (exponent)", 2**10)

// console.log(price++) // TypeError: Assignment to constant variable.

// non constant variable
let counter = 2
console.log('counter:', counter)
counter++  // increment
console.log('counter:', counter)
counter = 10
console.log('counter:', counter)
counter-- // decrement
console.log('counter:', counter)

// assignment + math (shortcut) : +=, *=, -=, /=, **=, ..
counter = counter + 2
counter += 2
console.log('counter:', counter)

counter = counter * 2
counter *= 2
console.log('counter:', counter)

// comparisons, tests
console.log('==', nbPerson == 4)
console.log('==', nbPerson == '4')
console.log('===', nbPerson === 4)  // data + type
console.log('===', nbPerson === '4')

console.log('!=', nbPerson != 4) // different
console.log('!==', nbPerson !== 4)

console.log('<', nbPerson < 4)
console.log('<=', nbPerson <= 4)
console.log('>', nbPerson > 4)
console.log('>=', nbPerson >= 4)

// combine comparisons
console.log('and (&&)', (nbPerson <= 4) && (price > 1))
console.log('or (||)', (nbPerson < 4) || (price > 1))
const condition = (nbPerson < 4) || (price > 1)
console.log('not (!)', !condition)

// 
console.log(city) // string data
console.log(city.length) // string length (attribute / property)
console.log(city.length > 5)
console.log('My city is ' + city) // concatenate
console.log('My counter is ' + counter) // concatenate (at least 1 string)
console.log('Price in city ' + city + ' is ' + price + '€')
console.log('Price in city ${city} is ${price}€') // !! not an interpolated string
console.log(`Price in city ${city} is ${price}€`) // an interpolated string

console.log('==', city == 'Pau')
console.log('!=', city != 'Toulouse')

console.log('<', city < 'Toulouse') // string order (with character code)
console.log('<', 'pau' < 'Toulouse')
// NB: use comparison or sort adapted to your language + country => Intl

// ------------------------------------------------------------------------
// functions on simple types
// ------------------------------------------------------------------------

// string methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
console.log(city.toUpperCase())
console.log(city.toLowerCase())
console.log(city.toLowerCase) // function is not called !

const cityNormalized = city.toUpperCase()

console.log(city.length)
// console.log(city.length()) // TypeError: city.length is not a function


// try string functions: trim, substring

// try functions: tim, substring
const welcometext = "   Hello World  "
console.log(welcometext.trim())

const city2 = 'Toulouse'
console.log(city2.substring(0, 3)) // Tou (index s letter = 0)
console.log(city2.substring(3, 6)) // Lou
console.log(city2.substring(6))    // se

console.log(city2.slice(3, 6)) // idem .substring
console.log(city2.slice(-5))   // negative index => from the end (5 last ones)
console.log(city2.slice(-5, -2))

// mathematical functions and constants
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
const discount = 12.33
const tva = 20
const qty = 12
const priceTot = (price * qty) * (1 + tva / 100) * (1 - discount / 100)
const priceTotR1 = Math.ceil(priceTot)
const priceTotR2 = Math.floor(priceTot)
const priceTotR3 = Math.round(priceTot)
const priceTotR4 = Math.trunc(priceTot)
console.log("Raw result:", priceTot)
console.log("Ceil:", priceTotR1)
console.log("Floor:", priceTotR2)
console.log("Round:", priceTotR3)
console.log("Trunc:", priceTotR4)

// see also: min, max, cos, sin, log10, log2, PI, E, ....

console.log('Min: ', Math.min(priceTotR1, priceTotR2))
console.log('Min: ', Math.min(priceTotR1, priceTotR2, priceTotR3, priceTotR4))

// ----------------------------
// Number : conversions
// ----------------------------

const quantityInput = '125'
const quantity = Number.parseInt(quantityInput)
console.log(quantity, typeof quantity)
// TODO: computing ...

// Display numbers
console.log('Quantity (text):', quantity.toString())
console.log('Quantity (text, radix 16):', quantity.toString(16))
console.log('Quantity (text, radix 2):', quantity.toString(2))
console.log('Prix (FR) : ', priceTot.toLocaleString('fr-FR'))

// NB: strings use Unicode characters
// https://fr.wikipedia.org/wiki/Unicode
const cityJp = '東京'
console.log(cityJp)