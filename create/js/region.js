function Region(name, x, y, canvas) {
	//var I = I || {};

	this.x = x;
	this.y = y;

	this.arrayIndex = 0;

	this.width = 166;
	this.height = 155;
	this.color = new Array(12);
  //var pixels = [];

  this.name = name;

  this.canvas = canvas;
  this.context = canvas.getContext('2d');
  this.loaded = false;
  this.img = new Image();
  var that = this;
  var tcanvas = document.createElement('canvas');
  var tctx = tcanvas.getContext('2d');
  tcanvas.width = 1920;
  tcanvas.height = 1080;
  
  this.img.onload = function () {
      that.loaded = true;
      tctx.drawImage(that.img, that.x, that.y);
      var pixels = tctx.getImageData(0, 0, tcanvas.width, tcanvas.height);
      that.imgData = pixels.data;
  };
  this.img.crossOrigin = "Anonymous";
  this.img.src = './images/colors/' + name + '-white.png';

  this.color[0] = new Image();
  this.color[0].src = './images/colors/' + name + '-lt-blue.png';
  this.color[1] = new Image();
  this.color[1].src = './images/colors/' + name + '-blue.png';
  this.color[2] = new Image();
  this.color[2].src = './images/colors/' + name + '-purple.png';
  this.color[3] = new Image();
  this.color[3].src = './images/colors/' + name + '-pink.png';
  this.color[4] = new Image();
  this.color[4].src = './images/colors/' + name + '-red.png';
  this.color[5] = new Image();
  this.color[5].src = './images/colors/' + name + '-orange.png';
  this.color[6] = new Image();
  this.color[6].src = './images/colors/' + name + '-yellow.png';
  this.color[7] = new Image();
  this.color[7].src = './images/colors/' + name + '-lt-green.png';
  this.color[8] = new Image();
  this.color[8].src = './images/colors/' + name + '-green.png';
  this.color[9] = new Image();
  this.color[9].src = './images/colors/' + name + '-black.png';
  this.color[10] = new Image();
  this.color[10].src = './images/colors/' + name + '-white.png';
  this.color[11] = new Image();
  this.color[11].src = './images/colors/' + name + '-brown.png';


  
  this.update = function () {
      this.regionCanvas = document.createElement('canvas')
      this.regionContext = this.regionCanvas.getContext('2d');
      this.regionCanvas.width = this.img.width;
      this.regionCanvas.height = this.img.height;
      this.regionContext.putImageData(this.imgData, 0, 0);
  }

  this.draw = function () {
      //console.log(this.name);
    this.context.save();
    this.context.drawImage(this.img, this.x, this.y);
    this.context.restore();
	}

	


	return this;
}