function LightPainting(paintingCanvas, x, y, w, h, border, radians) {

	this.x = x;
	this.y = y;
  this.radians = radians;

	this.arrayIndex = 0;

	this.width = w;
	this.height = h;


  var tcanvas = document.createElement('canvas'); /// create temp canvas
  tcanvas.width = this.width - border[1] - border[3];
  tcanvas.height = this.height - border[0] - border[2];
  tctx = tcanvas.getContext('2d'); /// temp context


  this.canvas.width = this.width - border[1] - border[3];
  this.canvas.height = this.height - border[0] - border[2];
  this.canvas.x = border[3];
  this.canvas.y = border[0];

  this.context.fillStyle = '#ffffff';
  this.context.fill();

  this.draw = function() {
    this.context.save();
    //console.log(this.img);
    this.context.drawImage(tcanvas, this.width, this.height);
    this.context.restore();
	}

	return this;
}
