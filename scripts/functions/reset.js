function reset(){
	var howManyZombiesInside = document.getElementById('danger_meter');
	$('#restart').on('click', function(){
		for(var i = 0; i < markerList.length; i++){
			map.removeLayer(markerList[i]);
		}
		clearInterval(interval);
		howManyZombiesInside.innerHTML = 0;
		markerList = [];
		dangerZombies = [];
		scoreboard.innerHTML = 0;
		$('#mine').removeClass('bomb-available');
		$('#mine').removeClass('mineMove');
		$('#chainsaw').removeClass('bomb-available');
		$('#chainsaw').removeClass('chainsawMove');
		$('#bomb').removeClass('bomb-available');
		$('#bomb').removeClass('bombMove');
		$('#start').removeClass('bomb-available');
		$('.danger-wrapper').css('width: 50px')
		$('.danger-wrapper').removeClass('bomb-available');
		clearTimeout(myChainsaw);
		clearTimeout(myMine);
		clearTimeout(myBomb);

		interval = setInterval(generateMarkers, spawnInterval);
	    playOptions(); 
	    bombDelay();
	    mineDelay();
	    chainsawDelay();
	    centerChecker = setInterval(checkCenter, 1000);
	    mineListen = setInterval(amIPlaced, 1000);
	})
	
}

reset();
