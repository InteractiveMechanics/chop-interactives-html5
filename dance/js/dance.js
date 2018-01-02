var mainCanvas = document.getElementById('main-canvas');
var mainContext = mainCanvas.getContext("2d");


mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;

var bkgdCanvas = document.getElementById('bkgd-canvas');
var bkgdContext = bkgdCanvas.getContext("2d");


bkgdCanvas.width = window.innerWidth;
bkgdCanvas.height = window.innerHeight;

var paintCanvas = document.getElementById('paint-canvas');
var paintContext = paintCanvas.getContext("2d");

paintCanvas.width = window.innerWidth;
paintCanvas.height = window.innerHeight;

var veilCanvas = document.getElementById('veil-canvas');
var veilContext = veilCanvas.getContext("2d");

veilCanvas.width = window.innerWidth;
veilCanvas.height = window.innerHeight;

var tracerCanvas = document.getElementById('tracer-canvas');
var tracerContext = tracerCanvas.getContext("2d");

tracerCanvas.width = window.innerWidth;
tracerCanvas.height = window.innerHeight;

var currentCanvas = mainCanvas;

var numUsers = 1;

var paintings = [];

function createPaintings(){
  for(var i = 0; i < numUsers; i++) {
    paintings[i] = new Painting(paintCanvas, 0, 0, paintCanvas.width, paintCanvas.height, 20);
  }
}


var thumbnails = [];
var numPaintings = 5;
var thumbnailWidth = 200;
var thumbnailHeight = 225;
var thumbnailBorder = [8,8,50,8];
var marginX = 30;
var marginY = 65;
var paintingSpacing = 410;
var videoX = 50;
var videoY = 490;
var videoWidth = 960;
var videoHeight = 540;
var newThumbnail = true;
var video = null;

var isMouseDown = false;
var mousePos = {
      x: -1,
      y: -1
};
var mouseX = mousePos.x;
var mouseY = mousePos.y;
var lastMouseX, lastMouseY;


//test image data
tempcanvas = document.createElement('canvas'); /// create temp canvas
tempcanvas.width = 1000;
tempcanvas.height = 1000;
tempctx = tempcanvas.getContext('2d'); /// temp context

tempctx.fillStyle = 'rgba(0,0,0,0)';
tempctx.rect(0, 0, tempcanvas.width, tempcanvas.height);
tempctx.fill();
testImgData = tempctx.getImageData(0,0,tempcanvas.width, tempcanvas.height);

var startButton = new Button('start', './images/btn-play.png', 1500, 638, 185, mainCanvas);
var clearButton = new Button('clear', './images/btn-undo.png', 1834, 86, 86, veilCanvas);
mainContext.fillStyle = '#ffffff';

function isOverButton(mX, mY, circle) {
  return Math.sqrt((mX-circle.x)*(mX-circle.x) + (mY-circle.y)*(mY-circle.y)) < circle.r;
}

function mouseDown(e) {
	isMouseDown = true;
}

function mouseUp(e) {
	isMouseDown = false;
}

  mainCanvas.addEventListener('click', function(){
  var x = event.pageX,
  y = event.pageY;

  // Collision detection between clicked offset and element.
      for(var i = 0; i < thumbnails.length; i++) {
        thumbnail = thumbnails[i];
        if (y > thumbnail.trashPosY - thumbnail.trashRadius && y < thumbnail.trashPosY + thumbnail.trashRadius && x > thumbnail.trashPosX - thumbnail.trashRadius && x < thumbnail.trashPosX + thumbnail.trashRadius) {
            trashThumbnail(i);
        }
      }

      if (y > startButton.y - startButton.r && y < startButton.y + startButton.r && x > startButton.x - startButton.r && x < startButton.x + startButton.r){
        switchCanvas(mainCanvas, paintCanvas);
        if (video){
          videoStop();
        }

      }

  }, false);

  paintCanvas.addEventListener('click', function(){
    var x = event.pageX,
    y = event.pageY;
    if (y > clearButton.y - clearButton.r
      && y < clearButton.y + clearButton.r
      && x > clearButton.x - clearButton.r
      && x < clearButton.x + clearButton.r){
      paintContext.clearRect(0,0,paintCanvas.width,paintCanvas.height);
      paintings[0].painted = false;
    }
  }, false);

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
  string = new Image();
  string.src = './images/attrack-sc_string.png';

  for(var i = 0; i < numPaintings; i++) {
    x = (i*paintingSpacing) + marginX;
    y = marginY;
    thumbnails.push(new Thumbnail(mainCanvas, x, y, thumbnailWidth, thumbnailHeight, thumbnailBorder, Math.random(0,1), testImgData));
  }
}

//variables from painting
var seconds = 10;
var timer1 = 60;
var timer2 = seconds*60;
var timer3 = 3*60;

timer = [];

for(var i = 0; i < seconds+1; i++) {
  timer[i] = new Image();
  timer[i].src = './images/timer' + i +'.png';
}

var veilOpacity = 90;

function paint() {
  //painting.draw(lastMouseX, lastMouseY, mouseX, mouseY);
  if ( paintings[0] && (currentCanvas == paintCanvas)){
    veilContext.clearRect(0,0,1920,1080);
    veilContext.globalAlpha= veilOpacity/100;
    veilContext.fillstyle = 'rgba(0,0,0,1)';
    veilContext.fillRect(0,0,1920,1080);
    veilContext.drawImage(timer[seconds], 0, 0);
    if(paintings[0].op < 60) {
      paintings[0].op ++;
      bkgdContext.fillStyle = 'rgba(0,0,0,'+(paintings[0].op/60)+')';
      bkgdContext.fillRect(0,0,1920,1080);
    }
    if(timer1 > 0){
      paintings[0].imgData = null;
    }
    else if(timer2 > 0){
      clearButton.draw();
      paintings[0].draw();
      if (timer2%60 === 0){
        seconds --;

      }


    }
    else if(veilOpacity > 0){
      veilOpacity --;
    }
    else if(timer3 > 0){
      timer3 --;
    }
    else if(currentCanvas == paintCanvas){
      if(paintings[0].painted == true) {
        paintings[0].imgData = cropImageFromCanvas(paintContext, paintCanvas);
      }
      bkgdContext.clearRect(0,0,1920,1080);
      veilOpacity = 0;
      paintContext.clearRect(0,0,1920,1080);
      switchCanvas(paintCanvas,mainCanvas);
      videoStart();
      seconds = 10;
      timer1 = 60;
      timer2 = seconds*60;
      paintings[0].painted = false;
      paintings[0].op = 0;
    }
    if(timer1>0){
      timer1--;
    }
    else if(timer2>0){
      timer2--;
    }
  }
}



function draw() {
  if (currentCanvas == paintCanvas){
    paint();
  }
  else{
    if (newThumbnail == true){
      mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
      }
    mainContext.drawImage(string, 0, 60);

    thumbnails.forEach(function(thumbnail) {
      thumbnail.draw();
    });
    drawVideo();
    startButton.draw();
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function update() {
  cursorCanvas(currentCanvas);
  lastMouseX = mouseX;
  lastMouseY = mouseY;
	mouseX = mousePos.x;
	mouseY = mousePos.y;
  //paintings[0].update();

  if (paintings[0].imgData) {
    paintingToThumbnail();
    newThumbnail = true;
  }
  paintings[0].imgData = null;
  videoLoop();
}


function trashThumbnail(index){
  thumbnails.splice(index,1);
}



function paintingToThumbnail(){
  //shift thumbnails

  for(var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].x=thumbnails[i].x+paintingSpacing;
    thumbnails[i].update();
    console.log(thumbnails[i].trashPosX);
  }
  thumbnails.unshift(new Thumbnail(mainCanvas, marginX, marginY, thumbnailWidth, thumbnailHeight, thumbnailBorder, Math.random(0,1), paintings[0].imgData));
  //delete last thumbnail
  thumbnails.splice(5,1);
  newThumbnail = false;
}


//from https://stackoverflow.com/questions/11796554/automatically-crop-html5-canvas-to-contents
function cropImageFromCanvas(ctx, canvas) {

var w = window.innerWidth,
h = window.innerHeight,
pix = {x:[], y:[]},
imageData = ctx.getImageData(0,0,window.innerWidth,window.innerHeight),
x, y, index;

for (y = 0; y < h; y++) {
    for (x = 0; x < w; x++) {
        index = (y * w + x) * 4;
        if (imageData.data[index+3] > 0) {

            pix.x.push(x);
            pix.y.push(y);

        }
    }
}
pix.x.sort(function(a,b){return a-b});
pix.y.sort(function(a,b){return a-b});
var n = pix.x.length-1;

w = pix.x[n] - pix.x[0];
h = pix.y[n] - pix.y[0];
var cut = ctx.getImageData(pix.x[0], pix.y[0], w, h);

return cut;
}


function drawVideo() {
  if (video && !video.paused && !video.ended) {
    //mainContext.clearRect(videoX, videoY, videoWidth, videoHeight);
      mainContext.drawImage(video, videoX, videoY, videoWidth, videoHeight);

      //setTimeout(videoLoop, 1000 / 30);
  }
}

function videoStop() {
    if (video) {
        video.pause();
        mainContext.clearRect(videoX, videoY, videoWidth, videoHeight);
    }
}

function videoLoop() {
    if (video && video.ended) {
        videoStop();
        setTimeout(videoStart, 3000);;
    }
}

function videoStart() {
  if(!video){
    video = document.createElement("video");
    video.src = "./video/2017-03-20_Dance_demo-screen-ani_v01.mp4";
    video.addEventListener('loadeddata', function() {
        console.log("loadeddata");
        video.play();
    });

  }
  else if( video.paused){
    video.load();
    video.play();
  }

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
  createPaintings();
  console.log(paintings[0]);
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
