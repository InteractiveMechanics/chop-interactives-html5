function setStage() {
	var stage = document.getElementById('stage');
	var context = stage.getContext('2d');
	context.canvas.width = window.innerWidth;
  	context.canvas.height = window.innerHeight;

	drawStage();


	function drawStage() {
		placeStage(context, stageImg, 0, 0, window.innerWidth, window.innerHeight);
	}

	function placeStage(ctx, obj, posX, posY, width, height) {
		if (width && height) {
			context.drawImage(obj, posX, posY, width, height);
		} else {
			context.drawImage(obj, posX, posY);
		}
	}

}


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
function setCurtain(el, img) {
	var curtain = document.getElementById(el);
	var context = curtain.getContext('2d');
	
	drawCurtain();

	function drawCurtain() {
		placeCurtain(context, img, 0, 0, curtain.width, curtain.height);
	}


	function placeCurtain(ctx, obj, posX, posY, width, height) {
		if (width && height) {
			context.drawImage(obj, posX, posY, width, height);
		} else {
			context.drawImage(obj, posX, posY);
		}
	}

	console.log(img);
	console.log(el);

}








var stageImg = new Image();
stageImg.addEventListener('load', setStage, false);
stageImg.src = "./images/bkgr.png";

var leftImg = new Image();
leftImg.addEventListener('load', setLeft, false);
leftImg.src = "./images/curtains.png";

var centerImg = new Image();
centerImg.addEventListener('load', setCenter, false);
centerImg.src = "./images/curtains.png";

var rightImg = new Image();

//rightImg.addEventListener('load', setCurtain('right', rightImg), false);
setCurtain('right', rightImg);

rightImg.src = "./images/curtains.png";



