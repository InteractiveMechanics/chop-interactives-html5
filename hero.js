var leftFeetCanvas = document.getElementById('left_feet');
var leftFeetContext = leftFeetCanvas.getContext('2d');

leftFeetCanvas.width = 700;
leftFeetCanvas.height = 1000;



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
	console.log(frameIndex);
	if (frameIndex == animationFrames.length) {
		frameIndex = 0;
		console.log(frameIndex);
	}

}

function startFeet() {
	setInterval(drawFeet(leftFeetContext, leftFeetCanvas, 250, 700), 1000);
}
