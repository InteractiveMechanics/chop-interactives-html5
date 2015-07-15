function ClimbGame() {
	this.init = function() {

		this.bgCanvas = document.getElementById('background');
		this.bgContext = this.bgCanvas.getContext('2d');

		Background.prototype.context = this.bgContext;
		Background.prototype.canvasWidth = this.bgCanvas.width;
		Background.prototype.canvasHeight = this.bgCanvas.height;

		this.background = new Background();
		this.background.init(0,0);

	}

	this.start = function() {
		animate();
	}
}

function animate() {
	requestAnimFrame( animate );
	console.log(game.background);
}

window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame   ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
})();

var game = new ClimbGame();
function init() {
	console.log('test');
	game.start();
}

init();