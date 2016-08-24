// we think we figured out our problem
//hopefully this shit doesn't break
//i swear, i am going to remove that comment when i officially post this.

var point= [33.784010, -84.386030];
var spawnPoints = [];

function SpawnPoint(){
	this.coordinates = [];
	this.quad = 0;
	this.trajectory = [];
	this.increment = [];
}
function swellTrajectory(newLat1, newLon1, absLat2, absLon2, quad){
	var startBox = [];
    var startBoxlat = 0;
    var startBoxlon = 0;
    var boxCoord = swellBox(newLat1, newLon1, absLat2, absLon2);
    var boxAbsLat = boxCoord[0] / 6; //6 is the total amount of increment per box
    var boxAbsLon = boxCoord[1] / 6;
    if(quad == 1){
        startBoxlat = newLat1 - boxAbsLat;
        startBoxlon = newLon1 - boxAbsLon;
    }else if(quad == 2){
        startBoxlat = newLat1 - boxAbsLat;
        startBoxlon = newLon1 + boxAbsLon;      
    }else if(quad == 3){
        startBoxlat = newLat1 + boxAbsLat;
        startBoxlon = newLon1 + boxAbsLon;      
    }else if(quad == 4){
        startBoxlat = newLat1 + boxAbsLat;
        startBoxlon = newLon1 - boxAbsLon;      
    }
    startBox.push(startBoxlat,startBoxlon);
    return startBox;
}
    
//this function defines the absolute value of our new box parameters for each swell point.
function swellBox(newLat1, newLon1, absLat2, absLon2){
     var boxLat = Math.abs(newLat1 - absLat2);
     var boxLon = Math.abs(newLon1 - absLon2);
     boxCoord = [boxLat, boxLon];
     return boxCoord;
}

function whichWayWest(coord, randomCoord, check){
	var changedCoord = 0;
	changedCoord = coord - randomCoord;
	return changedCoord;
}
function whichWaySouth(coord, randomCoord, check){
	var changedCoord = 0;
	changedCoord = coord + randomCoord;
	return changedCoord;
}

function generateSpawn(south, west, limit){
	//holds our coordinates
	var coord = new SpawnPoint();
	var forRandomSpawn = Math.ceil(Math.random()*3);
	//randomly generates a coordinate based on the interval passed for west, .1 is the radius from center
	var randomCoordWest = (Math.random() * limit);
	//randomly generates a coordinate based on the interval passed for south, .1 is the radius from center
	var randomCoordSouth = (Math.random() * limit);
	if(forRandomSpawn === 1){
		//this adds a radius buffer
		randomCoordWest += .1;
	}else if(forRandomSpawn === 2){
		//this adds a radius buffer
		randomCoordSouth += .1;
	}else{
		//adds to both
		randomCoordWest += .1;
		randomCoordSouth += .1;
	}
	var checkForSouth = Math.ceil(Math.random()* 2);
	coord.coordinates.push(whichWaySouth(south, randomCoordSouth, checkForSouth));
	var checkForWest = Math.ceil(Math.random()* 2);
	coord.coordinates.push(whichWayWest(west, randomCoordWest, checkForWest));
	if(checkForSouth == 1 && checkForWest ==1){
        coord.quad = 1;
    }else if(checkForSouth == 1 && checkForWest == 2){
        coord.quad = 2;
    }else if(checkForSouth == 2 && checkForWest == 2){
        coord.quad = 3;
    }else if(checkForSouth == 2 && checkForWest ==1){
        coord.quad = 4;
    }
	coord.trajectory = swellTrajectory(coord.coordinates[0], coord.coordinates[1], point[0], point[1], coord.quad);
	coord.increment = boxCoord;
	spawnPoints.push(coord);
	return coord;
}
