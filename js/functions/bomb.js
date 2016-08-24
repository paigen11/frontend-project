var bombAvailable = false;
var bombSelected = false;

bombDelay();

$('.link_three').on('click', function() {
	if(bombAvailable){
		bombSelected = true;
		$('.link_three').removeClass('bomb-available');
		$('body, .leaflet-interactive').addClass('bomb-cursor');
	}
})

function onMapClick(e) {
    if (bombSelected) {
	    var circle = L.circle(e.latlng, 8000).setStyle({className: "pulseCustom"}).addTo(map);
    	areaEffect(circle);
    	bombAvailable = false;
    	bombSelected = false;
    	$('.link_three').removeClass('bomb-available');
    	$('body, .leaflet-interactive').removeClass('bomb-cursor');

    	bombDelay();
    }
}

function bombDelay() {
	if (!bombAvailable) {
		setTimeout(function(){
			bombAvailable = true;
			$('.link_three').addClass('bomb-available');
		}, 5000);
		
	}
}

function areaEffect(circle) {
	for(i = 0; i < markerList.length; i++) {
		if (getDistanceFromLatLonInKm(markerList[i]._latlng.lat, markerList[i]._latlng.lng, circle._latlng.lat, circle._latlng.lng) < 8){
			map.removeLayer(markerList[i])
			markerList.splice(i, 1);
			scoreboard.innerHTML++;
		}
	}
	setTimeout(function() {
		map.removeLayer(circle)
	}, 1000)
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2-lat1);  // deg2rad below
	var dLon = deg2rad(lon2-lon1); 
	var a = 
	Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
	Math.sin(dLon/2) * Math.sin(dLon/2)
	; 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; // Distance in km
	return d;
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}

