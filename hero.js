function Hero(I) {
	I = I || {};

	I.x = 0;
	I.y = 0;



	I.isActive = false;
	I.timeoutSet = false;
	I.paused = true;

	I.feet = new Feet();
	I.body = new Body();
	I.face = new Face();
	I.hat = new Hat();
	I.arrows = new Arrows();
	
	I.draw = function(context) {
		if (this.isActive){
			this.arrows.draw(context);
			this.feet.draw(context);
			this.body.draw(context);
			this.face.draw(context);
			this.hat.draw(context);
			
		}

	}

	I.update = function(context) {
		// TODO: add update :-|
		if (this.isActive) {
			this.feet.update(context);
		}

	}

	I.reset = function() {
		// reset happens with kinect integration?????
	}

	return I;
}




// // FEET

// var leftFeetCanvas = document.getElementById('left_feet');
// var leftFeetContext = leftFeetCanvas.getContext('2d');

// var centerFeetCanvas = document.getElementById('center_feet');
// var centerFeetContext = centerFeetCanvas.getContext('2d');

// var rightFeetCanvas = document.getElementById('right_feet');
// var rightFeetContext = rightFeetCanvas.getContext('2d');

// var feetWidth = 600;
// var feetHeight = 165;

// leftFeetCanvas.width = feetWidth;
// leftFeetCanvas.height = feetHeight;

// centerFeetCanvas.width = feetWidth;
// centerFeetCanvas.height = feetHeight;

// rightFeetCanvas.width = feetWidth;
// rightFeetCanvas.height = feetHeight;

// //BODY

// var leftBodyCanvas = document.getElementById('left_body');
// var leftBodyContext = leftBodyCanvas.getContext('2d');

// var centerBodyCanvas = document.getElementById('center_body');
// var centerBodyContext = centerBodyCanvas.getContext('2d');

// var rightBodyCanvas = document.getElementById('right_body');
// var rightBodyContext = rightBodyCanvas.getContext('2d');

// var bodyWidth = 600;
// var bodyHeight = 295;

// leftBodyCanvas.width = bodyWidth;
// leftBodyCanvas.height = bodyHeight;

// centerBodyCanvas.width = bodyWidth;
// centerBodyCanvas.height = bodyHeight;

// rightBodyCanvas.width = bodyWidth;
// rightBodyCanvas.height = bodyHeight;

// //FACE

// var leftFaceCanvas = document.getElementById('left_face');
// var leftFaceContext = leftFaceCanvas.getContext('2d');

// var centerFaceCanvas = document.getElementById('center_face');
// var centerFaceContext = centerFaceCanvas.getContext('2d');

// var rightFaceCanvas = document.getElementById('right_face');
// var rightFaceContext = rightFaceCanvas.getContext('2d');

// var faceWidth = 600;
// var faceHeight = 250;

// leftFaceCanvas.width = faceWidth;
// leftFaceCanvas.height = faceHeight;

// centerFaceCanvas.width = faceWidth;
// centerFaceCanvas.height = faceHeight;

// rightFaceCanvas.width = faceWidth;
// rightFaceCanvas.height = faceHeight;

// //HAT

// var leftHatCanvas = document.getElementById('left_hat');
// var leftHatContext = leftHatCanvas.getContext('2d');

// var centerHatCanvas = document.getElementById('center_hat');
// var centerHatContext = centerHatCanvas.getContext('2d');

// var rightHatCanvas = document.getElementById('right_hat');
// var rightHatContext = rightHatCanvas.getContext('2d');

// var hatWidth = 600;
// var hatHeight = 285;

// leftHatCanvas.width = hatWidth;
// leftHatCanvas.height = hatHeight;

// centerHatCanvas.width = hatWidth;
// centerHatCanvas.height = hatHeight;

// rightHatCanvas.width = hatWidth;
// rightHatCanvas.height = hatHeight;






// //ANIMATION FRAMES

// var animationFrames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var frameIndex = 0;


// // IMAGES

// var feetImage = new Image();
// feetImage.addEventListener('load', feetLoaded, false);
// feetImage.src = './images/feet.png';

// var bodyImage = new Image();
// bodyImage.addEventListener('load', bodyLoaded, false);
// bodyImage.src = "./images/body.png";

// var faceImage = new Image();
// faceImage.addEventListener('load', faceLoaded, false);
// faceImage.src = "./images/face.png";

// var hatImage = new Image();
// hatImage.addEventListener('load', hatLoaded, false);
// hatImage.src = "./images/hat.png";

// // LOAD FUNCTIONS
// function feetLoaded() {
// 	startFeet();
// }

// function bodyLoaded() {
// 	startBody();
// }

// function faceLoaded() {
// 	startFace();
// }

// function hatLoaded() {
// 	startHat();
// }



// function drawHero(ctx, obj, img, sourceW, sourceH, posX, posY, destW, destH) {
// 	//leftFeetContext.clearRect(0, 0, leftFeetCanvas.width, leftFeetCanvas.height);
// 	ctx.clearRect(0,0, obj.width, obj.height);
// 	//var sourceX = Math.floor(animationFrames[frameIndex] % 9) * 952.1;
// 	//var sourceY = Math.floor(animationFrames[frameIndex] / 9) * 506;
// 	var sourceX = Math.floor(animationFrames[frameIndex] % 10) * sourceW;
// 	var sourceY = Math.floor(animationFrames[frameIndex] / 10) * sourceH;
	
// 	//ctx.drawImage(feetImage, sourceX, sourceY, 952.1, 506, posX, posY, 317.3, 168.3);
// 	ctx.drawImage(img, sourceX, sourceY, sourceW, sourceH, posX, posY, destW, destH);

// 	// frameIndex++;
// 	// if (frameIndex == animationFrames.length) {
// 	// 	frameIndex = 0;
// 	// } 
// 	frameIndex = 4;

// }



// function startFeet() {
// 	setInterval(drawHero, 1000, leftFeetContext, leftFeetCanvas, feetImage, 952.1, 506, 141, 0, 317.3, 168.3);
// 	setInterval(drawHero, 1000, centerFeetContext, centerFeetCanvas, feetImage, 952.1, 506, 141, 0, 317.3, 168.3);
// 	setInterval(drawHero, 1000, rightFeetContext, rightFeetCanvas, feetImage, 952.1, 506, 141, 0, 317.3, 168.3);

// }

// function startBody() {
// 	setInterval(drawHero, 1000, leftBodyContext, leftBodyCanvas, bodyImage, 952, 878, 141, 0, 317.3, 292.6);
// 	setInterval(drawHero, 1000, centerBodyContext, centerBodyCanvas, bodyImage, 952, 878, 141, 0, 317.3, 292.6);
// 	setInterval(drawHero, 500, rightBodyContext, rightBodyCanvas, bodyImage, 952, 878, 141, 0, 317.3, 292.6);
// }

// function startFace() {
// 	setInterval(drawHero, 500, leftFaceContext, leftFaceCanvas, faceImage, 951, 862, 141, 0, 317.3, 286.3);
// 	setInterval(drawHero, 500, centerFaceContext, centerFaceCanvas, faceImage, 951, 862, 141, 0, 317.3, 287.3);
// 	setInterval(drawHero, 500, rightFaceContext, rightBodyCanvas, faceImage, 951, 862, 141, 0, 317.3, 287.2);
// }

// function startHat() {
// 	setInterval(drawHero, 500, leftHatContext, leftHatCanvas, hatImage, 951, 862, 141, 0, 317.3, 287.3);
// 	setInterval(drawHero, 500, centerHatContext, centerHatCanvas, hatImage, 951, 862, 141, 0, 317.3, 287.3);
// 	setInterval(drawHero, 500, rightHatContext, rightHatCanvas, hatImage, 951, 862, 141, 0, 317.3, 287.3);
// }
