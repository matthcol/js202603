const numbers = [12, 24, 45, -1, 66, 99, 43, 7, 4]
console.log(numbers)

numbers.sort()
console.log(numbers)

// default comparison
// 3 - 5 = -2 ; -2 < 0 => 3 < 5
// 3 - 3 = 0 ; 0 = 0 => 3 = 3
// 5 - 3 = +2 ; +2 > 0 => 5 > 3 

numbers.sort((a, b) => b - a)
console.log(numbers)

const compareNumberDesc = (a, b) => b - a
numbers.sort(compareNumberDesc)
console.log(numbers)

// ------------------------------------------------------
//                   sort strings
// ------------------------------------------------------
const codes = ['AZ1223', 'BA4561', 'ZS9870', 'BB3211', 'BB3212']
console.log(codes)
codes.sort()
console.log(codes)

const wordsFr = [
    'café', 'croissant', 'arc-en-ciel',
    'cœur', 'Zèbre',
    'ameçon', 'amer', 'âme'
]
wordsFr.sort()
console.log(wordsFr)

console.log('amer'.localeCompare('âme', 'fr-FR'))

wordsFr.sort((w1, w2) => w1.localeCompare(w2, 'fr-FR'))
console.log(wordsFr)

const compareWordFr = new Intl.Collator('fr-FR').compare // default : OK for sorting
wordsFr.sort(compareWordFr)
console.log(wordsFr)


const wordSearch = 'cafe'
const searchResult = wordsFr.filter(word => compareWordFr(word, wordSearch) == 0)
console.log('Search result:', searchResult) // no result

const compareSearchWordFr = new Intl.Collator(
    'fr-FR', 
    {
        sensitivity: 'base', // default 'variant'
        usage: 'search' // default 'sort'
    }
).compare

const searchResult2 = wordsFr.filter(word => compareSearchWordFr(word, wordSearch) == 0)
console.log('Search result:', searchResult2)

const wordsEs = [
    'mañana', 'mano', 'matador'
]
wordsEs.sort()              // [ 'mano', 'matador', 'mañana' ]
console.log(wordsEs)
wordsEs.sort(compareWordFr) // [ 'mañana', 'mano', 'matador' ]
console.log(wordsEs)
const compareWordEs = new Intl.Collator('es-ES').compare
wordsEs.sort(compareWordEs)  // [ 'mano', 'mañana', 'matador' ]  // OK :)
console.log(wordsEs)
