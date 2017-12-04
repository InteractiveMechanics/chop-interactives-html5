function Painting(canvas, x, y, w, h, border) {

  this.canvas = canvas;
	this.context = canvas.getContext('2d');

  this.lines = [];

  this.context.lineWidth = 5;
	this.context.lineJoin = 'round';
  this.context.lineCap = 'round';
	this.context.strokeStyle = 'blue';

  var timer1 = 3*60;
  var timer2 = 10*60;
  this.op = 0;
  //var counting = false;

  this.draw = function() {
    if(timer1 > 0){
      this.imgData = null;
      this.op ++;
      this.context.fillStyle = 'rgba(0,0,0,'+(this.op/100)+')';
      this.context.fillRect(0,0,w,h);
      console.log(timer1);
    }
    else if(timer2 > 0){
      if (isMouseDown){
        this.context.beginPath();
        this.context.moveTo(lastMouseX, lastMouseY);
        this.context.lineTo(mouseX, mouseY);
        this.context.closePath();
        this.context.stroke();
      }
    }
    else{
      if(this.imgData == null) {
        this.imgData = this.context.getImageData(0,0,w,h);
      }
      this.context.clearRect(0,0,w,h);
      console.log(this.imgData);
      switchCanvas(paintCanvas,mainCanvas);
      videoStart();
      timer1 = 3*60;
      timer2 = 10*60;
    }

   }
  this.update = function() {
    if(timer1>0){
      timer1--;
    }
    else if(timer2>0){
      timer2--;
    }
  }


	return this;
}
