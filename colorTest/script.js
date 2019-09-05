var c20 = d3.scaleOrdinal(d3.schemeBlues[9]);

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


var svgWidth = 500;
var svgHeight = 300;

var svg3 = d3.select('#chart')
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "bar-chart");


var dataset = [80, 100, 56, 120, 180, 30, 40, 121, 160];
var scaleChange = d3.scaleLinear()
    .domain([0, 200])
    .range([0, 9]);

var barPadding = 5;
var barWidth = (svgWidth / dataset.length);


svg3.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function (d) {
        return svgHeight - d
    })
    .attr("height", function (d) {
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    })
    .attr("fill", function (d, i) {
        // console.log("d (origin) = ", d)
        // Math.floor(5.95)
        d = Math.floor(scaleChange(d));
        console.log("d (after) = ", d)
        return c20(d);
    });