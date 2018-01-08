function Region(name, x, y, canvas) {
	//var I = I || {};

	this.x = x;
	this.y = y;

	this.arrayIndex = 0;

	this.width = 166;
	this.height = 155;
  var pixels = [];

  this.name = name;

  this.canvas = canvas;
  this.context = canvas.getContext('2d');
  this.color = 'black';

  this.img = new Image();
  this.img.crossOrigin = "Anonymous";
  this.img.src = './images/' + name + '.png';
  
  this.update = function () {
      this.regionCanvas = document.createElement('canvas')
      this.regionContext = this.regionCanvas.getContext('2d');
      this.regionCanvas.width = this.img.width;
      this.regionCanvas.height = this.img.height;
      this.regionContext.putImageData(this.imgData, 0, 0);
  }

	this.draw = function() {
    this.context.save();
    this.context.drawImage(this.img, this.x, this.y);
    this.context.restore();
	}

	


	return this;
}