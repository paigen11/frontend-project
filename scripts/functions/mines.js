// bombSelected can't be set as true unless bombAvailable is true
var mineAvailable = false;
// bombSelected  is set to true on a click event, and will unlock the bomb weapon
var mineSelected = false;

$('#mine').on('click', function() {
	// only allow weapon to be selected if it is available
	if(mineAvailable){
		mineSelected = true;
		$('#mine').removeClass('bomb-available');
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

// function onMapClickMines(e) {
//     if (mineSelected) {
// 	    var circle = L.circle(e.latlng, 6000, {color: 'red'}).addTo(map);
// 	    MineAreaCheck();
//     	mineAvailable = false;
//     	mineSelected = false;
//     	$('body, .leaflet-interactive').removeClass('bomb-cursor');
//     	mineDelay();
//     }
// }

// if weapon is not available, set timer for it to become available again.
function mineDelay() {
	if (!mineAvailable) {
		setTimeout(function(){
			mineAvailable = true;
			$('#mine').addClass('mine_btn');
			$('#mine').addClass('bomb-available');
			$('#mine').addClass('mineMove');
			 newMessage("Place a mine as a trap for zombies!"); 
		}, 40000);
		
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