let runDataArray = []

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
var svg = d3.select("#runData")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


let DaysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

let Week = [
    1,
    2,
    3,
    4,
    5,
];


// Build X scales and axis:
var x = d3.scaleBand()
    .domain(DaysOfWeek)
    .range([0, width])

svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))

// Build Y scales and axis:
var y = d3.scaleBand()
    .domain(Week)
    .range([0, height])

svg.append("g")
    .call(d3.axisLeft(y));

// Build color scale
var myColor = d3.scaleLinear()
    .range(["white", "#69b3a2"])
    .domain([1, 100])

axios.get('RuningData.json')
    .then(function (response) {
        // handle success
        data = response.data
        let startDaysOfWeek = data[0].daysOfWeek
        let DayIndex = DaysOfWeek.indexOf(startDaysOfWeek)
        let weekIndex = 1
        // console.log("startDaysOfWeek = ", startDaysOfWeek, "DayIndex = ", DayIndex)
        for (let i = 0; i < data.length; i++) {
            let runData = {
                "daysOfWeek": null,
                "week": null,
                "duration": 0,
                "date": null
            }

            if (DayIndex >= 7) {
                DayIndex = 0;
                weekIndex++
            }

            runData.daysOfWeek = DaysOfWeek[DayIndex]
            runData.week = weekIndex
            runData.date = data[i].date
            for (let j = 0; j < data[i].runningSet.length; j++) {
                runData.duration += data[i].runningSet[j].duration
            }
            DayIndex++;

            runDataArray.push(runData)
        }
        showData()
    })


function showData() {
    console.log("runData=  ", runDataArray)
    svg.selectAll("rect")
        .data(runDataArray)
        .enter()
        .append("rect")
        .attr("x", function (d) {
            return x(d.daysOfWeek)
        })
        .attr("y", function (d) {
            return y(d.week)
        })
        .attr("width", x.bandwidth())
        .attr("height", y.bandwidth())
        .style("fill", function (d) {
            return myColor(d.duration)
        })
}