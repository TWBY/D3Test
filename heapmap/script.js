// set the dimensions and margins of the graph
var margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
};

let width = 450;
let height = 450;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Labels of row and columns
var myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
var myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]

// Build X scales and axis:
var x = d3.scaleBand()
    .range([0, width])
    .domain(myGroups)

svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))

// Build Y scales and axis:
var y = d3.scaleBand()
    .range([height, 0])
    .domain(myVars)

svg.append("g")
    .call(d3.axisLeft(y));

// Build color scale
var myColor = d3.scaleLinear()
    .range(["white", "#69b3a2"])
    .domain([1, 100])

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv", function (data) {
    console.log("data= ", data)
    svg.selectAll()
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function (d) {
            // console.log(d.group)
            return x(d.group)
        })
        .attr("y", function (d) {
            // console.log(d.variable)
            return y(d.variable)
        })
        .attr("width", x.bandwidth())
        .attr("height", y.bandwidth())
        .style("fill", function (d) {
            return myColor(d.value)
        })
})