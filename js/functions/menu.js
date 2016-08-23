var count = 0;
var scoreboard = document.getElementById('scoreboard');
scoreboard.innerHTML = count;
function generateMarkers() {
    var tempPoint = generate(point[0], point[1], .4);
    marker = L.marker(tempPoint, {icon: myIcon})
        .addTo(map)
        .on("click", function(e){
            map.removeLayer(this);
            //remove element from markerList array
            var index = markerList.indexOf(this);
            if(index > -1){
                markerList.splice(index, 1);
            }
            scoreboard.innerHTML++;
        })
    //push marker coords to an array    
    markerList.push(marker);
    //if markerList is longer than X show test - this will eventually end the game when the player's overrun with zombies
    if(markerList.length > 10){
        console.log("test, test");
    }
}   