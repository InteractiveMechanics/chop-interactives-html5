function Painting(canvas, x, y, w, h, border) {

  this.canvas = canvas;
	this.context = canvas.getContext('2d');

  this.lines = [];

  this.context.lineWidth = 20;
	this.context.lineJoin = 'round';
  this.context.lineCap = 'round';
	this.context.strokeStyle = 'hsl(189, 41%, 65%)';

  var seconds = 10;
  var timer1 = 60;
  var timer2 = seconds*60;

  this.timer = [];

  for(var i = 0; i < seconds+1; i++) {
    this.timer[i] = new Image();
    this.timer[i].src = './images/timer' + i +'.png';
  }

  this.op = 0;

  this.clearButton = new Button('clear', './images/btn-undo.png', 1834, 86, 86, bkgdCanvas);

  this.draw = function() {

    if(this.op < 60) {
      this.op ++;
    }
    bkgdContext.fillStyle = 'rgba(0,0,0,'+(this.op/60)+')';
    bkgdContext.fillRect(0,0,w,h);
    bkgdContext.drawImage(this.timer[seconds], 0, 0);
    if(timer1 > 0){
      this.imgData = null;
      console.log(timer1);
    }
    else if(timer2 > 0){
      this.clearButton.draw();
      if (timer2%60 === 0){
        seconds --;

      }
      console.log(seconds);

      if (isMouseDown){
        this.painted = true;
        this.context.beginPath();
        this.context.moveTo(lastMouseX, lastMouseY);
        this.context.lineTo(mouseX, mouseY);
        this.context.closePath();
        this.context.stroke();
      }
    }
    else if(currentCanvas == paintCanvas){
      if(this.painted == true) {
        this.imgData = cropImageFromCanvas(paintContext, paintCanvas);
      }
      bkgdContext.clearRect(0,0,w,h);
      this.context.clearRect(0,0,w,h);
      switchCanvas(paintCanvas,mainCanvas);
      videoStart();
      seconds = 10;
      timer1 = 60;
      timer2 = seconds*60;
      this.painted = false;
      this.op = 0;
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
