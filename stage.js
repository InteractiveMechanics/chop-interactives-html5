function Panel(bg_canvas) {
	var I = I || {};
	I.bg_canvas = bg_canvas;
	I.bg_image = null;

	I.staticBG = function(img) {
		this.bg_canvas.getContext('2d').drawImage(img, 0, 0, 670, 1080);
	}

	return I;
}

function Spotlight(bg_canvas) {
	var I = I || {};
	I.bg_canvas = bg_canvas;
	I.bg_image = null;
	I.isActive = false;


	I.staticBG = function(img) {
		if (this.isActive) {
			this.bg_canvas.getContext('2d').drawImage(img, 0,0, 375, 1080);
		}
	}

	return I;
}

function Stage(bg_canvas) {
	var I = I || {};
	I.bg_canvas = bg_canvas;
	I.bg_image = null;

	I.staticBG = function(img) {
		this.bg_canvas.getContext('2d').drawImage(img, 0,0, 1920, 1080);
	}

	return I;
}

function Arrow(bg_canvas) {
	var I = I || {};
	I.bg_canvas = bg_canvas;
	I.bg_image = null;

	I.staticBG = function(img) {
		this.bg_canvas.getContext('2d').drawImage(img, 0,0, 75, 150);
	}

	return I;
}




var BackgroundStage;

var LeftCurtain;
var LeftSpotlight;
var LeftHero;
var LeftFeet;

var CenterCurtain;
var CenterSpotlight;
var CenterHero;

var RightCurtain;
var RightSpotlight;
var RightHero;

var ArrowL1;


var curtainImg;
var stageImg;
var spotlightImg;
var arrowImg;

var width = 640; //640
var spotlightWidth = 375;
//var heroWidth = 375;
var arrowWidth = 75;

var height = 1080;
var arrowHeight = 150;


function init() {

	var background_stage = createBackgroundStage();
	
	var left_curtain = createLeftCurtain();
	var left_spotlight = createLeftSpotlight();
	var left_hero = createLeftHero();
	var left_feet = createLeftFeet();

	var center_curtain = createCenterCurtain();
	var center_spotlight = createCenterSpotlight();
	var center_hero = createCenterHero();

	var right_curtain = createRightCurtain();
	var right_spotlight = createRightSpotlight();
	var right_hero = createRightHero();

	var arrowL1 = createArrowL1();

	
	
	document.body.appendChild(background_stage);

	document.body.appendChild(left_curtain);
	document.body.appendChild(left_spotlight);
	document.body.appendChild(left_hero);
	document.body.appendChild(left_feet);

	document.body.appendChild(center_curtain);
	document.body.appendChild(center_spotlight);
	document.body.appendChild(center_hero);


	document.body.appendChild(right_curtain);
	document.body.appendChild(right_spotlight);
	document.body.appendChild(right_hero);

	document.body.appendChild(arrowL1);

	BackgroundStage = new Stage(background_stage);

	LeftCurtain = new Panel(left_curtain);
	LeftSpotlight = new Spotlight(left_spotlight);

	LeftHeroContext = left_hero.getContext('2d');
	LeftHero = new Hero();

	LeftFeetContext = left_feet.getContext('2d');
	LeftFeet = new Feet();

	CenterCurtain = new Panel(center_curtain);
	CenterSpotlight = new Spotlight(center_spotlight);

	CenterHeroContext = center_hero.getContext('2d');
	CenterHero = new Hero();

	RightCurtain = new Panel(right_curtain);
	RightSpotlight = new Spotlight(right_spotlight);

	RightHeroContext = right_hero.getContext('2d');
	RightHero = new Hero();

	ArrowL1 = new Arrow(arrowL1);

	

	stageImg = new Image();
	stageImg.onload = imageLoaded;
	stageImg.src = './images/bkgr.png';

	img = new Image();
	img.onload = imageLoaded;
	img.src = './images/curtains.png';

	spotlightImg = new Image();
	spotlightImg.onload = imageLoaded;
	spotlightImg.src = './images/spotlight.png';

	arrowImg = new Image();
	arrowImg.onload = imageLoaded;
	arrowImg.src = './images/arrow-L.png';


};

function createBackgroundStage() {
	var background_stage = document.createElement('canvas');
	background_stage.id = "background_stage";
	background_stage.width = 1920;
	background_stage.height = height;

	return background_stage;
}

function createLeftCurtain() {
	var left_curtain = document.createElement('canvas');
	left_curtain.id     = "left_curtain";
	left_curtain.width  = width;
	left_curtain.height = height;

	return left_curtain;
}

function createLeftSpotlight() {

	var left_spotlight = document.createElement('canvas');
	left_spotlight.id = "left_spotlight";
	left_spotlight.width = spotlightWidth;
	left_spotlight.height = height;
	left_spotlight.isActive

	return left_spotlight;
}

function createLeftHero() {
	var left_hero = document.createElement('canvas');
	left_hero.id = "left_hero";
	left_hero.width = width;
	left_hero.height = height;

	return left_hero;
}

function createArrowL1() {
	var arrowL1 = document.createElement('canvas');
	arrowL1.id = "arrowL1";
	arrowL1.width = arrowWidth;
	arrowL1.height = arrowHeight;

	return arrowL1;
}


function createCenterCurtain() {
	var center_curtain = document.createElement('canvas');
	center_curtain.id     = "center_curtain";
	center_curtain.width  = width;
	center_curtain.height = height;

	return center_curtain;
}

function createCenterSpotlight() {
	var center_spotlight = document.createElement('canvas');
	center_spotlight.id = "center_spotlight";
	center_spotlight.width = spotlightWidth;
	center_spotlight.height = height;

	return center_spotlight;
}

function createCenterHero() {
	var center_hero = document.createElement('canvas');
	center_hero.id = "center_hero";
	center_hero.width = width;
	center_hero.height = height;

	return center_hero;
}


function createRightCurtain() {
	var right_curtain = document.createElement('canvas');
	right_curtain.id     = "right_curtain";
	right_curtain.width  = width;
	right_curtain.height = height;

	return right_curtain;
}

function createRightSpotlight() {
	var right_spotlight = document.createElement('canvas');
	right_spotlight.id = "right_spotlight";
	right_spotlight.width = spotlightWidth;
	right_spotlight.height = height;

	return right_spotlight;
}

function createRightHero() {
	var right_hero = document.createElement('canvas');
	right_hero.id = "right_hero";
	right_hero.width = width;
	right_hero.height = height;

	return right_hero;
}

function createLeftFeet() {
	var left_feet = document.createElement('canvas');
	left_feet.id = "left_feet";
	left_feet.width = width;

	return left_feet;
}


function imageLoaded() {
    draw();
    drawHero();
    drawLeftFeet();
    updateFeet();
}

function draw() {
	LeftCurtain.staticBG(img);
	//eftSpotlight.staticBG(spotlightImg);
	//LeftHero.draw(LeftHeroContext);

	CenterCurtain.staticBG(img);
	//CenterHero.draw(CenterHeroContext);
	//CenterSpotlight.staticBG(spotlightImg);


	RightCurtain.staticBG(img);
	//RightSpotlight.staticBG(spotlightImg);
	//RightHero.draw(RightHeroContext);

	BackgroundStage.staticBG(stageImg);
	//ArrowL1.staticBG(arrowImg);


}


function drawLeftFeet() {
	LeftFeet.isActive = true;
	LeftFeet.draw(LeftFeetContext);
}


function drawHero() {
	$('#left_hero').mouseover(function() {
		if (!LeftHero.isActive) {
			LeftHero.isActive = true;
			LeftSpotlight.isActive = true;
			LeftHero.draw(LeftHeroContext);
			LeftSpotlight.staticBG(spotlightImg);
			ArrowL1.staticBG(arrowImg);
		}
	});

	$('#center_hero').mouseover(function(){
		if (!CenterHero.isActive) {
			CenterHero.isActive = true;
			CenterSpotlight.isActive = true;
			CenterHero.draw(CenterHeroContext);
			CenterSpotlight.staticBG(spotlightImg);
			ArrowL1.staticBG(arrowImg);
		}
	});

	$('#right_hero').mouseover(function() {
		if (!RightHero.isActive) {
			RightHero.isActive = true;
			RightSpotlight.isActive = true;
			RightHero.draw(RightHeroContext);
			RightSpotlight.staticBG(spotlightImg);
		}
	});
}


function drawLeftHero() {
	LeftHero.update(LeftHeroContext);
}

function updateFeet() {
	$('#arrowL1').mouseover(function() {
		
		drawLeftHero();
	})
}







init();


// function init() {
// 	// STAGE
// 	var stageCanvas = document.getElementById('background_stage');
// 	var stageContext = stageCanvas.getContext('2d');

// 	stageCanvas.width = 1920;
// 	stageCanvas.height = 1080;

// 	// CURTAINS
// 	var leftCurtainCanvas = document.getElementById('left_curtain');
// 	var centerCurtainCanvas = document.getElementById('center_curtain');
// 	var rightCurtainCanvas = document.getElementById('right_curtain');

// 	leftCurtainCanvas.width = 640;
// 	leftCurtainCanvas.height = 1080;

// 	centerCurtainCanvas.width = 640;
// 	centerCurtainCanvas.height = 1080;

// 	rightCurtainCanvas.width = 640;
// 	rightCurtainCanvas.height = 1080;

// 	var leftCurtainContext = leftCurtainCanvas.getContext('2d');
// 	var centerCurtainContext = centerCurtainCanvas.getContext('2d');
// 	var rightCurtainContext = rightCurtainCanvas.getContext('2d');

// 	//SPOTLIGHT

// 	var leftSpotlightCanvas = document.getElementById('left_spotlight');
// 	var centerSpotlightCanvas = document.getElementById('center_spotlight');
// 	var rightSpotlightCanvas = document.getElementById('right_spotlight');


// 	leftSpotlightCanvas.width = 640;
// 	leftSpotlightCanvas.height = 1080;

// 	centerSpotlightCanvas.width = 640;
// 	centerSpotlightCanvas.height = 1080;

// 	rightSpotlightCanvas.width = 640;
// 	rightSpotlightCanvas.height = 1080;

// 	var leftSpotlightContext = leftSpotlightCanvas.getContext('2d');
// 	var centerSpotlightContext = centerSpotlightCanvas.getContext('2d');
// 	var rightSpotlightContext = rightSpotlightCanvas.getContext('2d');



// 	function setStage() {
// 		drawStage();

// 		function drawStage() {
// 			placeStage(stageContext, stageImg, 0, 0, 1920, 1080);
// 		}
// 		function placeStage(ctx, obj, posX, posY, width, height) {
// 			if (width && height) {
// 				ctx.drawImage(obj, posX, posY, width, height);
// 			} else {
// 				ctx.drawImage(obj, posX, posY);
// 			}
// 		}
// 	}


// 	function setCurtain(ctx, img) {	
// 		drawCurtain();

// 		function drawCurtain() {
// 			placeCurtain(ctx, img, 0, 0, 640, 1080);
			
// 		}

// 		function placeCurtain(ctx, obj, posX, posY, width, height) {
// 			if (width && height) {
// 				ctx.drawImage(obj, posX, posY, width, height);
// 			} else {
// 				ctx.drawImage(obj, posX, posY);
				
// 			}
// 		}
// 	}


// 	var stageImg = new Image();
// 	stageImg.addEventListener('load', setStage, false);
// 	stageImg.src = "./images/bkgr.png";

// 	var curtainImg = new Image();
// 	curtainImg.addEventListener('load', function() {setCurtain(leftCurtainContext,curtainImg)}, false);
// 	curtainImg.addEventListener('load', function() {setCurtain(centerCurtainContext, curtainImg)}, false);
// 	curtainImg.addEventListener('load', function() {setCurtain(rightCurtainContext, curtainImg)}, false);
// 	curtainImg.src = "./images/curtains.png";

// 	var spotlightImg = new Image();
// 	spotlightImg.addEventListener('load', function() {setCurtain(leftSpotlightContext,spotlightImg)}, false);
// 	spotlightImg.addEventListener('load', function() {setCurtain(centerSpotlightContext, spotlightImg)}, false);
// 	spotlightImg.addEventListener('load', function() {setCurtain(rightSpotlightContext, spotlightImg)}, false);
// 	spotlightImg.src = "./images/spotlight.png";
// }

// init();