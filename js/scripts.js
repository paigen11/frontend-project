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
    minZoom: 9,
})

map.doubleClickZoom.disable();
map.dragging.disable();
map.on('click', onMapClick);

//add dark Mapbox styled background
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFpZ2VuMTEiLCJhIjoiY2lyemJlZ3A0MDBqZTJ5cGs5ZHJicjI2YyJ9.2-dZqM-k2obDN47BpWq5Lw')
.addTo(map);

var popup = L.popup();  
var myIcon = L.icon({iconUrl: 'img/monster.png', className: 'my-div-icon'});
var markerList = [];
var generation = setInterval(generateMarkers, 1000);



function showScore(){
    $('#scoreboard').toggleClass('showMe');
};



