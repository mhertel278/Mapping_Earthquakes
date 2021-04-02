// console.log to check the code is working
console.log("working");

// Create the map object with a center at Earth
var map = L.map("mapid").setView([30, 30], 2);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// plot the San Fran Airport with L.geoJSON
L.geoJSON(sanFranAirport, {
    // turn each feature to a marker
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup(`<h2>${feature.properties.faa}<h2> <hr> 
        <h4>${feature.properties.name}`)
    }
})
// .bindPopup(`<h1>${sanFranAirport.features[0].properties.name}</h1>`)
.addTo(map);
// Get cities data from cities.js.
// let cityData = cities;


// // loop through each city to add marker to the map
// cityData.forEach(function(city) {
//     console.log(city);
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//         lineweight: 4
//     })
//     .bindPopup(`<h2>${city.city}, ${city.state}</h2> <hr> <h3>Population: ${city.population.toLocaleString()}</h3>`)
//     .addTo(map);
// })

// Create the tile layer that will be the background of the map
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
}).addTo(map);