// Exercice: 
// - 5% above 100
// - 10% above 1000
// - 20% above 10000

// const price = 5
// const price = 500
// const price = 5000
const price = 50000

let finalPrice4=price
if (price <= 100){
    console.log('no discount')
} else if (price <= 1000){
    console.log('5% discount')
    finalPrice4=price*0.95
} else if (price <= 10000){
    console.log('10% discount')
    finalPrice4=price*0.9
} else {
    console.log('20% discount')
    finalPrice4=price*0.8
}
console.log('Final price:', finalPrice4)