var mainCanvas = document.getElementById('main-canvas');
var mainContext = mainCanvas.getContext("2d");

mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;

var lightPaintings = [];
var numPaintings = 2;
var paintingWidth = 300;
var paintingHeight = 300;
var paintingBorder = [20,20,50,20];
var marginX = 50;
var marginY = 50;
var paintingSpacing = (mainCanvas.width-(marginX*2))/5;
//var startPaintings = [];

var isMouseDown = false;
var mousePos = {
      x: -1,
      y: -1
};

function mouseDown(e) {
	isMouseDown = true;
}

function mouseUp(e) {
	isMouseDown = false;
}

function getMousePos(canvas, evt) {
    var rect = mainCanvas.getBoundingClientRect();
    mousePos = {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    }
    return mousePos;
}

function mouseMove(e) {
	mousePos = getMousePos(mainCanvas, e);
}

function hangLightPaintings() {
  for(var i = 0; i < numPaintings; i++) {
    x = (i*paintingSpacing) + marginX;
    y = marginY;
    lightPaintings.push(new LightPainting(mainCanvas, x, y, paintingWidth, paintingHeight, paintingBorder, 1));
  }
}

function draw() {
  mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  lightPaintings.forEach(function(painting){
    if (painting.imgData){
      painting.draw();
      var tcanvas = document.createElement('canvas'); /// create temp canvas
      tctx = tcanvas.getContext('2d');
      tcanvas.width = painting.intWidth;
      tcanvas.height = painting.intHeight;
      tctx.putImageData(painting.imgData, 0, 0);
      mainContext.drawImage(tcanvas,painting.x,painting.y);
    }
    else{
      painting.draw();
    }
	});
}

function update() {
	var mouseX = mousePos.x;
	var mouseY = mousePos.y;

  // for(var i = 0; i < paletteColors.length; i++) {
  //   var paletteColor = paletteColors[i];
  //   if  (isOverPaletteColor(mouseX, mouseY, paletteColor) && isMouseDown) {
  //     currentColor = paletteColor.colorRGBA;
  //   }else{
  //         // alert('clicked outside paletteColor');
  //     }
  // }
}


function getPixels(img){
  var width = img.width;
  var height = img.height;
  var tcanvas = document.createElement('canvas'), /// create temp canvas
  tctx = tcanvas.getContext('2d');
  tcanvas.width = img.naturalWidth; /// set width = region width
  tcanvas.height = img.naturalHeight;
  tctx.drawImage(img, 0, 0);
  var pixels = tctx.getImageData(0, 0, width, height);
  return pixels;
}

function loop() {
	draw();
	update();
}

function main() {
  hangLightPaintings();
  console.log("canvas working")
	setInterval(loop, 1000/60);
}

mainCanvas.onmousedown = mouseDown;
mainCanvas.onmouseup = mouseUp;
mainCanvas.onmousemove = mouseMove;

main();
console.log(lightPaintings.length);
