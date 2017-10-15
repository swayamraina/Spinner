
var canvas = document.getElementById("screen");
var context = canvas.getContext("2d");

var start_angle_for_orange, end_angle_for_orange;
var start_angle_for_blue, end_angle_for_blue;
var start_angle_for_green, end_angle_for_green;

function init() {
	context.lineWidth = 1.5;
	context.lineCap = 'round';

	start_angle_for_orange = 0.20 * Math.PI;
	end_angle_for_orange = 0.7 * Math.PI;

	start_angle_for_blue = 0.4 * Math.PI;
	end_angle_for_blue = 1.2 * Math.PI;

	start_angle_for_green = 0;
	end_angle_for_green = 0.5 * Math.PI;
}

function incrementAngles(code, diff) {
	switch(code) {
		case 'B':
				start_angle_for_blue = (start_angle_for_blue + diff) % (2*Math.PI);
				end_angle_for_blue = (end_angle_for_blue + diff) % (2*Math.PI);
			break;
		case 'O':
				start_angle_for_orange = (start_angle_for_orange + diff) % (2*Math.PI);
				end_angle_for_orange = (end_angle_for_orange + diff) % (2*Math.PI);
			break;
		case 'G':
				start_angle_for_green = (start_angle_for_green + diff) % (2*Math.PI);
				end_angle_for_green = (end_angle_for_green + diff) % (2*Math.PI);
			break;
	}
}

function drawGreen() {
	context.beginPath();
	context.arc(100, 100, 70, start_angle_for_green, end_angle_for_green);
	context.strokeStyle = "#0000FF";
	context.stroke();
	incrementAngles('G', 0.12*Math.PI);
}

function drawOrange() {
	context.beginPath();
	context.arc(100, 100, 64, start_angle_for_orange, end_angle_for_orange);
	context.strokeStyle = "#FF0000";
	context.stroke();
	incrementAngles('O', 0.09*Math.PI);
}

function drawBue() {
	context.beginPath();
	context.arc(100, 100, 58, start_angle_for_blue, end_angle_for_blue);
	context.strokeStyle = "#00FF00";
	context.stroke();
	incrementAngles('B', 0.06*Math.PI);
}

function rotate(draw) {
	draw();
}

function startGreen() {
	var timerG = setInterval(function() {
		rotate(drawGreen);
	}, 80);
}

function startBlue() {
	var timerB = setInterval(function() {
		rotate(drawBue);
	}, 80);
}

function startOrange() {
	var timerO = setInterval(function() {
		rotate(drawOrange);
	}, 80);
}

function clear() {
	var clearTimer = setInterval(function() {
		context.clearRect(0,0,canvas.width,canvas.height);
	}, 160);
}

function run() {
	init();
	clear();
	startGreen();
	startOrange();
	startBlue();
}

run();