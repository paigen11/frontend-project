// for reference
// var westCoordinate = -85.579407959
// var southCoordinate = 33.9775311374
// .0009 is to keep the generation fairly small. number should never exceed .4 or be outside the map bounds (for our map.)
//swell interval => .0009
//relocate variable => .4

var point = [-85.579407959, 33.9775311374];


function generate(west, south, interval){
	//randomly generates a coordinate based on the interval passed
	var randomCoord = Math.random() * interval;
	// the array to hold the coordinates
	var coord = [];


	//we added the randomCoord so the point moves north from the furthest south point
 	var newSC = south + randomCoord;
 	//add south/north coord in array second since it is referenced after west/east

	coord.push(newSC);
	//we added the randomCoord so the point moves east from the futhest west point
	var newWC = west + randomCoord;
	//add west/east coord in array first since it is referenced first.
	coord.push(newWC);
	//return the array coordinate to be pushed to the geoJson object.
	console.log(coord);
	return coord;
}

// setTimeout(generate, 500, point[0], point[1], .0009);
// setInterval(generate, 5000, point[0], point[1], .4);