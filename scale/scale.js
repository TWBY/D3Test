var d3 = require("d3");

// domain 原本數據
// range  轉換後的數據

// # continuous: Given a value from the domain, returns the corresponding value from the range 
// ## linearScale
// ### number
let numberLinearScale = d3.scaleLinear()
    .domain([0, 42.195])
    .range([0, 600])

//shorthand => let numberLinearScale = d3.scaleLinear([0, 42.195], [0, 600])
console.log("numberLinearScale(20) = ", numberLinearScale(20)) // 284.3938855314611

// ### color
var colorLinearScale = d3.scaleLinear()
    .domain([10, 100])
    .range(["brown", "red"]);

console.log("colorLinearScale(20) = ", colorLinearScale(20)) // rgb(175, 37, 37)

var color = d3.interpolate("red", "white")
console.log("color(1) = ", color(1))

// BandScale
var myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
let BandScale = d3.scaleBand()
    .domain(myGroups)
    .range([0, 600])
    .padding(0.01)

console.log("BandScale('J') =", BandScale("J")) // 540.05994005994