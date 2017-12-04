var mainCanvas = document.getElementById('main-canvas');
var mainContext = mainCanvas.getContext("2d");

mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;

var paintCanvas = document.getElementById('paint-canvas');
var paintContext = paintCanvas.getContext("2d");

paintCanvas.width = window.innerWidth;
paintCanvas.height = window.innerHeight;

var currentCanvas = mainCanvas;

var painting = new Painting(paintCanvas, 0, 0, paintCanvas.width, paintCanvas.height, 20);

var thumbnails = [];
var numPaintings = 1;
var paintingWidth = 300;
var paintingHeight = 300;
var paintingBorder = [20,20,50,20];
var marginX = 50;
var marginY = 50;
var paintingSpacing = (mainCanvas.width-(marginX*2))/5;

var isMouseDown = false;
var mousePos = {
      x: -1,
      y: -1
};
var mouseX = mousePos.x;
var mouseY = mousePos.y;
var lastMouseX, lastMouseY;

var startButton = new Button('start', './images/btn-play.png', 1500, 638, 185);

function isOverButton(mX, mY, circle) {
  return Math.sqrt((mX-circle.x)*(mX-circle.x) + (mY-circle.y)*(mY-circle.y)) < circle.r;
}

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

function hangThumbnails() {
  for(var i = 0; i < numPaintings; i++) {
    x = (i*paintingSpacing) + marginX;
    y = marginY;
    thumbnails.push(new Thumbnail(mainCanvas, x, y, paintingWidth, paintingHeight, paintingBorder, 1));
  }
}

function drawThumbnails() {
  thumbnails.forEach(function(thumbnail){
    if (thumbnail.imgData){
      thumbnail.draw();
      var tcanvas = document.createElement('canvas'); /// create temp canvas
      tctx = tcanvas.getContext('2d');
      tcanvas.width = thumbnail.imgData.width;
      tcanvas.height = thumbnail.imgData.width;
      tctx.putImageData(thumbnail.imgData, 0, 0);
      mainContext.drawImage(tcanvas,thumbnail.x,thumbnail.y, thumbnail.width, thumbnail.height);
      //ctx.drawImage(image, dx, dy, dWidth, dHeight);
    }
    else{
      thumbnail.draw();
    }
	});
}

function paint() {
  if (painting && (currentCanvas == paintCanvas)){
    painting.draw(lastMouseX, lastMouseY, mouseX, mouseY);
  }
}


function draw() {
  mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  startButton.draw();

  drawThumbnails();

  drawVideo();
  paint();



}

function update() {
  cursorCanvas(currentCanvas);
  lastMouseX = mouseX;
  lastMouseY = mouseY;
	mouseX = mousePos.x;
	mouseY = mousePos.y;
  painting.update();

  if (painting.imgData) {
    console.log(painting.imgData);
    paintingToThumbnail(painting);
  }
  checkStart();
  videoLoop();
}

function checkStart(){
  if  (isOverButton(mouseX, mouseY, startButton) && isMouseDown && (currentCanvas == mainCanvas)) {
      videoStop();
      switchCanvas(mainCanvas, paintCanvas);
  }
}

function paintingToThumbnail(painting){
  x = marginX;
  y = marginY;
  thumbnail = new Thumbnail(mainCanvas, x, y, paintingWidth, paintingHeight, paintingBorder, 1)
  thumbnails.push(thumbnail);
  thumbnail.imgData = painting.imgData;
  painting.imgData = null;
}

function drawVideo() {
  if (video && !video.paused && !video.ended) {
      mainContext.drawImage(video, 50, 490, 960, 540);
      //setTimeout(videoLoop, 1000 / 30);
  }
}

function videoStop() {
    if (video) {
        video.pause();
        video = null;
        mainContext.clearRect(50, 490, 960, 540);
    }
}

function videoLoop() {
    if (video && video.ended) {
        videoStop();
        setTimeout(videoStart, 3000);;
    }
}

function videoStart() {
      video = document.createElement("video");
      video.src = "./video/2017-03-20_Dance_demo-screen-ani_v01.mp4";
      video.addEventListener('loadeddata', function() {
          console.log("loadeddata");
          video.play();
          //setTimeout(videoLoop, 1000 / 30);
      });
}



function switchCanvas(o,n) {
  o.classList.remove('active-canvas');
  n.classList.remove('inactive-canvas');
  o.classList.add('inactive-canvas');
  n.classList.add('active-canvas');
  console.log('changed canvas');
  currentCanvas = n;
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
  hangThumbnails();
  videoStart();
	setInterval(loop, 1000/60);
}

function cursorCanvas(canvas) {
  canvas.onmousedown = mouseDown;
  canvas.onmouseup = mouseUp;
  canvas.onmousemove = mouseMove;
}

main();
console.log(thumbnails.length);
