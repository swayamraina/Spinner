
var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

var start_angle_for_green = 0;
var end_angle_for_green = 0.5 * Math.PI;

function incrementAngles(diff) {
	start_angle_for_green = (start_angle_for_green + diff) % (2*Math.PI); 
	end_angle_for_green = (end_angle_for_green + diff) % (2*Math.PI);
}

function drawGreen() {
	context.clearRect(0,0,canvas.width, canvas.height);
	context.beginPath();
	context.arc(100, 100, 70, start_angle_for_green, end_angle_for_green);
	context.lineWidth = 5;
	context.stroke();
	incrementAngles(0.03*Math.PI);
}

function rotate(draw) {
	draw();
}

function startGreen() {
	var timer = setInterval(function() {
		rotate(drawGreen);
	}, 40);
}

startGreen();