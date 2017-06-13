var stageCanvas = document.getElementById('stage');
var stageContext = stage.getContext('2d');

stageCanvas.width = 1920;
stageCanvas.height = 1080;

var leftCurtainCanvas = document.getElementById('left');
var centerCurtainCanvas = document.getElementById('center');
var rightCurtainCanvas = document.getElementById('right');

leftCurtainCanvas.width = 640;
leftCurtainCanvas.height = 1080;

centerCurtainCanvas.width = 640;
centerCurtainCanvas.height = 1080;

rightCurtainCanvas.width = 640;
rightCurtainCanvas.height = 1080;

var leftCurtainContext = leftCurtainCanvas.getContext('2d');
var centerCurtainContext = centerCurtainCanvas.getContext('2d');
var rightCurtainContext = rightCurtainCanvas.getContext('2d');

function setStage() {
	drawStage();

	function drawStage() {
		placeStage(stageContext, stageImg, 0, 0, 1920, 1080);
	}
	function placeStage(ctx, obj, posX, posY, width, height) {
		if (width && height) {
			ctx.drawImage(obj, posX, posY, width, height);
		} else {
			ctx.drawImage(obj, posX, posY);
		}
	}
}


/*
function setLeft() {
	var curtainLeft = document.getElementById('left');
	var context = curtainLeft.getContext('2d');

	drawCurtain();

	function drawCurtain() {
		placeCurtain(context, leftImg, 0, 0, curtainLeft.width, curtainLeft.height);
	}

	function placeCurtain(ctx, obj, posX, posY, width, height) {
		if (width && height) {
			context.drawImage(obj, posX, posY, width, height);
		} else {
			context.drawImage(obj, posX, posY);
		}
	}

}

function setCenter() {
	var curtainCenter = document.getElementById('center');
	var context = curtainCenter.getContext('2d');

	drawCurtain();

	function drawCurtain() {
		placeCurtain(context, centerImg, 0, 0, curtainCenter.width, curtainCenter.height);
	}

	function placeCurtain(ctx, obj, posX, posY, width, height) {
		if (width && height) {
			context.drawImage(obj, posX, posY, width, height);
		} else {
			context.drawImage(obj, posX, posY);
		}
	}

}
*/

// THIS WORKS
// function setRight() {
// 	var curtainRight = document.getElementById('right');
// 	var context = curtainRight.getContext('2d');

// 	drawCurtain();

// 	function drawCurtain() {
// 		placeCurtain(context, rightImg, 0, 0, curtainRight.width, curtainRight.height);
// 	}

// 	function placeCurtain(ctx, obj, posX, posY, width, height) {
// 		if (width && height) {
// 			context.drawImage(obj, posX, posY, width, height);
// 		} else {
// 			context.drawImage(obj, posX, posY);
// 		}
// 	}

// }


// THIS DOES NOT WORK
function setCurtain(ctx, img) {	
	drawCurtain();

	function drawCurtain() {
		placeCurtain(ctx, img, 0, 0, 640, 1080);
	}

	function placeCurtain(ctx, obj, posX, posY, width, height) {
		if (width && height) {
			ctx.drawImage(obj, posX, posY, width, height);
		} else {
			ctx.drawImage(obj, posX, posY);
		}
	}
}



var stageImg = new Image();
stageImg.addEventListener('load', setStage, false);
stageImg.src = "./images/bkgr.png";


var curtainImg = new Image();
curtainImg.src = "./images/curtains.png";

curtainImg.addEventListener('load', setCurtain(leftCurtainContext, curtainImg), false);
curtainImg.addEventListener('load', setCurtain(centerCurtainContext, curtainImg), false);
curtainImg.addEventListener('load', setCurtain(rightCurtainContext, curtainImg), false);

