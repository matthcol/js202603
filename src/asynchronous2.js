// Example : counter with timer (v2)
const counterMax = 15

function count(n, stop){
    console.log(`counter: ${n}`)
    if (n < stop) {
        // next
        setTimeout(() => count(n + 1, stop), 1000)
    } else {
        console.log('Counter stopped')
    }
}

count(1, 15)
console.log('Counter has started')