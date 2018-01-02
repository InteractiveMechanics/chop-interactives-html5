function Button(file, x, y, canvas) {

		this.x = x;
		this.y = y;

		this.arrayIndex = 0;

	  var pixels = [];

		this.canvas = canvas;
		this.context = canvas.getContext('2d');

	  var tcanvas = document.createElement('canvas'), /// create temp canvas
	  tctx = tcanvas.getContext('2d'); /// temp context

	  this.img = new Image();

	  this.img.onload = function () {
	  }
	  this.img.crossOrigin = "Anonymous";
	  this.img.src = file;

		this.draw = function() {
	    this.context.save();
	    //console.log(this.img);
	    this.context.drawImage(this.img, this.x, this.y);
	    this.context.restore();
		}


		return this;
	}
