//Get a random number from 0 to size
function getRandomNumber (size) {
	return Math.floor(Math.random() * size);
}

//Calculate distance between click event and target
function getDistance (event, target) {
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

//Get a string representing the distance
var getDistanceHint = function (distance) {
	if (distance < 15) {
		return "I am one with the force, and the force is with me!";
	} else if (distance < 30) {
		return "The force is strong in this one. The force is really hot!";
	} else if (distance < 60) {
		return "I sense a disturbance in the force. The force is hot.";
	} else if (distance < 100) {
		return "Search your feelings. The force is warm.";
	} else if (distance < 190) {
		return "I have a bad feeling about this. The force is cold.";
	} else if (distance < 350) {
		return "Do or do not. There is no try. The force is really cold.";
	} else {
		return "The force is freezing. I find your lack of faith disturbing!";
	}
};

//Set up our variables
var width = 700;
var height =476;
var clicks = 0;

//Create a random target location
var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};

//Add a click handler to the img element
window.onload=function(){
	//This function window.onload must be applied because the JS is loading before the HTML, thus causing an error for the addEventListener to return as null
	document.querySelector("img").addEventListener("click", (event) => { 
		clicks++;
		//Get distance between click event and target
		var distance = getDistance(event, target);
		var distanceHint = getDistanceHint(distance);
		//update the #distance element with the new hint
		document.getElementById("distance").innerHTML=distanceHint;
		//If the click was close enough, tell them they won
		if (distance < 8) {
			alert("Found the droids we have been looking for in " + clicks + " clicks!");
		}
	});
}
	
