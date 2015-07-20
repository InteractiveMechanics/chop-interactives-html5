var timer = 0;

var left_pegs = [];
var right_pegs = [];
var center_pegs = [];

var LeftPanel;
var CenterPanel;
var RightPanel;

var paint_splatters = [];


var img;
var width = (window.innerWidth / 3) - 7;

var mousePos = {
	x: 5,
	y: 5
};

var image1;
var image2;
var image3;

function getMousePos(_canvas, evt) {
    var rect = _canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function init() {
	
	var canvas_left = createLeftCanvas();
	var canvas_center = createCenterCanvas();
	var canvas_right = createRightCanvas();
	
	document.body.appendChild(canvas_left);
	document.body.appendChild(canvas_right);
	document.body.appendChild(canvas_center);

	var overlay_left = createLeftOverlayPanel();
	var overlay_center = createCenterOverlayPanel();
	var overlay_right = createRightOverlayPanel();
	
	document.body.appendChild(overlay_left);
	document.body.appendChild(overlay_center);
	document.body.appendChild(overlay_right);

	setupPegs(overlay_left, overlay_center, overlay_right);

	loadSplatterImages();

	LeftPanel = new Panel(canvas_left, overlay_left, left_pegs);
	CenterPanel = new Panel(canvas_center, overlay_center, center_pegs);
	RightPanel = new Panel(canvas_right, overlay_right, right_pegs);

	image1 = new Image();
	image1.onload = loadImageOne;
	image1.src = 'background_slice@2x.jpg';
};


function loadImageOne() {
	image2 = new Image();
	image2.onload = loadImageTwo;
	image2.src = 'background_slice@2x.jpg';
};

function loadImageTwo() {
	image3 = new Image();
	image3.onload = loadImageThree;
	image3.src = 'background_slice@2x.jpg';
};

function loadImageThree() {

	LeftPanel.bg_image = image1;
	CenterPanel.bg_image = image2;
	RightPanel.bg_image = image3;

	draw(0);
    loop();
};

function loadSplatterImages() {
	for(var i = 0; i < 40; i++) {
		var filename = "paint-splatters/splatter_" +  i;
		paint_splatters.push( Sprite(filename) );
	}
}

function randomSplat() {
	return paint_splatters[Math.floor(Math.random()*paint_splatters.length)];
}

function createCanvasOverlays() {
	
};

function createLeftCanvas() {
	var canvas_left = document.createElement('canvas');
	canvas_left.id     = "canvas_left";
	canvas_left.width  = width;
	canvas_left.height = window.innerHeight;
	canvas_left.style.zIndex   = 8;
	canvas_left.style.borderLeft  = "5px solid #806f50";
	canvas_left.style.borderRight   = "5px solid #806f50";

	return canvas_left;
}

function createCenterCanvas() {
	var canvas_center = document.createElement('canvas');
	canvas_center.id     = "canvas_center";
	canvas_center.width  = width;
	canvas_center.height = window.innerHeight;
	canvas_center.style.zIndex   = 8;
	canvas_center.style.borderRight   = "5px solid #806f50";

	return canvas_center;
}

function createRightCanvas() {
	var canvas_right = document.createElement('canvas');
	canvas_right.id     = "canvas_right";
	canvas_right.width  = width;
	canvas_right.height = window.innerHeight;
	canvas_right.style.zIndex   = 8;
	canvas_right.style.borderRight   = "5px solid #806f50";

	return canvas_right;
}

function createLeftOverlayPanel() {
	var overlay_left = document.createElement('canvas');
	overlay_left.id     = "overlay_left";
	overlay_left.width  = width + 10;
	overlay_left.height = window.innerHeight;
	overlay_left.style.zIndex   = 15;
	overlay_left.style.position   = 'absolute';
	overlay_left.style.top   = 0;
	overlay_left.style.left   = 0;

	return overlay_left;
}

function createCenterOverlayPanel() {
	var overlay_center = document.createElement('canvas');
	overlay_center.id     = "overlay_left";
	overlay_center.width  = width + 5;
	overlay_center.height = window.innerHeight;
	overlay_center.style.zIndex   = 15;
	overlay_center.style.position   = 'absolute';
	overlay_center.style.top   = 0;
	overlay_center.style.left   = width+10;

	return overlay_center;
}

function createRightOverlayPanel() {
	var overlay_right = document.createElement('canvas');
	overlay_right.id     = "overlay_right";
	overlay_right.width  = width + 5;
	overlay_right.height = window.innerHeight;
	overlay_right.style.zIndex   = 15;
	overlay_right.style.position   = 'absolute';
	overlay_right.style.top   = 0;
	overlay_right.style.left   = (2*width)+15;

	return overlay_right;
}

function setupPegs(overlay_left, overlay_center, overlay_right) {

	for(var i = 0; i < window.innerHeight; i += (window.innerHeight / 8)) {
		var x = randomValue(90, width-100);
		var y = randomValue(i, i += (window.innerHeight / 15));
		
		var peg = getPeg(overlay_left, x, y);
		left_pegs.push(peg);
	}

	for(var j = 0; j < window.innerHeight; j += (window.innerHeight / 8)) {
		var x = randomValue(90, width-100);
		var y = randomValue(j, j += (window.innerHeight / 15));
		
		var peg = getPeg(overlay_center, x, y);
		center_pegs.push(peg);
	}

	for(var k = 0; k < window.innerHeight; k += (window.innerHeight / 8)) {
		var x = randomValue(90, width-100);
		var y = randomValue(k, k += (window.innerHeight / 15));
		
		var peg = getPeg(overlay_right, x, y);
		right_pegs.push(peg);
	}
}

function getPeg(c, x , y) {
	var pegndex = parseInt(randomValue(0, 8));
	var filepath = "pegs/pX/PX_" + pegndex;
	var specialfile = "pegs/pS/PS_" + pegndex;
	var peg = new Peg(x, y, c, filepath, pegndex, specialfile);

	return peg;
}

function randomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var lastFrameTime = 0;
var totalSeconds = 0;


function imageLoaded() {
    
}

function loop() {
    requestAnimationFrame(loop);

    var now = Date.now();
    var deltaSeconds = (now - lastFrameTime) / 1000;
    lastFrameTime = now;
    draw(deltaSeconds);
}

window.requestAnimationFrame = window.requestAnimationFrame
                || window.webkitRequestAnimationFrame
                || window.mozRequestAnimationFrame
                || function(callback) { window.setTimeout(callback, 1000 / 60); };

function draw(delta) {
	if(timer < 1700) {timer += 1;}
    totalSeconds += delta;

    LeftPanel.moveBG();
    CenterPanel.moveBG();
    RightPanel.moveBG();

    LeftPanel.drawPegs(mousePos);
    CenterPanel.drawPegs(mousePos);
    RightPanel.drawPegs(mousePos);

    fakeGamePlay();
}


function fakeGamePlay(){
	if(timer == 350) {
  		LeftPanel.pegs.forEach(function(peg) {
  			peg.playerHasEntered(2);
  			peg.player_assigned = true;
  		});
  	}

  	if(timer == 700) {
  		CenterPanel.pegs.forEach(function(peg) {
  			peg.playerHasEntered(4);
  			peg.player_assigned = true;
  		});
  	}

  	if(timer == 1050) {
  		RightPanel.pegs.forEach(function(peg) {
  			peg.playerHasEntered(3);
  			peg.player_assigned = true;
  		});
  	}

  	if(timer == 1400) {
  		CenterPanel.pegs.forEach(function(peg) {
  			peg.player_assigned = false;
  		});
  	}

  	if(timer == 1600) {
  		RightPanel.pegs.forEach(function(peg) {
  			peg.player_assigned = false;
  		});
  	}

  	if(timer == 1100) {
  		LeftPanel.pegs.forEach(function(peg) {
  			peg.player_assigned = false;
  		});
  	}
}

init();

CenterPanel.overlay_canvas.addEventListener('mousemove', function(evt) {
	mousePos = getMousePos(CenterPanel.overlay_canvas, evt);
}, false);
