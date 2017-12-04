function Thumbnail(canvas, x, y, w, h, border, radians) {

	this.x = x;
	this.y = y;
  this.radians = radians;

	this.arrayIndex = 0;

	this.width = w;
	this.height = h;
	var borderTop = border[0];
	var borderRight = border[1];
	var borderBottom = border[2];
	var borderLeft = border[3];
	this.intWidth = w - borderRight - borderLeft;
	this.intHeight = h - borderTop - borderBottom;

	this.canvas = canvas;
	this.context = canvas.getContext('2d');



	tcanvas = document.createElement('canvas'); /// create temp canvas
	tcanvas.width = this.intWidth;
	tcanvas.height = this.intHeight;
	tctx = tcanvas.getContext('2d'); /// temp context

	tctx.fillStyle = '#555555';
	tctx.rect(0, 0, tcanvas.width, tcanvas.height);
	tctx.fill();

	this.imgData = tctx.getImageData(0,0,tcanvas.width, tcanvas.height);



  this.draw = function() {
    this.context.save();
		this.context.fillStyle = '#ffffff';
		this.context.rect(this.x, this.y, this.width, this.height);
		this.context.fill();
    this.context.restore();
	}

	return this;
}

// this.tcanvas = tcanvas;
//
// this.tcanvas = document.createElement(); /// create temp canvas
// tcanvas.width = this.width - borderRight - borderLeft;
// tcanvas.height = this.height - borderTop - borderBottom;
// tctx = tcanvas.getContext('2d'); /// temp context
//
// //will become painting region
// //painting position in frame
// this.tPosX = this.x + borderLeft;
// this.tPosY = this.y + borderTop;
// tctx.fillStyle = '#555555';
// tctx.rect(0, 0, tcanvas.width, tcanvas.height);
// tctx.fill();


//console.log(this.x, this.y);




// this.canvas.width = this.width - border[1] - border[3];
// this.canvas.height = this.height - border[0] - border[2];
// this.canvas.x = border[3];
// this.canvas.y = border[0];
