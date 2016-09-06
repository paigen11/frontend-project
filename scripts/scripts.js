// L.mapbox.accessToken = 'pk.eyJ1IjoiZXJpY2V0dGVuc29obiIsImEiOiJjaXJ6OHgzaWowMDdsMnRwa2lmM2MyMzlmIn0._EDAWnZWG_f4wwx5d46a_w';

// create map
var map = L.map('map', {
    center: [33.73804, -84.38324],
    zoom: 11,
    minZoom: 11,
    maxZoom: 11,
    maxBounds: [
    	[33.567332, -84.639694],
    	[33.993165, -84.151121]
    ]
})

map.doubleClickZoom.disable();
map.dragging.disable();
map.on('click', onMapClick);
// map.on('click', onMapClickMines);

//add dark Mapbox styled background
L.tileLayer('https://api.mapbox.com/styles/v1/paigen11/cis9a8hiy002f2yqnpebp1p32/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFpZ2VuMTEiLCJhIjoiY2lyemJlZ3A0MDBqZTJ5cGs5ZHJicjI2YyJ9.2-dZqM-k2obDN47BpWq5Lw')
.addTo(map);

var popup = L.popup();  
var myIcon = L.icon({iconUrl: 'img/zombie_stroke.png', className: 'my-div-icon', iconSize: [25,25]});
var corpseIcon = L.icon({iconUrl: 'img/zombie_corpse.png', className: 'my-div-icon', iconSize: [25,25]});
var mineIcon = L.icon({iconUrl: 'img/mine_set.png', className: 'my-div-icon', iconSize: [30,30]});

var markerList = [];
var generation;
var centerChecker;

var castle = L.icon({iconUrl: '../img/center_building.png', iconSize: [96, 96]});
var home = L.marker([33.751927, -84.392918], {icon: castle, clickable: 'false', zIndexOffset: '10000'}).addTo(map);
var newIcon;
var blankIcon = L.icon({iconUrl: 'img/blank_tile.png', className: 'my-div-icon', iconSize: [30,30]})