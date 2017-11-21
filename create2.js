var uiCanvas = document.getElementById('ui-canvas');
var paintCanvas = document.getElementById('paint-canvas');
var cursorCanvas = document.getElementById('cursor-canvas');

var uiContext = uiCanvas.getContext('2d');
var paintContext = paintCanvas.getContext('2d');
var cursorContext = cursorCanvas.getContext('2d');

uiCanvas.width = window.innerWidth;
uiCanvas.height = window.innerHeight;

paintCanvas.width = window.innerWidth;
paintCanvas.height = window.innerHeight;

cursorCanvas.width = window.innerWidth;
cursorCanvas.height = window.innerHeight;

var paletteColorRadius = 25;
var fillColor = 'green';

function getMousePos(Canvas, event) {
	var rect = Canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}

function paletteColor(x, y, paletteColorRadius) {
  this.beginPath();
  this.arc(x, y, r, 0, 2 * Math.PI, false);
  this.fillStyle = fillColor;
  this.fill();
}

function palette(x, y, paletteSpacing, numColors){
  var paletteColor = [];
  for (var i = 1; i<= numColors; i++){
    paletteColor[i] = new paletteColor(x+(paletteSpacing*i), y, paletteColorRadius);
  }
}

function isInside(pos, circle){
  return Math.sqrt((pos.x-circle.x)*(pos.x-circle.x) + (pos.y-circle.y)*(pos.y-circle.y)) < circle.r
}

var green = {
	x:250,
	y:350,
	paletteColorRadius:25
};

uiCanvas.addEventListener('click', function(evt) {
	var mousePos = getMousePos(uiCanvas, evt);
	if (isInside(mousePos, green)) {
		alert('clicked inside');
    }else{
        alert('clicked outside rect');
    }
}, false);

function draw() {
	palette(0,50,50,8);
};

uiContext.draw();
