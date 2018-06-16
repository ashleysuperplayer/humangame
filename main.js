console.clear();

var toggle = true;
var timer;

var canvas, ctx;

function initCanvas() {
	canvas = document.getElementById("diCanvas"),
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "#999";
	ctx.beginPath();
	ctx.arc(100,100,75,0,2*Math.PI);
	ctx.fill();
}

function boobie() {
	timer = setInterval(shitFunction, 1000);
}

function shitFunction() {
	if (toggle) {
		toggle = false;
		document.getElementById("shit").innerHTML = "i am a gamer";
	} else {
		toggle = true;
		document.getElementById("shit").innerHTML = "my crotch vagina tubes invading";
	}

}
boobie();
