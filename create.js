var paletteSpacing = 55;
var paletteRadius = 25;
var numberOfColors = 12;
var isMouseDown = false;
var palettePosX = 50;
var palettePosY = 200;
// var mousePos = {
//       x: -1,
//       y: -1
// };

var paletteColors = [];

var uiCanvas = document.getElementById('ui-canvas');
var uiContext = uiCanvas.getContext("2d");

uiCanvas.width = window.innerWidth;
uiCanvas.height = window.innerHeight;

uiCanvas.onmousedown = mouseDown;
uiCanvas.onmouseup = mouseUp;
uiCanvas.onmousemove = mouseMove;

//var paletteRadius = paletteDiameter * 0.5;
for(var i = 0; i < numberOfColors; i++) {
		var x = (i * paletteSpacing)
		var y = palettePosY;
		createPalette(x, y, paletteRadius);
}


console.log(paletteColors[0]);

function createPalette(x, y, radius) {
	var palette = new Palette(x, y, uiCanvas);
	palette.loadPaletteColors();

	paletteColors.push(palette);
	// highlights.push(new Highlight(x, y, hightlighCanvas));
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

uiCanvas.addEventListener('click', function(evt) {
	var mousePos = getMousePos(uiCanvas, evt);
	if (isInside(mousePos, green)) {
		alert('clicked inside');
    }else{
        alert('clicked outside rect');
    }
}, false);

//hover from litebright
function getMousePos(evt) {
    var rect = uiCanvas.getBoundingClientRect();
    mousePos = {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    }
    return mousePos;
}

function draw() {
	paletteColors.forEach(function(color){
		color.draw();
	});
}

function update() {
	var mouseX = mousePos.x;
	var mouseY = mousePos.y;

	// for(var i = 0; i < highlights.length; i++) {
	// 	var liteBright = liteBrights[i];
	// 	var highlight = highlights[i];
	// 	if (isOverLiteBright(mouseX, mouseY, highlight) && isMouseDown) {
	// 		liteBright.sprite = liteBright.gray
	// 	}
  //
	// 	if(isOverLiteBright(mouseX, mouseY, highlight) && !isMouseDown) {
	// 		sleep();
	// 		liteBright.sprite = liteBright.getSprite();
	// 	}
	// }
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
