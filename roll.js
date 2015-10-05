var ball = new Ball();
var pinballPieces = [];

var isMouseDown = false;
var mousePos;
var isHoldingPiece = false;

var indexOfDraggedItem = -1;
var alreadyDragging = false;

function mouseDown(e) {
	isMouseDown = true;
}

function mouseUp(e) {
	isMouseDown = false;
	alreadyDragging = false;

	pinballPieces[indexOfDraggedItem].pickedUp = false;

	indexOfDraggedItem = -1;
}

function getMousePos(canvas, evt) {
    var rect = enviromentCanvas.getBoundingClientRect();
    mousePos = {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    }
    return mousePos;
}

function mouseMove(e) {
	mousePos = getMousePos(canvas, e);
}


function setupPieces() {
	pinballPieces.push(new PinballPiece('bumper_circle_01', 900,150, 'images/bumper_circle_01@2x'));
	pinballPieces.push(new PinballPiece('bumper_circle_02', 1100, 400, 'images/bumper_circle_02@2x'));

	pinballPieces.push(new PinballPiece('bumper_left_01', 500, 500, 'images/bumper_left_01@2x'));
	pinballPieces.push(new PinballPiece('bumper_left_02', 800, 600, 'images/bumper_left_02@2x'));
	
	pinballPieces.push(new PinballPiece('bumper_right_01', 325, 250, 'images/bumper_right_01@2x'));
	pinballPieces.push(new PinballPiece('bumper_right_02', 125, 600, 'images/bumper_right_02@2x'));
}

function draw() {

	//context.clearRect(0, 0, window.innerWidth, window.innerHeight);
	ball.draw();

	pinballPieces.forEach(function(piece){
		piece.draw();
	});
}

function update() {
	//

	var mX = mousePos.x;
	var mY = mousePos.y;

	for (i=0; i < pinballPieces.length; i++) {
		var piece = pinballPieces[i];
		if(mX >= (piece.x - (piece.width / 2)) && mX < piece.x+piece.width && mY >= (piece.y - (piece.height /2)) && mY < piece.y+piece.height) {
			var pixel = enviromentContext.getImageData(mousePos.x, mousePos.y, 1, 1).data;
			console.log(pixel[3]);
			if(pixel[3] != 0) {
				if(isMouseDown && !alreadyDragging) {
					piece.pickedUp = true;
					alreadyDragging = true;
					indexOfDraggedItem = i;

				}
			}
		}

		piece.update(mX,mY);
	};

	/*for (i=0; i < pinballPieces.length; i++) {
		if(clickTest(pinballPieces[i])) {

		}

		if(isMouseDown) {
			if(pixel[3] != 0) {
				indexOfDraggedItem = i;
				console.log(pinballPieces[i].name);
				drag = true;;
			}
		}
	}*/

	ball.update();
}

function move() {
	ball.move();
}

function collisionDetection() {
	pinballPieces.forEach(function(piece) {
		if( ball.x < piece.x+piece.width && 
			ball.x + ball.width > piece.x && 
			ball.y < piece.y + piece.height && 
			ball.y + ball.height > piece.y) {

			var pixel = enviromentContext.getImageData(ball.x, ball.y, 1, 1).data;
			if(pixel[3] != 0) {
				ball.dX = -ball.dX + ball.speed;
			}
		}
	});
}

function pixelCollision(ball,piece)
{
	if(ball.overlap(piece))
	{
		var r = s1.intersection(s2);
		/*var pixels1 = getDataOfImage(s1.image,r[0]-s1.left,r[1]-s1.top,r[2],r[3]);
		var pixels2 = getDataOfImage(s2.image,r[0]-s2.left,r[1]-s2.top,r[2],r[3]);
		for(var i=0;i<pixels1.length;i++)
		{
			if(pixels1[i]!=0 && pixels2[i]!=0)
			{
				return true;
			}
		}*/

		return true;
	}
	
	return false;	
}

function getDataOfImage(img,x,y,w,h)
{
	x = parseInt(x);
	y = parseInt(y);
	w = parseInt(w);
	h = parseInt(h);
	if(w==0) w=1;
	if(h==0) h=1;
	var c = $.create("canvas");
	c.width = img.width;
	c.height = img.height;
	var ct = c.getContext("2d");
	ct.clearRect(0,0,c.width,c.height);
	ct.drawImage(img,0,0);
	var imagedata = ct.getImageData(x,y,w,h);
	var rgb = imagedata.data;
	var pixels=new Array(parseInt(w*h));
	var i=0;
	for(var y=0;y<h;y++)
	{
		for(var x=0;x<w;x++)
		{
			var p=(y*w+x)*4;
			pixels[i]=(rgb[p+3]<<24)|(rgb[p]<< 16)|(rgb[p+1]<<8)|rgb[p+2];
			i++;
		}
	}
	return pixels;
}

function loop() {	

	draw();
	update();
	collisionDetection();

	move();
}

function main() {

	setupPieces();
	setInterval(loop, 1000/60);
}

enviromentCanvas.onmousedown = mouseDown;
enviromentCanvas.onmouseup = mouseUp;
enviromentCanvas.onmousemove = mouseMove

main();