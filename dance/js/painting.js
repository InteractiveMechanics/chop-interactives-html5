function Painting(canvas, x, y, w, h, border, color) {

  this.canvas = canvas;
    this.context = canvas.getContext('2d');

  this.lines = [];

  this.context.lineWidth = 20;
	this.context.lineJoin = 'round';
  this.context.lineCap = 'round';
    //this.context.strokeStyle = 'hsl(189, 41%, 65%)';
    this.context.strokeStyle = color;
  this.op = 0;
  this.painted = false;
  this.imgData = null;

  this.clear = function () {
      this.context.clearRect(0, 0, 1920, 1080);
      this.op = 0;
      this.painted = false;
      this.imgData = null;
  }

	this.draw = function (lastMouseX, lastMouseY, mouseX, mouseY, player) {
	    if (player['status'] == 'closed' && player['confidence'] == 1) {


	        this.painted = true;
	        this.context.beginPath();
	        this.context.moveTo(lastMouseX, lastMouseY);
	        this.context.lineTo(mouseX, mouseY);
	        this.context.closePath();
	        this.context.stroke();
	    }

   }
  this.update = function() {
  
  }


	return this;
}
