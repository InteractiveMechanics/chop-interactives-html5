
var paletteColors = [];

var uiCanvas = document.getElementById('ui-canvas');
var uiContext = uiCanvas.getContext("2d");

uiCanvas.width = window.innerWidth;
uiCanvas.height = window.innerHeight;

var paletteWidth = uiCanvas.width;
var paletteHeight = 200;
var palettePosX = 50;
var palettePosY = uiCanvas.height - (paletteHeight/2);
var paletteSpacing = paletteWidth/16;
var paletteRadius = 25;
var numberOfColors = 12;

var isMouseDown = false;
var mousePos = {
      x: -1,
      y: -1
};

for(var i = 0; i < numberOfColors; i++) {
		var x = (i * paletteSpacing)
		var y = palettePosY;
		createPalette(x, y, paletteRadius);
}


console.log(paletteColors[0]);

function createPalette(x, y, radius) {
	var palette = new Palette(x, y, radius, uiCanvas);
	palette.loadPaletteColors();

	paletteColors.push(palette);
	// highlights.push(new Highlight(x, y, hightlighCanvas));
}


function mouseDown(e) {
	isMouseDown = true;
}

function mouseUp(e) {
	isMouseDown = false;
}

function getMousePos(canvas, evt) {
    var rect = uiCanvas.getBoundingClientRect();
    mousePos = {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    }
    return mousePos;
}

function mouseMove(e) {
	mousePos = getMousePos(uiCanvas, e);
}

function draw() {
	paletteColors.forEach(function(color){
		color.draw();
	});
}

function update() {
	var mouseX = mousePos.x;
	var mouseY = mousePos.y;

  for(var i = 0; i < paletteColors.length; i++) {
    var paletteColor = paletteColors[i];
    if  (isOverPaletteColor(mouseX, mouseY, paletteColor) && isMouseDown) {
      console.log('color '+ (i+1))
    }else{
          // alert('clicked outside paletteColor');
      }
  }

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

// function sleep() {
// 	var e = new Date().getTime() + (150);
// 	while (new Date().getTime() <= e) {}
// }

function isOverPaletteColor(mX, mY, circle) {
	//return (mX >= paletteColor.x && mX < paletteColor.x + paletteColor.width && mY >= paletteColor.y && mY < paletteColor.y + paletteColor.height);
  return Math.sqrt((mX-circle.x)*(mX-circle.x) + (mY-circle.y)*(mY-circle.y)) < circle.r
}

function loop() {
	draw();
	update();
}

function main() {
	setInterval(loop, 1000/60);
}

uiCanvas.onmousedown = mouseDown;
uiCanvas.onmouseup = mouseUp;
uiCanvas.onmousemove = mouseMove;

main();
console.log(paletteColors.length);
