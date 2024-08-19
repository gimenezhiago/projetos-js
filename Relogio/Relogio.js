var now = new Date()
var hours = now.getHours()
console.log(hours)
var minutes = now.getMinutes()
var seconds = now.getSeconds()

var resHours = document.querySelector('span#hours')
var resMinutes = document.querySelector('span#minutes')
var resSeconds = document.querySelector('span#seconds')

resHours.innerHTML = `oi ${hours}`
resMinutes.innerHTML = minutes
resSeconds.innerHTML = seconds