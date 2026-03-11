// ----------------------------
// conditional structures :
//   - ternary exepression
//   - if
//   - switch .. case
// ----------------------------

// const price = 12.5
const price = 1200.5

// finalPrice with a 10% discount if price above 1000
const finalPrice = (price > 1000) ? price * 0.9 : price
console.log('Final price (v1):', finalPrice)

let finalPrice2 = price
if (price > 1000) {
    finalPrice2 = price * 0.9
}
console.log('Final price (v2):', finalPrice2)

let finalPrice3 = 0
if (price > 1000) {
    console.log('applying 10% discount')
    finalPrice3 = price * 0.9
} else {
    finalPrice3 = price
}
console.log('Final price (v3):', finalPrice3)

// Exercice: 
// - 5% above 100
// - 10% above 1000
// - 20% above 10000

// solution : controls-if-exercice.js
