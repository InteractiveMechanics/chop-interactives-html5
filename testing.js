

function Stage(bg_canvas) {
	var I = I || {};
	I.bg_canvas = bg_canvas;
	I.bg_image = null;

	I.staticBG = function(img) {
		this.bg_canvas.getContext('2d').drawImage(img, 0,0, 1920, 1080);
	}

	return I;
}

var BackgroundStage;
var LeftFeet;
var width = 652; 
var height = 1080;



function init() {
	var background_stage = createBackgroundStage();

	var left_feet = createLeftFeet();

	document.body.appendChild(background_stage);
	document.body.appendChild(left_feet);

	BackgroundStage = new Stage(background_stage);

	LeftFeetContext = left_feet.getContext('2d');
	LeftFeet = new Feet();

	stageImg = new Image();
	stageImg.onload = imageLoaded;
	stageImg.src = './images/bkgr.png';

}

function createBackgroundStage() {
	var background_stage = document.createElement('canvas');
	background_stage.id = "background_stage";
	background_stage.width = 1920;
	background_stage.height = height;

	return background_stage;
}

function createLeftFeet() {
	var left_feet = document.createElement('canvas');
	left_feet.id = "left_feet";

	return left_feet;
}

function imageLoaded() {
    draw();
}

function draw() {
	BackgroundStage.staticBG(stageImg);

	LeftFeet.draw(LeftFeetContext);
}



init();
