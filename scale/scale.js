var d3 = require("d3");

// domain 原本數據
// range  轉換後的數據

// linearScale
let linearScale = d3.scaleLinear()
    .domain([0, 42.195])
    .range([0, 600])

console.log(linearScale(20))

// BandScale
var myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
let BandScale = d3.scaleBand()
    .domain(myGroups)
    .range([0, 600])
    .padding(0.01)

console.log(BandScale("J"))