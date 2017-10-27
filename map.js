
// // map using d3+ (color the countries)



// var data = []
// d3.csv("./data.csv", function(error, d){
//     for(var i = 0; i < d.length; i++){
//       d[i]["pair_count"] = parseInt(d[i]["pair_count"]);
//     }
//     // data[i] = d[i].term1
//     var visualization = d3plus.viz()
//     .container("#svg_map")        // container DIV to hold the visualization
//     .data(d)            // data to use with the visualization
//     .coords({
//         "mute": ["anata"],
//         "value": "http://d3plus.org/topojson/countries.json"
//     }) // pass topojson coordinates
//     .type("geo_map")              // visualization type
//     .id("key")                // key for which our data is unique on
//     .text("name")                 // key to use for display text
//     .color("pair_count")               // key for coloring countries
//     // .tooltip(["year", "tags"])              // keys to place in tooltip
//     .draw();  
// })



// //using datamaps (d3) http://datamaps.github.io


// // var data2 = []
// // for(int i = 1; i< data.length; i++) {
// //   data2 = data[i]

// // }

// // var basic_choropleth = new Datamap({
// //   element: document.getElementById("svg_map"),
// //   projection: 'mercator',
// //   fills: {

// //     defaultFill: "#00000",
// //     authorHasStudiedttt11In:"#594d4d",
// //     authorHasTraveledTo: "#ABDDA4",
// //     authorHasStudied11In: "#AB55A4"


// //   },
// //   data: {
// //     CHN: { fillKey: "authorHasStudied11In", year: "1992 - 2014" },
// //     DEU: { fillKey: "authorHasTraveledTo", year: "2014" },
// //     USA: { fillKey: "authorHasStudied11In", year: "2016 - 2017" },
// //     BHS: { fillKey: "authorHasTraveledTo", year: "2016" },
// //     RUS: { fillKey: "authorHasStudiedttt11In", year: "2016" },


// //   },
// //   geographyConfig: {
// //     popupTemplate: function(geo, data) {
// //         return ['<div class="hoverinfo"><strong>',
// //                 'Country: ' + geo.properties.name,
// //                 '<br> Year: ' + data.year,
// //                 '</strong></div>'].join('');
// //     }
// //   }
// // });
// // var legend = d3.select("#svg_map").append("svg").attr("id", "legend");

// // legend.append("rect").attr("x", "200").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", "#ABDDA4");
// // legend.append("text").attr("x", "225").attr("y", "24").attr("font-size", "12px").text("Traveled to");
// // legend.append("rect").attr("x", "350").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", "#AB55A4");
// // legend.append("text").attr("x", "375").attr("y", "24").attr("font-size", "12px").text("Studied in");
// // legend.append("text").attr("x", "525").attr("y", "24").attr("font-size", "12px").text("NEW");
// // legend.append("rect").attr("x", "500").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", "#594d4d");
