
var paletteColors = [];
var pages = [];
var regions = [];
var lines = [];

var pageData = [
['dogs',
[
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
],
['carousel',
  [
  ['carousel-1', 241, 369],
  ['carousel-2', 1717, 491],
  ['carousel-3', 496, 407],
  ['carousel-4', 614, 281],
  ['carousel-5', 1639, 847],
  ['carousel-6', 71, 13],
  ['carousel-7', 944, 34],
  ['carousel-8', 1658, 54],
  ['carousel-9', 205, 891],
  ['carousel-10', 11,154],
  ['carousel-11', 517, 637],
  ['carousel-12', 554, 649],
  ['carousel-13', 611, 514],
  ['carousel-14', 775, 583],
  ['carousel-15', 815, 596],
  ['carousel-16', 879, 516],
  ['carousel-17', 1021, 655],
  ['carousel-18', 1062, 666],
  ['carousel-19', 1127, 516],
  ['carousel-20', 1263, 577],
  ['carousel-21', 1303, 589],
  ['carousel-22', 1355, 516],
  ['carousel-23', 734, 540],
  ['carousel-24', 454, 516],
  ['carousel-25', 1461, 272],
  ['carousel-26', 572, 6],
  ['carousel-27', 558, 261],
  ['carousel-28', 352, 545],
  ['carousel-29', 1191, 245],
  ['carousel-30', 1511, 649],
  ['carousel-31', 107, 42],
  ['carousel-32', 18, 77],
  ['carousel-33', 506, 453],
  ['carousel-34', 535, 462]
  ]
]
];

var linesCanvas = document.getElementById('lines-canvas'); /// create temp canvas
var linesContext = linesCanvas.getContext('2d'); /// temp context

var uiCanvas = document.getElementById('ui-canvas');
var uiContext = uiCanvas.getContext("2d");

uiCanvas.width = window.innerWidth;
uiCanvas.height = window.innerHeight;


function createLines() {

  // for(var i = 0; i < regions.length; i++){
  //   this.regions.push(new Region(regions[i][0] ,regions[i][1], regions[i][2], uiCanvas));
  // }
  for(var i = 0; i < pageData.length; i++) {
    lines.push(new Image());
    lines[i].onload = function() {
      linesCanvas.width = 1920 //lines[i].naturalWidth;
      linesCanvas.height =1080 //lines[i].naturalHeight;
    }
    lines[i].src = './images/lines-'+pageData[i][0]+'.png';
  }
}


function drawLines(lines){
  linesContext.clearRect(0, 0, linesCanvas.width, linesCanvas.height);
  linesContext.drawImage(lines,0,0);
}


var paletteWidth = uiCanvas.width;
var paletteHeight = 200;
var palettePosX = 403;
var palettePosY = 1022;
var paletteSpacing = 100;
var paletteRadius = 35;
var pageAreaY = 956;
var currentColor = [];
var currentPage = 1;
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

function createUiRegion() {
  uiRegion = new Region('ui-bar', 0, 956, uiCanvas);
}

function createPager() {
  pageLeft = new Button('./images/icon-arrow-left.png', 35, 970);
  pageRight = new Button('./images/icon-arrow-right.png', 104, 972);
}

function createClear() {
  pageClear = new Button('./images/icon-clear.png', 1810, 979);
}

function createPages() {
  for(var i = 0; i < pageData.length; i++) {
    pages.push(new Page(pageData[i][0],pageData[i][1]));
  }
    // for(var j = 0; j < pages[i].length; j++){
    //   pages[i].push(new Region(page[i][j][0] ,page[i][j][1], page[i][j][2], uiCanvas));
    // }

}

function changePageLeft() {
  currentPage = 0;
  regions = pages[currentPage].regions;
}

function changePageRight() {
  currentPage = 1;
  regions = pages[currentPage].regions;
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
  drawLines(lines[currentPage]);
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

  uiRegion.draw();
  paletteColors.forEach(function(color){
		color.draw();
	});

  pageRight.draw();
  pageLeft.draw();
  pageClear.draw();
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
    if (region.img.width && (mouseY < pageAreaY)){  //if width, img is loaded ---- not great
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

  if (pageRight){
    var rX = mouseX - pageRight.x;
    var rY = mouseY - pageRight.y;
    hover = getPixelAlpha(pageRight.img, rX, rY);
    if ((hover > 0) && isMouseDown){
      changePageRight();
      //console.log(currentPage);
    } else {
      //console.log(region.color);
    }
  }

  if (pageLeft){
    var rX = mouseX - pageLeft.x;
    var rY = mouseY - pageLeft.y;
    hover = getPixelAlpha(pageLeft.img, rX, rY);
    if ((hover > 0) && isMouseDown){
      changePageLeft();
      //console.log(currentPage);
    } else {
      //console.log(region.color);
    }
  }

  if (pageClear){
    var rX = mouseX - pageClear.x;
    var rY = mouseY - pageClear.y;
    hover = getPixelAlpha(pageClear.img, rX, rY);
    if ((hover > 0) && isMouseDown){
      for(var i = 0; i < regions.length; i++) {
        regions[i].imgData = null;
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

function getPixelAlpha(img, mX, mY) {
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
    return (data[3] / 255);
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
  createUiRegion();
  createPager();
  createClear();
  createPages();
  createLines();
  regions = pages[currentPage].regions;
  //console.log(isOverRegion(100,100,regions[0]));
  //console.log(regions[0].width)
	setInterval(loop, 1000/60);
}

uiCanvas.onmousedown = mouseDown;
uiCanvas.onmouseup = mouseUp;
uiCanvas.onmousemove = mouseMove;

main();
//console.log(pages[0].regions.length);
