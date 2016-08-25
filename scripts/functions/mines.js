// bombSelected can't be set as true unless bombAvailable is true
var mineAvailable = false;
// bombSelected  is set to true on a click event, and will unlock the bomb weapon
var mineSelected = false;

$('.link_three').on('click', function() {
	// only allow weapon to be selected if it is available
	if(mineAvailable){
		mineSelected = true;
		$('.link_three').removeClass('bomb-available');
		$('body, .leaflet-interactive').addClass('bomb-cursor');
	}
})
//have mines check their own radius
function MineAreaCheck() {
	var mineTouched = false;
	if (getDistanceFromLatLonInKm(markerList[i]._latlng.lat, markerList[i]._latlng.lng, point[0], point[1]) < 6){
		mineAreaEffect(circle);
	}
}

function onMapClick(e) {
    if (mineSelected) {
	    var circle = L.circle(e.latlng, 8000, {color: 'red'}).addTo(map);
    	mineAvailable = false;
    	mineSelected = false;
    	$('.link_three').removeClass('bomb-available');
    	$('body, .leaflet-interactive').removeClass('bomb-cursor');
    	mineDelay();
    }
}

// if weapon is not available, set timer for it to become available again.
function mineDelay() {
	if (!mineAvailable) {
		setTimeout(function(){
			mineAvailable = true;
			$('.link_three').addClass('bomb-available');
			 newMessage("Place a mine as a trap for zombies!"); 
		}, 15000);
		
	}
}

// loop through markers in array, if coordinates are less than the radius
// of the weapon's effect, remove markers from array and map, and update score.
function mineAreaEffect(circle) {
	var killedMarkers = [];
	for(i = 0; i < markerList.length; i++) {
		if (getDistanceFromLatLonInKm(markerList[i]._latlng.lat, markerList[i]._latlng.lng, circle._latlng.lat, circle._latlng.lng) < 8){
			markerList[i].setIcon(corpseIcon);
			killedMarkers.push(markerList[i])

			setTimeout(function(){
				for(j = 0; j < killedMarkers.length; j++) {
					map.removeLayer(killedMarkers[j])
				}
			},1000)
			
			markerList.splice(i, 1);
			scoreboard.innerHTML++;
		}
	}
	setTimeout(function() {
		// remove weapon polygon from map when animation is done
		map.removeLayer(circle)
	}, 1000)
}