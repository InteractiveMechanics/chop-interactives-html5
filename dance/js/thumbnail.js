function Thumbnail(canvas, x, y, w, h, border, radians, imgData) {
  this.radians = radians;

	this.arrayIndex = 0;
	this.imgData = imgData;

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

	this.angle = radians;




  this.draw = function(dX,dY,dR) {
		// mainContext.save();
		// mainContext.translate(0,this.width);
		// mainContext.rotate(.5);


    // mainContext.save();
    // mainContext.translate(dX,dY*Math.sin(this.angle)+1+(dY*2));
    // mainContext.rotate(-this.angle);


		this.trashRadius = 40
		this.trashPosX = dX + this.width;
		this.trashPosY = dY;
		this.trash = new Button('clear', './images/icon-trash.png', this.trashPosX, this.trashPosY, this.trashRadius, mainCanvas);

		mainContext.fillStyle = "white";
		mainContext.fillRect(dX, dY, thumbnailWidth, thumbnailHeight);
		mainContext.fillStyle = "black";
		mainContext.fillRect((dX+thumbnailBorder[3]),(dY+thumbnailBorder[0]), this.intWidth, this.intHeight);

		//scale imageData from painting
		tcanvas = document.createElement('canvas');
		tcanvas.width = this.imgData.width;
		tcanvas.height = this.imgData.height;
		tctx = tcanvas.getContext('2d');
		tctx.putImageData(this.imgData,0,0);
  		var hRatio = this.intWidth / tcanvas.width;
  		var vRatio = this.intHeight / tcanvas.height;
  		var ratio = Math.min(hRatio, vRatio);
  		var centerShift_x = (this.intWidth - tcanvas.width * ratio) / 2;
  		var centerShift_y = (this.intHeight - tcanvas.height * ratio) / 2;
  		mainContext.drawImage(tcanvas, 0,0, tcanvas.width, tcanvas.height, (dX+centerShift_x+(thumbnailBorder[3])), (dY+centerShift_y+(thumbnailBorder[0])), tcanvas.width * ratio, tcanvas.height * ratio);

			this.trash.draw();


		//mainContext.drawImage(tcanvas,(dX+thumbnailBorder[3]),(dY+thumbnailBorder[0]), this.intWidth, this.intHeight);
		// mainContext.restore();
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
