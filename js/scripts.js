// L.mapbox.accessToken = 'pk.eyJ1IjoiZXJpY2V0dGVuc29obiIsImEiOiJjaXJ6OHgzaWowMDdsMnRwa2lmM2MyMzlmIn0._EDAWnZWG_f4wwx5d46a_w';

// create map
var map = L.map('map', {
    center: [33.73804, -84.38324],
    zoom: 9,
    // leave maxBounds commented out for now
    // maxBounds: [
    //     [33.7993178, -84.328008],
    //     [33.8486731, -84.3733132]
    // ],
    minZoom: 9

})

//add OSM styled background
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function onMapClick(e) {
    // popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(map);
    console.log(e.latlng)
    L.circle(e.latlng, 2000).addTo(map);
}

map.on('click', onMapClick);
var popup = L.popup();  

var myIcon = L.icon({iconUrl: 'img/monster.png', className: 'my-div-icon'});

function generateMarkers() {
    var tempPoint = generate(point[0], point[1], .4);
    new L.marker(tempPoint, {icon: myIcon})
        .addTo(map)
        .on("click", function(e){
            console.log("click")
        })
}

var generation = setInterval(generateMarkers, 1000);

function stop(){
	clearInterval(generation);
}


