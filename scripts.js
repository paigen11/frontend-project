
mapboxgl.accessToken = 'pk.eyJ1IjoicGFpZ2VuMTEiLCJhIjoiY2lyemJlZ3A0MDBqZTJ5cGs5ZHJicjI2YyJ9.2-dZqM-k2obDN47BpWq5Lw';

// var bounds = [
//     [-84.579407959,33.5471175795], // Southwest coordinates
//     [-84.1703796387,33.9775311374]  // Northeast coordinates
// ];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-84.3733132, 33.8486731],
    zoom: 9,
    // maxBounds: bounds // Sets bounds as max
});

var myMap = L.map('map').setView([-84.3733132, 33.8486731], 9);

map.on('load', function() {

    // Add a new source from our GeoJSON data and set the
    // 'cluster' option to true.
    map.addSource("earthquakes", {
        type: "geojson",
        // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
        // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
        data: "earthquakes.geojson",
        cluster: true,
        clusterMaxZoom: 15, // Max zoom to cluster points on
        clusterRadius: 20 // Use small cluster radius for the heatmap look
    });

    // Use the earthquakes source to create four layers:
    // three for each cluster category, and one for unclustered points

    // Each point range gets a different fill color.
    var layers = [
        [0, 'green'],
        [20, 'orange'],
        [200, 'red']
    ];

    // layers.forEach(function (layer, i) {
    //     map.addLayer({
    //         "id": "cluster-" + i,
    //         "type": "circle",
    //         "source": "earthquakes",
    //         "paint": {
    //             "circle-color": layer[1],
    //             "circle-radius": 70,
    //             "circle-blur": 1 // blur the circles to get a heatmap look
    //         },
    //         "filter": i === layers.length - 1 ?
    //             [">=", "point_count", layer[0]] :
    //             ["all",
    //                 [">=", "point_count", layer[0]],
    //                 ["<", "point_count", layers[i + 1][0]]]
    //     }, 'waterway-label');
    // });

    // map.addLayer({
    //     "id": "unclustered-points",
    //     "type": "circle",
    //     "source": "earthquakes",
    //     "paint": {
    //         "circle-color": 'rgba(0,255,0,0.5)',
    //         "circle-radius": 20,
    //         "circle-blur": 1
    //     },
    //     "filter": ["!=", "cluster", true]
    // }, 'waterway-label');


    //not working yet, but click functionality works
    // map.on('click', function(e) {
    //     var latitude = e.latlng.lat;
    //     var longitude = e.latlng.lng;

    // console.log(latitude + " - " + longitude)
    // });

    addMarker();

    function addMarker() {
        setInterval(function () {
            console.log("added layer")
            map.addLayer({
                "id": "unclustered-points",
                "type": "circle",
                "source": "earthquakes",
                "paint": {
                    "circle-color": 'rgba(0,255,0,0.5)',
                    "circle-radius": 20,
                    "circle-blur": 1
                },
                "filter": ["!=", "cluster", true]
            }, 'waterway-label');
        }, 5000);
    }

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(myMap);
            }

    myMap.on('click', onMapClick);

})