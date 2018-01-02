function Painting(canvas, x, y, w, h, border) {

  this.canvas = canvas;
	this.context = canvas.getContext('2d');

  this.lines = [];

  this.context.lineWidth = 20;
	this.context.lineJoin = 'round';
  this.context.lineCap = 'round';
  this.context.strokeStyle = 'hsl(189, 41%, 65%)';
  this.op = 0;

  // var seconds = 10;
  // var timer1 = 60;
  // var timer2 = seconds*60;
  // var timer3 = 3*60;
  //
  // this.timer = [];
  //
  // for(var i = 0; i < seconds+1; i++) {
  //   this.timer[i] = new Image();
  //   this.timer[i].src = './images/timer' + i +'.png';
  // }
  //
  // var veilOpacity = 90;

  // this.op = 0;
  // this.veilOp = veilOpacity;

	this.draw = function (lastMouseX, lastMouseY, mouseX, mouseY, player) {
	    if (player['status'] == 'closed' && player['confidence'] == 1) {


	        this.painted = true;
	        this.context.beginPath();
	        this.context.moveTo(lastMouseX, lastMouseY);
	        this.context.lineTo(mouseX, mouseY);
	        this.context.closePath();
	        this.context.stroke();
	    }

    // if(this.op < 60) {
    //   this.op ++;
    //   bkgdContext.fillStyle = 'rgba(0,0,0,'+(this.op/60)+')';
    //   bkgdContext.fillRect(0,0,w,h);
    // }
    // veilContext.clearRect(0,0,w,h);
    // veilContext.globalAlpha= this.veilOp/100;
    // veilContext.fillstyle = 'rgba(0,0,0,1)';
    // veilContext.fillRect(0,0,w,h);
    // veilContext.drawImage(this.timer[seconds], 0, 0);
    // if(timer1 > 0){
    //   this.imgData = null;
    // }
    // else if(timer2 > 0){
    //   this.clearButton.draw();
    //   if (timer2%60 === 0){
    //     seconds --;
    //
    //   }
    //
    //   if (isMouseDown){
    //     this.painted = true;
    //     this.context.beginPath();
    //     this.context.moveTo(lastMouseX, lastMouseY);
    //     this.context.lineTo(mouseX, mouseY);
    //     this.context.closePath();
    //     this.context.stroke();
    //   }
    // }
    // else if(this.veilOp > 0){
    //   this.veilOp --;
    // }
    // else if(timer3 > 0){
    //   timer3 --;
    // }
    // else if(currentCanvas == paintCanvas){
    //   if(this.painted == true) {
    //     this.imgData = cropImageFromCanvas(paintContext, paintCanvas);
    //   }
    //   bkgdContext.clearRect(0,0,w,h);
    //   this.veilOp = 0;
    //   this.context.clearRect(0,0,w,h);
    //   switchCanvas(paintCanvas,mainCanvas);
    //   videoStart();
    //   seconds = 10;
    //   timer1 = 60;
    //   timer2 = seconds*60;
    //   this.painted = false;
    //   this.op = 0;
    // }

   }
  this.update = function() {
    // if(timer1>0){
    //   timer1--;
    // }
    // else if(timer2>0){
    //   timer2--;
    // }
  }


	return this;
}
