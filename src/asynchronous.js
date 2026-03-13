// synchronous call vs asynchronous call

// synchronous call = wait until called function is finished
const city = 'Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson'
const cityU = city.toUpperCase() 
console.log(cityU)

// asynchronous call = do not wait until called function is finished
//   => can do other things => share processor time

// Example : counter with timer (v1)
let counter = 0
const counterMax = 15
const counterInterval = setInterval(() => {
    counter++
    console.log(`counter: ${counter}`)
    if (counter >= counterMax) {
        clearInterval(counterInterval)
        console.log('Counter stopped')
    }
}, 1000) // ms
console.log('Counter has started')

