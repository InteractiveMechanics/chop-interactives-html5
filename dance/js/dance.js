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

var currentCanvas = mainCanvas;

var painting = new Painting(paintCanvas, 0, 0, paintCanvas.width, paintCanvas.height, 20);

var thumbnails = [];
var numPaintings = 5;
var thumbnailWidth = 200;
var thumbnailHeight = 225;
var thumbnailBorder = [8,8,50,8];
var marginX = 30;
var marginY = 65;
var paintingSpacing = 410;

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
      for(var i = 0; i < numPaintings; i++) {
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
    if (y > painting.clearButton.y - painting.clearButton.r
      && y < painting.clearButton.y + painting.clearButton.r
      && x > painting.clearButton.x - painting.clearButton.r
      && x < painting.clearButton.x + painting.clearButton.r){
      paintContext.clearRect(0,0,paintCanvas.width,paintCanvas.height);
      painting.painted = false;
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
  for(var i = 0; i < numPaintings; i++) {
    x = (i*paintingSpacing) + marginX;
    y = marginY;
    thumbnails.push(new Thumbnail(mainCanvas, x, y, thumbnailWidth, thumbnailHeight, thumbnailBorder, getRandomArbitrary(0,30), testImgData));
  }
}

function paint() {
  if ( painting && (currentCanvas == paintCanvas)){
    painting.draw(lastMouseX, lastMouseY, mouseX, mouseY);
  }
}



function draw() {
  if (currentCanvas == paintCanvas){
    paint();
  }
  else{
    mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

    for(var i = 0; i < numPaintings; i++) {
      x = (i*paintingSpacing) + marginX;
      y = marginY;
      if(thumbnails[i]){
      thumbnails[i].draw(x,y,1);
    }
    };
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
  painting.update();

  if (painting.imgData) {
    paintingToThumbnail();
  }
  // if (currentCanvas == mainCanvas){
  //   for(var i = 0; i < numPaintings; i++) {
  //     if(thumbnails[i] && isOverButton(mouseX, mouseY, thumbnails[i].trash) && isMouseDown){
  //       trashThumbnail(i);
  //     }
  //   };
  // }
  painting.imgData = null;
  videoLoop();
}

// function checkStart(){
//   if  (isOverButton(mouseX, mouseY, startButton) && isMouseDown && (currentCanvas == mainCanvas)) {
//     //switch before video stop solves lag in paint start
//     switchCanvas(mainCanvas, paintCanvas);
//     videoStop();
//
//   }
// }

function trashThumbnail(index){
  thumbnails.splice(index,1);
  //thumbnails[i].imgData = null;
}

// function cropPainting(painting) {
//
// }

function paintingToThumbnail(){
  //var cropImageData = cropToPixels(painting.imgData);

  thumbnails.unshift(new Thumbnail(mainCanvas, 0, 0, thumbnailWidth, thumbnailHeight, thumbnailBorder, getRandomArbitrary(0,100), painting.imgData));
}



// function cropToPixels(imgData){
//   //find pixel bounds
//   var cX, cY, cW, cH;
//   var width = imgData.width;
//   var height = imgData.height;
//   var data = imageData.data;
//
//
//
//
//   for (var y = 0; y < height; y++) {
//     for (var x = 0; x < width; x++) {
//       var pos = y * width + x;
//       ctx.fillStyle = 'rgba(' + data[pos*4+0]
//                         + ',' + data[pos*4+1]
//                         + ',' + data[pos*4+2]
//                         + ',' + (data[pos*4+3]/255) + ')';
//       ctx.fillRect(x + dx, y + dy, 1, 1);
//     }
//   }
//   // for (var i = 0; i < data.length; i += 4) {
//   //   if (data[i + 3] > 0){
//   //   data[i]     = newColor[0];     // red
//   //   data[i + 1] = newColor[1]; // green
//   //   data[i + 2] = newColor[2]; // blue
//   // }
//   // }
//
//   console.log(cropData);
//   return cropData;
//
// }

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
