
var paletteColors = [];
var regions = [];

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
var currentColor = 'white';
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

function createPage() {
    regions.push(new Region(0 ,0, uiCanvas));

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
  regions.forEach(function(region){
    region.draw();
  });
}

function update() {
	var mouseX = mousePos.x;
	var mouseY = mousePos.y;

  for(var i = 0; i < paletteColors.length; i++) {
    var paletteColor = paletteColors[i];
    if  (isOverPaletteColor(mouseX, mouseY, paletteColor) && isMouseDown) {
      currentColor = paletteColor.name;
      console.log(currentColor);
    }else{
          // alert('clicked outside paletteColor');
      }
  }
  for(var i = 0; i < regions.length; i++) {
		var region = regions[i];
    if (region.img.width){  //if width, img is loaded
      hover = getPixelAlpha(region.img, mouseX, mouseY);
      if ((hover > 0) && isMouseDown){
        region.color = currentColor;
        console.log(region.color);
      } else {
        console.log(region.color);
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
  tcanvas.width = img.naturalWidth; /// set width = shape width
  tcanvas.height = img.naturalHeight;
  tctx.drawImage(img, 0, 0);
  var pixel = tctx.getImageData(mX, mY, 1, 1);
  var data = pixel.data;
  var rgba = 'rgba(' + data[0] + ', ' + data[1] +
             ', ' + data[2] + ', ' + (data[3] / 255) + ')';
  return(data[3] / 255);
}


//from roll.js
// function getDataOfImage(img,x,y,w,h)
// {
// 	x = parseInt(x);
// 	y = parseInt(y);
// 	w = parseInt(w);
// 	h = parseInt(h);
// 	if(w==0) w=1;
// 	if(h==0) h=1;
// 	var c = document.createElement('canvas');
// 	c.width = img.width;
// 	c.height = img.height;
// 	var ct = c.getContext("2d");
// 	ct.clearRect(0,0,c.width,c.height);
// 	ct.drawImage(img,0,0);
// 	var imagedata = ct.getImageData(x,y,w,h);
// 	var rgb = imagedata.data;
// 	var pixels=new Array(parseInt(w*h));
// 	var i=0;
// 	for(var y=0;y<h;y++)
// 	{
// 		for(var x=0;x<w;x++)
// 		{
// 			var p=(y*w+x)*4;
// 			pixels[i]=(rgb[p+3]<<24)|(rgb[p]<< 16)|(rgb[p+1]<<8)|rgb[p+2];
// 			i++;
// 		}
// 	}
// 	return pixels;
// }

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
