
var paletteColors = [];
var regions = [];

var linesCanvas = document.getElementById('lines-canvas'); /// create temp canvas
var linesContext = linesCanvas.getContext('2d'); /// temp context

var uiCanvas = document.getElementById('ui-canvas');
var uiContext = uiCanvas.getContext("2d");

uiCanvas.width = window.innerWidth;
uiCanvas.height = window.innerHeight;

var linesImg = new Image();
linesImg.onload = function() {
  linesCanvas.width = linesImg.naturalWidth;
  linesCanvas.height = linesImg.naturalHeight;
  linesContext.drawImage(linesImg,0,0);
}
linesImg.src = './images/lines-dogs.png';



var paletteWidth = uiCanvas.width;
var paletteHeight = 200;
var palettePosX = 50;
var palettePosY = uiCanvas.height - (paletteHeight/2);
var paletteSpacing = paletteWidth/16;
var paletteRadius = 40;
var currentColor = [];
//var numberOfColors = 12;

var isMouseDown = false;
var mousePos = {
      x: -1,
      y: -1
};

//var paletteNames = ['blue-lt', 'blue', 'purple', 'pink', 'red', 'orange', 'yellow', 'green-lt', 'green', 'black', 'white', 'brown'];
var colorData = [
  ['blue-lt', 20, 178, 218, 1.00],
  ['blue', 53, 53, 168, 1.00],
  ['purple', 148, 40, 138, 1.00],
  ['pink', 238, 26, 119, 1.00],
  ['red', 255, 0, 26, 1.00],
  ['orange', 247, 146, 60, 1.00],
  ['yellow', 254, 254, 86, 1.00],
  ['green-lt', 139, 198, 87, 1.00],
  ['green', 0, 104, 34, 1.00],
  ['black', 0, 0, 0, 1.00],
  ['white', 255, 255, 255, 1.00],
  ['brown', 89, 49, 22, 1.00]
]

var dogPage = [
  ['dogs-1', 12, 466],
  ['dogs-2', 99, 800],
  ['dogs-3', 177, 627],
  ['dogs-4', 293, 494],
  ['dogs-5', 229, 894],
  ['dogs-6', 1240, 18],
  ['dogs-7', 22, 28],
  ['dogs-8', 43, 86],
  ['dogs-9', 163, 302],
  ['dogs-10', 9, 826],
  ['dogs-11', 511, 997],
  ['dogs-12', 482, 760],
  ['dogs-13', 417, 355],
  ['dogs-14', 232, 40],
  ['dogs-15', 776, 378],
  ['dogs-16', 856, 182],
  ['dogs-17', 721, 24],
  ['dogs-18', 1134, 599],
  ['dogs-19', 1202, 574],
  ['dogs-20', 846, 392],
  ['dogs-21', 1234, 856],
  ['dogs-22', 1545, 39],
  ['dogs-23', 1742, 170],
  ['dogs-24', 1171, 345],
  ['dogs-25', 1473, 316],
  ['dogs-26', 1498, 538],
  ['dogs-27', 1458, 798],
  ['dogs-28', 1637, 866],
  ['dogs-29', 1443, 316],
  ['dogs-30', 1558, 875],
  ['dogs-31', 367, 17]
]





function createPalette() {
  for(var i = 0; i < colorData.length; i++) {
    colorName = colorData[i][0];
    colorRGBA = [colorData[i][1], colorData[i][2], colorData[i][3], colorData[i][4]];
    colorFile = 'images/btn-' + colorName + '.png';
    posX = palettePosX + (paletteSpacing*i);
    posY = palettePosY;
    paletteColors.push(new PaletteColor(colorName, colorRGBA, colorFile, posX, posY, paletteRadius));
  }
}

function createPage() {

  for(var i = 0; i < dogPage.length; i++){
    regions.push(new Region(dogPage[i][0] ,dogPage[i][1], dogPage[i][2], uiCanvas));
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

  regions.forEach(function(region){

    if (region.imgData){
      var tcanvas = document.createElement('canvas'), /// create temp canvas
      tctx = tcanvas.getContext('2d');
      tcanvas.width = region.img.width;
      tcanvas.height = region.img.height;
      tctx.putImageData(region.imgData, 0, 0);
      uiContext.drawImage(tcanvas,region.x,region.y);
    }
    else{
      region.draw();
    }
  });
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
      currentColor = paletteColor.colorRGBA;
    }else{
          // alert('clicked outside paletteColor');
      }
  }
  for(var i = 0; i < regions.length; i++) {
		var region = regions[i];
    if (region.img.width){  //if width, img is loaded
      var rX = mouseX - region.x;
      var rY = mouseY - region.y;
      hover = getPixelAlpha(region.img, rX, rY);
      if ((hover > 0) && isMouseDown){
        var newImage = changeColor(region.img, currentColor);
        regions[i].imgData = newImage;
      } else {
        //console.log(region.color);
      }
      }
  }

}


// function sleep() {
// 	var e = new Date().getTime() + (150);
// 	while (new Date().getTime() <= e) {}
// }

function isOverPaletteColor(mX, mY, circle) {
  return Math.sqrt((mX-circle.x)*(mX-circle.x) + (mY-circle.y)*(mY-circle.y)) < circle.r;
}

function getPixelAlpha(img,mX,mY){
  var width = img.width;
  var height = img.height;
  var tcanvas = document.createElement('canvas'), /// create temp canvas
  tctx = tcanvas.getContext('2d');
  tcanvas.width = img.naturalWidth; /// set width = region width
  tcanvas.height = img.naturalHeight;
  tctx.drawImage(img, 0, 0);
  var pixel = tctx.getImageData(mX, mY, 1, 1);
  var data = pixel.data;
  var rgba = 'rgba(' + data[0] + ', ' + data[1] +
             ', ' + data[2] + ', ' + (data[3] / 255) + ')';
  return(data[3] / 255);
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

function changeColor(img, color){
  var newImage;
  var width = img.width;
  var height = img.height;
  var tcanvas = document.createElement('canvas'), /// create temp canvas
  tctx = tcanvas.getContext('2d');
  tcanvas.width = img.naturalWidth;
  tcanvas.height = img.naturalHeight;
  tctx.drawImage(img, 0, 0);
  var imageData = tctx.getImageData(0, 0, width, height);
  var data = imageData.data;
  var newColor = color;
  for (var i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 0){
    data[i]     = newColor[0];     // red
    data[i + 1] = newColor[1]; // green
    data[i + 2] = newColor[2]; // blue
  }
  else{
    data[i]     = 0;     // red
    data[i + 1] = 0; // green
    data[i + 2] = 0; // blue
    data[i + 3] = 0;
  }
  }
  imageData.data = data;
  // console.log(imageData);
  return imageData;
}


function loop() {
	draw();
	update();
}

function main() {
  createPalette();
  createPage();
  //console.log(isOverRegion(100,100,regions[0]));
  //console.log(regions[0].width)
	setInterval(loop, 1000/60);
}

uiCanvas.onmousedown = mouseDown;
uiCanvas.onmouseup = mouseUp;
uiCanvas.onmousemove = mouseMove;

main();
console.log(regions.length);
