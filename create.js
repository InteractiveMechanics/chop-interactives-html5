
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
var paletteRadius = 40;
//var numberOfColors = 12;

var isMouseDown = false;
var mousePos = {
      x: -1,
      y: -1
};

var paletteNames = ['blue-lt', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'green-lt', 'green', 'black', 'white', 'brown'];

function createPalette() {
  for(var i = 0; i < paletteNames.length; i++) {
    colorName = paletteNames[i];
    colorFile = 'images/btn-' + colorName + '.png';
    posX = palettePosX + (paletteSpacing*i);
    posY = palettePosY;
    paletteColors.push(new PaletteColor(colorName, colorFile, posX, posY, paletteRadius));
  }
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
  uiContext.clearRect(0, 0, uiCanvas.width, uiCanvas.height);
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
      console.log(paletteColor.name)
    }else{
          // alert('clicked outside paletteColor');
      }
  }
}

// function sleep() {
// 	var e = new Date().getTime() + (150);
// 	while (new Date().getTime() <= e) {}
// }

function isOverPaletteColor(mX, mY, circle) {
	//return (mX >= paletteColor.x && mX < paletteColor.x + paletteColor.width && mY >= paletteColor.y && mY < paletteColor.y + paletteColor.height);
  return Math.sqrt((mX-circle.x)*(mX-circle.x) + (mY-circle.y)*(mY-circle.y)) < circle.r;
}

function loop() {
	draw();
	update();
}

function main() {
  createPalette();
	setInterval(loop, 1000/60);
}

uiCanvas.onmousedown = mouseDown;
uiCanvas.onmouseup = mouseUp;
uiCanvas.onmousemove = mouseMove;

main();
console.log(paletteColors.length);
