// for reference
// var westCoordinate = -85.579407959
// var southCoordinate = 33.9775311374
// .0009 is to keep the generation fairly small. number should never exceed .4 or be outside the map bounds (for our map.)
//swell interval => .0009
//relocate variable => .4

// var point = [33.9775311374, -85.579407959];
// [-84.549407959,33.5471175795], // Southwest coordinates
//     [-84.1703796387,33.9775311374]  // Northeast coordinates


var point= [33.784010, -84.386030];
var spawnPoints = [];

function whichWay(coord, randomCoord, check){
	var changedCoord = 0;
	if(check === 1){
		changedCoord = coord + randomCoord;
	}else if(check === 2){
		changedCoord = coord - randomCoord;
	}
	return changedCoord;
}

function generate(south, west, limit){
	//holds our coordinates
	var coord = [];
	//randomly generates a coordinate based on the interval passed for west
	var randomCoordWest = Math.random() * limit;
	//keeps the added coordinate out of the center;
	if(randomCoordWest < (limit/4)){
		randomCoordWest += (limit/4)
	}
	//randomly generates a coordinate based on the interval passed for south
	var randomCoordSouth = Math.random() * limit;
	//keeps the added coordinate out of the center;
	if(randomCoordSouth < (limit/4)){
		randomCoordSouth += (limit/4)
	}

	var checkForSouth = Math.ceil(Math.random()* 2);
	coord.push(whichWay(south, randomCoordSouth, checkForSouth));
	var checkForWest = Math.ceil(Math.random()* 2);
	coord.push(whichWay(west, randomCoordWest, checkForWest));
	spawnPoints.push(coord);
	return coord;
}

function generateMarkers() {
    var tempPoint = generate(point[0], point[1], .4);
    marker = L.marker(tempPoint, {icon: myIcon})
        .addTo(map)
        .on("click", function(e){
            if(bombSelected) {
            	onMapClick(e);
            } else {
            	map.removeLayer(this);
	            //remove element from markerList array
	            var index = markerList.indexOf(this);
	            if(index > -1){
	                markerList.splice(index, 1);
            	}
            	scoreboard.innerHTML++;
            }

          
        })
        .on("mouseover", function(e){
        	sawed(this);
        });
    //push marker coords to an array    
    markerList.push(marker);
    //if markerList is longer than X show test - this will eventually end the game when the player's overrun with zombies
    if(markerList.length > 10){
        console.log("test, test");
    }
}   

function generateSwell(coord, interval){
	//generates random variable based on interval to the coordinate
	var randomCoord = Math.random() * interval;
	//holds the new lat or lng
	var newCoord = 0;
	//random check for whether to add or subtract
	var whichWay = Math.ceil(Math.random()*2);
	//determines whether we add or subtract the interval
	if(whichWay == 1){
		newCoord = coord + randomCoord;
	}else if(whichWay == 2){
		newCoord = coord - randomCoord;
	}
	return newCoord;
}

function stop(){
	clearInterval(generation);
}