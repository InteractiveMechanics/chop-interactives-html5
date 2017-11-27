function Region(x, y, canvas) {
	//var I = I || {};

	this.x = x;
	this.y = y;

	this.arrayIndex = 0;

	this.width = 166;
	this.height = 155;
  var pixels = [];

	this.canvas = canvas;
	this.context = canvas.getContext('2d');
  this.color = 'black';

  var tcanvas = document.createElement('canvas'), /// create temp canvas
  tctx = tcanvas.getContext('2d'); /// temp context

  this.img = new Image();

  // this.img.onload = function () {
  //  generateRegionData(this);
  // }
  this.img.crossOrigin = "Anonymous";
  this.img.src = './images/test-white.png';

	this.draw = function() {
    this.context.save();
    //console.log(this.img);
    this.context.drawImage(this.img, this.x, this.y);
    this.context.restore();
	}


	return this;
}

// this.getPixels = function(mX, mY) {
//   // use the intrinsic size of image in CSS pixels for the canvas element
//   tcanvas.width = this.img.naturalWidth; /// set width = shape width
//   tcanvas.height = this.img.naturalHeight;
//   tctx.translate(-this.x, -this.y); /// make sure shape is drawn at origin //not needed
//   tctx.drawImage(this.img, this.img.width, this.img.height);
//   pixels = tctx.getImageData(0, 0, tcanvas.width, tcanvas.height); /// return image (or use getImageData)
//   return {
//     r: pixels.data[index],
//     g: pixels.data[index + 1],
//     b: pixels.data[index + 2],
//     a: pixels.data[index + 3]
//   };
// }

// generateRegionData = function() {
//   // use the intrinsic size of image in CSS pixels for the canvas element
//   tcanvas.width = this.width; /// set width = shape width
//   tcanvas.height = this.height;
//   tctx.translate(-this.x, -this.y); /// make sure shape is drawn at origin
//   tctx.drawImage(this.img,this.x,this.y);
//   this.pixels = tctx.getImageData(0, 0, tcanvas.width, tcanvas.height); /// return image (or use getImageData)
//   // var index = ((100 * (pixels.width * 4)) + (100 * 4));
//   //
//   // return {
//   //   r: pixels.data[index],
//   //   g: pixels.data[index + 1],
//   //   b: pixels.data[index + 2],
//   //   a: pixels.data[index + 3]
//   // };
// }
