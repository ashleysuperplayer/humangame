console.clear();

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var toggle = true;
var timer;

var canvas, ctx;

function initCanvas() {
	canvas = document.getElementById("diCanvas"),
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "#999";
	ctx.beginPath();
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
