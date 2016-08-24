var test = { coordinates: [ 33.94401243451584, -83.93956145124154 ],
  quad: 1,
  trajectory: [ 33.91734536209653, -84.01397287603461 ],
  increment: [ 0.16000243451583884, 0.4464685487584603 ] 
};

//the counters are in case we want to increment the box from each spawn point. may not be necessary now that the zombies can move.
	// var counter = 15;
	// var counter2 = 0;
	// var theLimit = 0;
function zombieGrowthPath(spawn, limit){
	if(counter == 15 && counter2 <= 6){
		theLimit = theLimit + limit;
		counter = 0;
		counter2++;
	}else if(counter !== 15 && counter2 <= 5){
		//zombie builder function call
		generateZombieSpawn(spawn, limit)
		counter++;
	}
}

// Q This is where the zombie points will be housed.  They will hold coordinates, the quadrant, and the distance from the center;
ZombiePoint(){
	this.coordinates = [];
	this.quad = 0;
	// Q this is so that we can check to find out once a zombie is within a certain radius from the center. Integral to figuring out the game function.
	this.distanceFromCenter = 0;
}

// Q we confirmed that this does what it's suppose to do which is generate coordinates for a zombie somewhere within the bounds between the given spawn point and the center of the map.
function generateZombieSpawn(spawnPoint){
	// Q holds our coordinates
	var zombCoord = [];
	var spawnLat = spawnPoint.coordinates[0];
	var spawnLon = spawnPoint.coordinates[1];
	var zombLat = 0;
	var zombLon = 0;
	// var coord = new ZombiePoint();
	var forRandomSpawn = Math.ceil(Math.random()*3);
	//randomly generates a coordinate based on the interval passed for west, 
	var randomZombieCoordWest = (Math.random() * spawnPoint.increment[0]);
	console.log(randomZombieCoordWest);
	//randomly generates a coordinate based on the interval passed for south,
	var randomZombieCoordSouth = (Math.random() * spawnPoint.increment[1]);
	console.log(randomZombieCoordSouth);
	// Q each of these conditionals creates the Lat and Lon for the randomly generated zombie and does the proper math based on the quadrant that it is in.  It then determines if random coordinates will be added to one or both of the coordinate points
	if(spawnPoint.quad = 1){
		if (forRandomSpawn === 1){
			zombLat = spawnLat - randomZombieCoordWest;
			zombLon = spawnLon;
		} else if(forRandomSpawn === 2){
			zombLat = spawnLat;
			zombLon = spawnLon - randomZombieCoordSouth;
		} else {
			zombLat = spawnLat - randomZombieCoordWest;
			zombLon = spawnLon - randomZombieCoordSouth;
		}	
	}else if(spawnPoint.quad = 2){
		if (forRandomSpawn === 1){
			zombLat = spawnLat - randomZombieCoordWest;
			zombLon = spawnLon;
		} else if(forRandomSpawn === 2){
			zombLat = spawnLat;
			zombLon = spawnLon + randomZombieCoordSouth;
		} else {
			zombLat = spawnLat - randomZombieCoordWest;
			zombLon = spawnLon + randomZombieCoordSouth;
		}
	}else if(spawnPoint.quad = 3){
		if (forRandomSpawn === 1){
			zombLat = spawnLat + randomZombieCoordWest;
			zombLon = spawnLon;
		} else if(forRandomSpawn === 2){
			zombLat = spawnLat;
			zombLon = spawnLon + randomZombieCoordSouth;
		} else {
			zombLat = spawnLat + randomZombieCoordWest;
			zombLon = spawnLon + randomZombieCoordSouth;
		}
	}else if(spawnPoint.quad = 4){
		if (forRandomSpawn === 1){
			zombLat = spawnLat + randomZombieCoordWest;
			zombLon = spawnLon;
		} else if(forRandomSpawn === 2){
			zombLat = spawnLat;
			zombLon = spawnLon - randomZombieCoordSouth;
		} else {
			zombLat = spawnLat + randomZombieCoordWest;
			zombLon = spawnLon - randomZombieCoordSouth;
		}
	}
	zombCoord.push(zombLat, zombLon);
	return zombCoord;
}

