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
var spawnPoints = [[34.006445, -84.215383]];

function whichWay(coord, randomCoord, check){
	var changedCoord = 0;
	if(check === 1){
		changedCoord = coord + randomCoord;
	}else if(check === 2){
		changedCoord = coord - randomCoord;
	}
	return changedCoord;
}

function generateSpawn(south, west, limit){	
	//holds our coordinates
	var coord = [];
	//randomly generates a coordinate based on the interval passed for west, .1 is the radius from center
	var randomCoordWest = (Math.random() * limit);
	//randomly generates a coordinate based on the interval passed for south, .1 is the radius from center
	var randomCoordSouth = (Math.random() * limit);

	var checkForSouth = Math.ceil(Math.random()* 2);
	coord.push(whichWay(south, randomCoordSouth, checkForSouth));
	var checkForWest = Math.ceil(Math.random()* 2);
	coord.push(whichWay(west, randomCoordWest, checkForWest));
	if(checkForSouth == 1 && checkForWest ==1){
		coord.push(1);
	}else if(checkForSouth == 1 && checkForWest == 2){
		coord.push(2);
	}else if(checkForSouth == 2 && checkForWest == 2){
		coord.push(3);
	}else if(checkForSouth == 2 && checkForWest ==1){
		coord.push(4);
	}
	var dist = distance(coord[0], coord[1], point[0], point[1], "M")
	console.log(dist);
 	if(dist > 10){
 		return coord;
 		spawnPoints.push(coord);
 	}else{
 		generateSpawn(south, west, limit);
 	}
	// console.log(spawnPoints)
}

function generateMarkers() {
    var tempPoint = generateSpawn(point[0], point[1], .4);
    // console.log(tempPoint);
    marker = L.marker(tempPoint.coordinate, {icon: myIcon})
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
        // console.log("test, test");
    }
}   

// function generateSwell(coord, interval){
// 	//generates random variable based on interval to the coordinate
// 	var randomCoord = Math.random() * interval;
// 	//holds the new lat or lng
// 	var newCoord = 0;
// 	//random check for whether to add or subtract
// 	var whichWay = Math.ceil(Math.random()*2);
// 	//determines whether we add or subtract the interval
// 	if(whichWay == 1){
// 		newCoord = coord + randomCoord;
// 	}else if(whichWay == 2){
// 		newCoord = coord - randomCoord;
// 	}
// 	return newCoord;
// }



function stop(){
	clearInterval(generation);

}

// This super sweet function calculates the distance between a given set of coordinates and another set.
// you can even define what unit you want it to return in (miles, kilometers, or nautical miles)!
function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}