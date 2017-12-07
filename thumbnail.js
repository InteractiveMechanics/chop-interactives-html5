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





  this.draw = function(dX,dY,dR) {
    // this.context.save();
		// this.context.fillStyle = '#ffffff';
		// this.context.rect(this.x, this.y, this.width, this.height);
		// this.context.fill();
    // this.context.restore();

		if (this.imgData){
			mainContext.putImageData(this.imgData,(dX+thumbnailBorder[3]),(dY+thumbnailBorder[0]), 0, 0,  this.intWidth, this.intHeight)
      // var tcanvas = document.createElement('canvas'); /// create temp canvas
      // tctx = tcanvas.getContext('2d');
      // tcanvas.width = this.imgData.width;
      // tcanvas.height = this.imgData.height;
      // tctx.putImageData(this.imgData, 0, 0);
			// this.context.drawImage(tcanvas,this.x,this.y, );
      //woah
      //this.context.drawImage(tcanvas,(this.x+thumbnailBorder[3]),(this.y+thumbnailBorder[0]), this.intWidth, this.intHeight);
    }
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
