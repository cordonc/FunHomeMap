let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
    subdomains: "abcd",
    maxZoom: 18    
    
});

/*  tileLayer.addTo(firstMap);
    firstMap.setView([40.730833, -73.9975], 16);

let washingtonSquarePark, washingtonSquareParkMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).addTo(firstMap);
tenThousandth = [[40.7307, -73.9976], [40.7307, -73.9974],
[40.7309, -73.9974], [40.7309, -73.9976]];
tenThousandthPolygon = L.polygon(tenThousandth, {
    color: "#268bd2",
    fillColor: "#fdf6e3"
}
).addTo(firstMap);

thousandth = [[washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng + 0.001],
[washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng - 0.001],
[washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng - 0.001],
[washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng + 0.001]];
thousandthPolyline = L.polyline(thousandth, {color: "#d33682"}
).addTo(firstMap);

let circle;
circle = L.circle(washingtonSquarePark, {radius: 100,
color: "#859900",
fillColor: "#cb4b16",
opacity: 0.9,
fillOpacity: 0.25}
).addTo(firstMap); */

tileLayer.addTo(firstMap);
firstMap.setView([40.698456, -73.941368], 13);

let walkNumberOne, walkNumberOneMarker;
let walkStartCoordinates, walkStartCoordinatesPolygon

walkNumberOne = L.latLng(40.695717, -73.91099);
walkNumberOneMarker = L.marker(walkNumberOne).addTo(firstMap); 
walkNumberOneMarker.bindPopup("This is my house, the starting point of my first walk and bike ride."); 

    let walkNumberOneSecondStop, walkNumberOneSecondStopMarker
    walkNumberOneSecondStop = L.latLng(40.69366, -73.91333);
    walkNumberOneSecondStopMarker = L.marker(walkNumberOneSecondStop).addTo(firstMap);
    walkNumberOneSecondStopMarker.bindPopup("This is the second stop of my walk.")

    let walkNumberOneThirdStop, walkNumberOneThirdStopMarker
    walkNumberOneThirdStop = L.latLng(40.69193, -73.91029);
    walkNumberOneThirdStopMarker = L.marker(walkNumberOneThirdStop).addTo(firstMap);
    walkNumberOneThirdStopMarker.bindPopup("The third stop of my walk– on the corner of Irving Square Park.")

    let walkNumberOneFourthStop, walkNumberOneFourthStopMarker
    walkNumberOneFourthStop = L.latLng(40.69299, -73.90813)
    walkNumberOneFourthStopMarker = L.marker(walkNumberOneFourthStop).addTo(firstMap);
    walkNumberOneFourthStopMarker.bindPopup("The fourth stop of my walk, which is through the park. I used to drop off my composting material here but the drop off time was too early so I stopped. Not a big fan of Irving Square park anyways.")

walkStartCoordinates = [
    [40.69366, -73.91333],
    [40.69193, -73.91029],
    [40.69299, -73.90813],
    [40.69457, -73.90656],
    [40.69668, -73.91033], 
    [40.69366, -73.91333]
];
walkStartCoordinatesPolygon = L.polygon(walkStartCoordinates, {
    color: "#47D2F1",
    fillColor: "#fdf6e3"
}
).addTo(firstMap);

let circle;
circle = L.circle(walkNumberOne, {radius: 100,
    color: "#0D7991",
    fillColor: "#AFEAFE",
    opacity: 0.9,
    fillOpacity: 0.25}
).addTo(firstMap);




let BikeNumberTwo, BikeNumberTwoMarker;
let BikeTwoCoordinates, BikeTwoCoordinatesPolygon

// BikeNumberTwo = L.latLng(40.695717, -73.91099);
// BikeNumberTwoMarker = L.marker(BikeNumberTwo).addTo(firstMap);
// BikeNumberTwoMarker.bindPopup("The starting point of my bike ride.")

let BikeNumberTwoEnding, BikeNumberTwoEndingMarker;

BikeNumberTwoEnding = L.latLng(40.69167, -73.99985)
BikeNumberTwoEndingMarker = L.marker(BikeNumberTwoEnding).addTo(firstMap);
BikeNumberTwoEndingMarker.bindPopup("The ending point of my bike ride, in Brooklyn Bridge Park Pier.")

BikeTwoCoordinates = [
    [40.695717, -73.91099], 
    [40.68780, -73.91904],
    [40.68380, -73.95901],
    [40.68308, -73.95890],
    [40.68263, -73.96268],
    [40.68894, -73.98122],
    [40.69265, -73.99118],
    [40.68972, -73.99264],
    [40.69167, -73.99985] 
]

BikeTwoCoordinatesPolygon = L.polyline(BikeTwoCoordinates, {
    color: "#C9FEAF",
    fillColor: "#fdf6e3"
}
).addTo(firstMap);
