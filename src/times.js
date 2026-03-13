import { Temporal } from '@js-temporal/polyfill'

// Temporal data with JS
// - 1st way : 1996 => 2025 
//      class Date
// - modern way : 2026 (ready 2021)
//      class Temporal
// - external library : moments.js (deprecated with Temporal)

// Wikipedia:
// - https://en.wikipedia.org/wiki/ISO_8601
// - https://en.wikipedia.org/wiki/Time_zone


// ------------------------------------------------------------
// - 1st way : 1996 => 2025 
//      class Date
const d1 = new Date() // now : date + time
console.log(d1) // ISO Format or long format
console.log(d1.toISOString())
console.log(d1.toLocaleString())
console.log(d1.toLocaleDateString())
console.log(d1.toLocaleTimeString())

// 2 weird properties !!
// - monthIndex : 0-11
// - date = day of month : 1-31
const d2 = new Date(2024, 1, 29) // 2024/02/29
const d3 = new Date(2028, 1, 29, 13, 30) // 2028/02/29 13:30 
console.log(d2.toLocaleString())
console.log(d3.toLocaleString())

console.log('year:', d3.getFullYear())
console.log('month:', d3.getMonth() + 1)
console.log('day (of the month):', d3.getDate())
console.log('day (of the week):', d3.getDay())
console.log('hour:', d3.getHours())
console.log('minute:', d3.getMinutes())
console.log('second:', d3.getSeconds())
console.log('mili second:', d3.getMilliseconds())

// -----------------------------------------------
// - modern way : 2026 (ready 2021)
//      class Temporal
//         - PlainDate
//         - PlainTime
//         - PlainDateTime
//         - ZonedDateTime
//         - Duration
//
// modern browser: nothing to do 
//      import { Temporal } from '@js-temporal/polyfill'
// node: 
//      node --harmony-temporal .\times.js
const pd0 = Temporal.Now.plainDateISO()
const pd1 = Temporal.PlainDate.from({year: 2024, month: 2, day: 29})
const pd2 = Temporal.PlainDate.from('2028-02-29')
console.log(pd0.toString())
console.log(pd1.toString())
console.log(pd2.toString())
console.log('year:', pd1.year)
console.log('month:', pd1.month) // 1-12 :)
console.log('day (of the month):', pd1.day)
console.log('day (of the week):', pd1.dayOfWeek)

const diff = pd1.until(pd2)
console.log(diff.toString()) // P1461D

const pd4 = pd0.add({
    days: 7
})
console.log(pd4.toString())
console.log(pd1.add({months: 12}).toString())

const pdt1 = Temporal.PlainDateTime.from('2026-07-14T12:24:37')
console.log(pdt1.toString())

const pt1 = Temporal.PlainTime.from('17:00:02.123')
console.log(pt1.toString())

const zdt1 = Temporal.ZonedDateTime.from('2026-07-14T12:24:37[Australia/Sydney]')
const zdt2 = zdt1.withTimeZone('Europe/Paris')
console.log(zdt1.toString())
console.log(zdt2.toString())