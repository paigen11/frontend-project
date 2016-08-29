function resetVar(){
	popup = L.popup();  
	myIcon = L.icon({iconUrl: 'img/zombie_stroke.png', className: 'my-div-icon', iconSize: [25,25]});
	corpseIcon = L.icon({iconUrl: 'img/zombie_corpse.png', className: 'my-div-icon', iconSize: [25,25]});
	mineIcon = L.icon({iconUrl: 'img/mine_set.png', className: 'my-div-icon', iconSize: [30,30]});

	markerList = [];
	generation;
	centerChecker;

	castle = L.icon({iconUrl: '../img/center_building.png', iconSize: [96, 96]});
	home = L.marker([33.751927, -84.392918], {icon: castle, clickable: 'false', zIndexOffset: '10000'}).addTo(map);
	newIcon;
	blankIcon = L.icon({iconUrl: 'img/blank_tile.png', className: 'my-div-icon', iconSize: [30,30]})
}

function reset(){
	var howManyZombiesInside = document.getElementById('danger_meter');
	$('#restart').on('click', function(){
		// for(var i = 0; i < markerList.length; i++){
		// 	map.removeLayer(markerList[i]);
		// }
		// clearInterval(interval);
		// howManyZombiesInside.innerHTML = 0;
		// resetVar();
		// scoreboard.innerHTML = 0;
		// // $('#mine').removeClass('bomb-available');
		// // $('#mine').removeClass('mineMove');
		// $('#chainsaw').removeClass('bomb-available');
		// $('#chainsaw').removeClass('chainsawMove');
		// $('#bomb').removeClass('bomb-available');
		// $('#bomb').removeClass('bombMove');
		// $('#start').removeClass('bomb-available');
		// $('.danger-wrapper').css('width: 50px')
		// $('.danger-wrapper').removeClass('bomb-available');
		// clearTimeout(myChainsaw);
		// // clearTimeout(myMine);
		// clearTimeout(myBomb);

		// interval = setInterval(generateMarkers, spawnInterval);
	 //    playOptions(); 
	 //    bombDelay();
	 //    // mineDelay();
	 //    chainsawDelay();
	 //    centerChecker = setInterval(checkCenter, 1000);
	 //    // mineListen = setInterval(amIPlaced, 1000);
	 window.location.reload();
	})
	
}

reset();
