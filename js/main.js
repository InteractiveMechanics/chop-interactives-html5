var canvas_left;
var canvas_right;
var canvas_center;

var overlay_left;
var overlay_center;
var timer = 0;
var overlay_right;

var left_pegs = [];
var right_pegs = [];
var center_pegs = [];

var paint_splatters = [];


var img;
var width = (window.innerWidth / 3) - 7;

var mousePos = {
	x: 5,
	y: 5
};

function getMousePos(_canvas, evt) {
    var rect = _canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function init() {
	
	createLeftCanvas();
	createCenterCanvas();
	createRightCanvas();
	

	document.body.appendChild(canvas_left);
	document.body.appendChild(canvas_right);
	document.body.appendChild(canvas_center);

	createCanvasOverlays();
	setupPegs();

	loadSplatterImages();

	img = new Image();
	img.onload = imageLoaded;
	img.src = 'background_slice@2x.jpg';

	
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
	
	
	createLeftOverlayPanel();
	createCenterOverlayPanel();
	createRightOverlayPanel();
	

	document.body.appendChild(overlay_left);
	document.body.appendChild(overlay_center);
	document.body.appendChild(overlay_right);

};

function createLeftCanvas() {
	canvas_left = document.createElement('canvas');
	canvas_left.id     = "canvas_left";
	canvas_left.width  = width;
	canvas_left.height = window.innerHeight;
	canvas_left.style.zIndex   = 8;
	canvas_left.style.borderLeft  = "5px solid #806f50";
	canvas_left.style.borderRight   = "5px solid #806f50";
}

function createCenterCanvas() {
	canvas_center = document.createElement('canvas');
	canvas_center.id     = "canvas_center";
	canvas_center.width  = width;
	canvas_center.height = window.innerHeight;
	canvas_center.style.zIndex   = 8;
	canvas_center.style.borderRight   = "5px solid #806f50";
}

function createRightCanvas() {
	canvas_right = document.createElement('canvas');
	canvas_right.id     = "canvas_right";
	canvas_right.width  = width;
	canvas_right.height = window.innerHeight;
	canvas_right.style.zIndex   = 8;
	canvas_right.style.borderRight   = "5px solid #806f50";
}

function createLeftOverlayPanel() {
	overlay_left = document.createElement('canvas');
	overlay_left.id     = "overlay_left";
	overlay_left.width  = width + 10;
	overlay_left.height = window.innerHeight;
	overlay_left.style.zIndex   = 15;
	overlay_left.style.position   = 'absolute';
	overlay_left.style.top   = 0;
	overlay_left.style.left   = 0;
}

function createCenterOverlayPanel() {
	overlay_center = document.createElement('canvas');
	overlay_center.id     = "overlay_left";
	overlay_center.width  = width + 5;
	overlay_center.height = window.innerHeight;
	overlay_center.style.zIndex   = 15;
	overlay_center.style.position   = 'absolute';
	overlay_center.style.top   = 0;
	overlay_center.style.left   = width+10;
}

function createRightOverlayPanel() {
	overlay_right = document.createElement('canvas');
	overlay_right.id     = "overlay_right";
	overlay_right.width  = width + 5;
	overlay_right.height = window.innerHeight;
	overlay_right.style.zIndex   = 15;
	overlay_right.style.position   = 'absolute';
	overlay_right.style.top   = 0;
	overlay_right.style.left   = (2*width)+15;
}

function setupPegs() {

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
    draw(0);
    loop();
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

    var vx = 15; // the background scrolls with a speed of 100 pixels/sec
    var numImages = Math.ceil(canvas_left.height / img.height) + 1;
    var xpos = totalSeconds * vx % img.height;
    
    canvas_left.getContext('2d').save();
    canvas_left.getContext('2d').translate(0, xpos);
    
    for (var i = 0; i < numImages; i++) {
        canvas_left.getContext('2d').drawImage(img, 0, -6500);
    }
    
    canvas_left.getContext('2d').restore();

    canvas_center.getContext('2d').save();
    canvas_center.getContext('2d').translate(0, xpos);
    
    for (var i = 0; i < numImages; i++) {
        canvas_center.getContext('2d').drawImage(img, 0,  -6700);
    }
    
    canvas_center.getContext('2d').restore();

    canvas_right.getContext('2d').save();
    canvas_right.getContext('2d').translate(0, xpos);
    
    for (var i = 0; i < numImages; i++) {
        canvas_right.getContext('2d').drawImage(img, 0,  -6300);
    }
    
    canvas_right.getContext('2d').restore();


    overlay_left.getContext("2d").clearRect(0, 0, overlay_left.width, overlay_left.height);
    left_pegs.forEach(function(peg) {
    	peg.draw();
    	peg.y += .25;

    	var mX = mousePos.x;
	    var mY = mousePos.y;
	    if(mX >= peg.x && mX < peg.x+peg.width && mY >= peg.y && mY < peg.y+peg.height && peg.player_assigned) {
	    	peg.activated = true;
	    	if(!peg.splatter_sprite) {
	    		peg.splatter_sprite = randomSplat();
	    	}
	    }

    	if (peg.y > window.innerHeight) {  //Repeat the raindrop when it falls out of view
	        peg.y = -100 //Account for the image size
	        peg.x = randomValue(90, width-110);
	        peg.activated = false;   
	        peg.splatter_sprite = null;
	    }
  	});

    overlay_center.getContext("2d").clearRect(0, 0, overlay_left.width, overlay_left.height);
    center_pegs.forEach(function(peg) {
    	peg.draw();
    	peg.y += .25;

    	var mX = mousePos.x;
	    var mY = mousePos.y;
	    if(mX >= peg.x && mX < peg.x+peg.width && mY >= peg.y && mY < peg.y+peg.height && peg.player_assigned) {
	    	peg.activated = true;
	    	if(!peg.splatter_sprite) {
	    		peg.splatter_sprite = randomSplat();
	    	}
	    }

    	if (peg.y > window.innerHeight) {  //Repeat the raindrop when it falls out of view
	        peg.y = -100 //Account for the image size
	        peg.x = randomValue(90, width-110);
	        peg.activated = false;   
	        peg.splatter_sprite = null;
	    }
  	});

  	overlay_right.getContext("2d").clearRect(0, 0, overlay_left.width, overlay_left.height);
    
    right_pegs.forEach(function(peg) {
    	peg.draw();
    	peg.y += .25;

    	var mX = mousePos.x;
	    var mY = mousePos.y;
	    if(mX >= peg.x && mX < peg.x+peg.width && mY >= peg.y && mY < peg.y+peg.height && peg.player_assigned) {
	    	peg.activated = true;

	    	if(!peg.splatter_sprite) {
	    		peg.splatter_sprite = randomSplat();
	    	}
	    }

    	if (peg.y > window.innerHeight) {  //Repeat the raindrop when it falls out of view
	        peg.y = -100 //Account for the image size
	        peg.x = randomValue(90, width-110);
	        peg.activated = false;   
	        peg.splatter_sprite = null;
	    }

  	});

  	if(timer == 350) {
  		left_pegs.forEach(function(peg) {
  			peg.playerHasEntered(2);
  			peg.player_assigned = true;
  		});
  	}

  	if(timer == 700) {
  		center_pegs.forEach(function(peg) {
  			peg.playerHasEntered(4);
  			peg.player_assigned = true;
  		});
  	}

  	if(timer == 1050) {
  		right_pegs.forEach(function(peg) {
  			peg.playerHasEntered(3);
  			peg.player_assigned = true;
  		});
  	}

  	if(timer == 1400) {
  		center_pegs.forEach(function(peg) {
  			peg.player_assigned = false;
  		});
  	}

  	if(timer == 1600) {
  		right_pegs.forEach(function(peg) {
  			peg.player_assigned = false;
  		});
  	}

  	if(timer == 1100) {
  		left_pegs.forEach(function(peg) {
  			peg.player_assigned = false;
  		});
  	}
}


init();

overlay_center.addEventListener('mousemove', function(evt) {
	mousePos = getMousePos(overlay_center, evt);
}, false);
