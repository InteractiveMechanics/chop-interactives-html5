var stageCanvas = document.getElementById('background_stage');
var stageContext = stageCanvas.getContext('2d');

stageCanvas.width = 1920;
stageCanvas.height = 1080;

var leftCurtainCanvas = document.getElementById('left_curtain');
var centerCurtainCanvas = document.getElementById('center_curtain');
var rightCurtainCanvas = document.getElementById('right_curtain');

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

curtainImg.addEventListener('load', setCurtain(leftCurtainContext, curtainImg), false);
curtainImg.addEventListener('load', setCurtain(centerCurtainContext, curtainImg), false);
curtainImg.addEventListener('load', setCurtain(rightCurtainContext, curtainImg), false);
curtainImg.src = "./images/curtains.png";

