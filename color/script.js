

// var c10 = d3.scale.category10();
// var c20 = d3.scale.category20();
var c20 = d3.scaleOrdinal(d3.schemeBlues[5]);



//setting the svg
var svg1 = d3.select("#c10")
    .append("svg")
    .attr("width", 400)
    .attr("height", 50);

var svg2 = d3.select("#c20")
    .append("svg")
    .attr("width", 400)
    .attr("height", 20);



//binding the data and add the color 
svg1.selectAll("circle")
    .data(d3.range(10))
    .enter()
    .append("circle")
    .attr("r", 18)
    .attr("cx", d3.scaleLinear().domain([-1, 10]).range([0, 400]))
    .attr("cy", 25)
    .attr("fill", c10);



svg2.selectAll("circle")
    .data(d3.range(20))
    .enter()
    .append("circle")
    .attr("r", 9)
    .attr("cx", d3.scaleLinear().domain([-1, 20]).range([0, 400]))
    .attr("cy", 10)
    .attr("fill", c20);



