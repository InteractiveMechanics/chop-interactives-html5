var liteBrigthSpacing = -55;
var numberOfRows = 9; 
var numberOfColumns = 16;
var isMouseDown = false;
var mousePos = {
      x: -1,
      y: -1
};

var liteBrights = [];
var highlights = [];

var backgroundCanvas = document.getElementById('background');
var backgroundContext = backgroundCanvas.getContext("2d");

backgroundCanvas.width = window.innerWidth;
backgroundCanvas.height = window.innerHeight;

var liteBrightCanvas = document.getElementById('lite-bright');
var liteBrightContext = liteBrightCanvas.getContext("2d");

liteBrightCanvas.width = window.innerWidth;
liteBrightCanvas.height = window.innerHeight;

var hightlighCanvas = document.getElementById('highlight');
var highlightContext = hightlighCanvas.getContext("2d");

hightlighCanvas.width = window.innerWidth;
hightlighCanvas.height = window.innerHeight;

hightlighCanvas.onmousedown = mouseDown;
hightlighCanvas.onmouseup = mouseUp;
hightlighCanvas.onmousemove = mouseMove;


var liteBrightWidth = ((liteBrightCanvas.width - (2 * liteBrigthSpacing)) / numberOfColumns) - liteBrigthSpacing; 
var liteBrightHeight = ((liteBrightCanvas.height - (2 * liteBrigthSpacing)) / numberOfRows) - liteBrigthSpacing;


if( liteBrightWidth > liteBrightHeight ) { 
	var dotDiameter = liteBrightHeight; 
	var xMargin = (liteBrightCanvas.width - ((2 * liteBrigthSpacing) + (numberOfColumns * dotDiameter))) / numberOfColumns; 
	var yMargin = liteBrigthSpacing; 
} else { 
	var dotDiameter = liteBrightWidth; 
	var xMargin = liteBrigthSpacing; 
	var yMargin = (liteBrightCanvas.height - ((2 * liteBrigthSpacing) + (numberOfRows * dotDiameter))) / numberOfRows; 
} 

var dotRadius = dotDiameter * 0.5; 
for(var i = 0; i < numberOfRows; i++) { 
	for(var j = 0; j < numberOfColumns; j++) { 
		var x = (j * (dotDiameter + xMargin)) + liteBrigthSpacing + (xMargin / 2) + dotRadius; 
		var y = (i * (dotDiameter + yMargin)) + liteBrigthSpacing + (yMargin / 2) + dotRadius; 
		createLiteBrights(x, y, dotRadius); 
	}
}


console.log(liteBrights[0]);

function createLiteBrights(x, y, radius) { 
	var liteBrite = new LiteBrite(x, y, liteBrightCanvas);
	liteBrite.loadLiteBrites();
	
	liteBrights.push(liteBrite);
	highlights.push(new Highlight(x, y, hightlighCanvas));
}

function mouseMove(e) {
	mousePos = getMousePos(e);
}

function mouseDown(e) {
	isMouseDown = true;
}

function mouseUp(e) {
	isMouseDown = false;
}

function getMousePos(evt) {
    var rect = liteBrightCanvas.getBoundingClientRect();
    mousePos = {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    }
    return mousePos;
}

function draw() {
	liteBrights.forEach(function(lite){
		lite.draw();
	});

	highlights.forEach(function(highlight){
		highlight.draw();
	});
}

function update() {
	var mouseX = mousePos.x;
	var mouseY = mousePos.y;

	for(var i = 0; i < highlights.length; i++) {
		var liteBright = liteBrights[i];
		var highlight = highlights[i];
		if (isOverLiteBright(mouseX, mouseY, highlight) && isMouseDown) {
			liteBright.sprite = liteBright.gray
		}

		if(isOverLiteBright(mouseX, mouseY, highlight) && !isMouseDown) {
			sleep();
			liteBright.sprite = liteBright.getSprite();
		}
	}
}

function isOverLiteBright(mX, mY, liteBright) {
	return (mX >= liteBright.x && mX < liteBright.x + liteBright.width && mY >= liteBright.y && mY < liteBright.y + liteBright.height);
}

function loop() {
	draw();
	update();
}

function sleep() {
	var e = new Date().getTime() + (150);
	while (new Date().getTime() <= e) {}
}

setInterval(loop, 1000/60);