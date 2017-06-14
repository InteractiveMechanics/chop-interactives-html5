var leftFeetCanvas = document.getElementById('left_feet');
var leftFeetContext = leftFeetCanvas.getContext('2d');

var centerFeetCanvas = document.getElementById('center_feet');
var centerFeetContext = centerFeetCanvas.getContext('2d');

var rightFeetCanvas = document.getElementById('right_feet');
var rightFeetContext = rightFeetCanvas.getContext('2d');

var feetWidth = 600;
var feetHeight = 175;

leftFeetCanvas.width = feetWidth;
leftFeetCanvas.height = feetHeight;

centerFeetCanvas.width = feetWidth;
centerFeetCanvas.height = feetHeight;

rightFeetCanvas.width = feetWidth;
rightFeetCanvas.height = feetHeight;


var animationFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var frameIndex = 0;


var feetImage = new Image();
feetImage.addEventListener('load', feetLoaded, false);
feetImage.src = './images/feet.png';


function feetLoaded() {
	startFeet();
}

function drawFeet(ctx, obj, posX, posY) {
	//leftFeetContext.clearRect(0, 0, leftFeetCanvas.width, leftFeetCanvas.height);
	ctx.clearRect(0,0, obj.width, obj.height);
	var sourceX = Math.floor(animationFrames[frameIndex] % 9) * 952.1;
	var sourceY = Math.floor(animationFrames[frameIndex] / 9) * 506;
	
	//leftFeetContext.drawImage(feetImage, sourceX, sourceY, 952.1, 506, 250, 700, 317.3, 168.3);
	ctx.drawImage(feetImage, sourceX, sourceY, 952.1, 506, posX, posY, 317.3, 168.3);

	frameIndex++;
	if (frameIndex == animationFrames.length - 1) {
		frameIndex = 0;
	} 

}

function startFeet() {
	setInterval(drawFeet, 1000, leftFeetContext, leftFeetCanvas, 141, 0);
	setInterval(drawFeet, 1000, centerFeetContext, centerFeetCanvas, 141, 0);
	setInterval(drawFeet, 1000, rightFeetContext, rightFeetCanvas, 141, 0);
	

}
