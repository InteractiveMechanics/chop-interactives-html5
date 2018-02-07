function Thumbnail(canvas, x, y, w, h, border, angle, imgData) {

  this.x = x;
  this.y = y;

	this.arrayIndex = 0;
	this.imgData = imgData;

	this.width = w;
	this.height = h;
	this.borderTop = border[0];
	this.borderRight = border[1];
	this.borderBottom = border[2];
	this.borderLeft = border[3];
	this.intWidth = w - this.borderRight - this.borderLeft;
	this.intHeight = h - this.borderTop - this.borderBottom;

	this.canvas = canvas;
	this.context = canvas.getContext('2d');

  //scale imageData from painting
  this.tcanvas = document.createElement('canvas');
  this.tcanvas.width = this.imgData.width;
  this.tcanvas.height = this.imgData.height;
  this.tctx = this.tcanvas.getContext('2d');
  this.tctx.putImageData(this.imgData,0,0);
  this.hRatio = this.intWidth / this.tcanvas.width;
  this.vRatio = this.intHeight / this.tcanvas.height;
  this.ratio = Math.min(this.hRatio, this.vRatio);
  this.centerShift_x = (this.intWidth - this.tcanvas.width * this.ratio) / 2;
  this.centerShift_y = (this.intHeight - this.tcanvas.height * this.ratio) / 2;



  this.angle = Math.max(Math.min(Math.PI/2,angle),0);

  this.trashRadius = 40

  this.trashPosX = this.x + this.width;
  this.trashPosY = this.y;

  this.trash = new Button('clear', './images/icon-trash', this.width-this.trashRadius, -this.trashRadius, this.trashRadius, this.canvas);
  
  //console.log(this.trashPosX,this.trashPosY);

  this.update = function() {
    this.trashPosX = this.x + this.width;
    this.trashPosY = this.y;
  }


  this.draw = function(mainContext) {
		mainContext.save();
		mainContext.translate(this.x+this.width,this.y);
    mainContext.rotate(-this.angle);
    mainContext.translate(-this.width,0);


		mainContext.fillStyle = "white";
		mainContext.fillRect(0, 0, this.width, this.height);
		mainContext.fillStyle = "black";
		mainContext.fillRect((0+this.borderLeft),(0+this.borderTop), this.intWidth, this.intHeight);
    mainContext.fillStyle = "blue";
    // mainContext.arc(0,0,50,0,2*Math.PI)
    // mainContext.fill();


  	mainContext.drawImage(this.tcanvas, 0,0, this.tcanvas.width, this.tcanvas.height, (0+this.centerShift_x+this.borderLeft), (0+this.centerShift_y+this.borderTop), this.tcanvas.width * this.ratio, this.tcanvas.height * this.ratio);
    this.trash.draw();

    mainContext.restore();

	}


	return this;
}
