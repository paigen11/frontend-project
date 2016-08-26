// chainsawAvailable is set to true on a timer and will be used together with a CSS class to animate the bomb button. 
// chainsawSelected can't be set as true unless bombAvailable is true
var chainsawAvailable = false;
// chainsawSelected  is set to true on a click event, and will unlock the bomb weapon
var chainsawSelected = false;
var myChainsaw;

// click listener for weapon button
$('#chainsaw').on('click', function() {
	// only allow weapon to be selected if it is available
	if(chainsawAvailable){
		chainsawSelected = true;
		$('#chainsaw').removeClass('bomb-available');
		// $('#chainsaw').toggleClass('chainsawMove');
		$('body, .leaflet-interactive').addClass('chainsaw-cursor');
	}
	
})

// sawed is called by a mouseover listener placed on all markers
// if the weapon is available and listener fires, the marker is removed
function sawed(marker){
	if(chainsawSelected){
		marker.setIcon(corpseIcon);
		setTimeout(function(){
			map.removeLayer(marker);
		}, 1000)
		
		scoreboard.innerHTML++;
	  	var index = markerList.indexOf(marker);
            if(index > -1){
                markerList.splice(index, 1);
            }
		setTimeout(function(){
			chainsawAvailable = false;
			chainsawSelected = false;
			$('body, .leaflet-interactive').removeClass('chainsaw-cursor');
			chainsawDelay();
		}, 5000)
	}
}

function chainsawDelay() {
	if(!chainsawAvailable) {
		myChainsaw = setTimeout(function(){
			chainsawAvailable = true;
			$('#chainsaw').addClass('chainsaw-btn');
			$('#chainsaw').addClass('bomb-available');
			$('#chainsaw').addClass('chainsawMove');
			newMessage("The chainsaw is ready to mow down some undead! Just hover over them to kill 'em.");
		}, 30000);
	}
}