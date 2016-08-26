// bombSelected can't be set as true unless bombAvailable is true
var mineAvailable = false;
// bombSelected  is set to true on a click event, and will unlock the bomb weapon
var mineSelected = false;
var theMine;
var myMine;


$('#mine').on('click', function() {
	// only allow weapon to be selected if it is available
	if(mineAvailable){
		mineSelected = true;
		$('#mine').removeClass('bomb-available');
		$('#mine').toggleClass('mineMove');
		$('body, .leaflet-interactive').addClass('bomb-cursor');
	}
})

var mineCheck;
//have mines check their own radius
function MineAreaCheck() {
	var trappedZombies = [];
	if(trappedZombies.length < 1000){
		for(i = 0; i < markerList.length; i++) {
			if (getDistanceFromLatLonInKm(markerList[i]._latlng.lat, markerList[i]._latlng.lng, theMine._latlng.lat, theMine._latlng.lng) < 3){
				trappedZombies.push(markerList[i]);
				mineAreaEffect(theMine);
				minePlaced = false;
				mineDelay();
				clearInterval(mineWatch);
				console.log('zombie inside!');
			}
		}
	}
}

function onMapClickMines(e) {
    if (mineSelected) {
	    theMine = L.circle(e.latlng, 3000, {color: 'red'}).setStyle({className: "pulseCustom"}).addTo(map);
	    minePlaced = true;
    	mineAvailable = false;
    	mineSelected = false;
    	$('body, .leaflet-interactive').removeClass('bomb-cursor');
    }
}

// if weapon is not available, set timer for it to become available again.
function mineDelay() {
	if (!mineAvailable) {
		myMine = setTimeout(function(){
			mineAvailable = true;
			$('#mine').addClass('mine_btn');
			$('#mine').addClass('bomb-available');
			$('#mine').toggleClass('mineMove');
			 newMessage("Place a mine as a trap for zombies!"); 
		}, 10000);
		
	}
}

// loop through markers in array, if coordinates are less than the radius
// of the weapon's effect, remove markers from array and map, and update score.
function mineAreaEffect(circle) {
	var killedMarkers = [];
	theMine.setRadius(8000).setStyle({className: "pulseCustom2"});
	for(i = 0; i < markerList.length; i++) {
		if (getDistanceFromLatLonInKm(markerList[i]._latlng.lat, markerList[i]._latlng.lng, theMine._latlng.lat, theMine._latlng.lng) < 8){
			markerList[i].setIcon(corpseIcon);
			killedMarkers.push(markerList[i])

			setTimeout(function(){
				for(j = 0; j < killedMarkers.length; j++) {
					map.removeLayer(killedMarkers[j])
				}
			},500)
			
			markerList.splice(i, 1);
			scoreboard.innerHTML++;
		}
	}
	setTimeout(function() {
		// remove weapon polygon from map when animation is done
		map.removeLayer(theMine)
	}, 1000)

}
function amIPlaced(){
	if(minePlaced == true){
		mineWatch = setInterval(MineAreaCheck, 500);
	}
}