var canvas_left;
var canvas_right;
var canvas_center;

var overlay_left;
var overlay_center;
var overlay_right;

var left_pegs = [];
var right_pegs = [];
var center_pegs = [];


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
	
	canvas_left = document.createElement('canvas');
	canvas_left.id     = "canvas_left";
	canvas_left.width  = width;
	canvas_left.height = window.innerHeight;
	canvas_left.style.zIndex   = 8;
	canvas_left.style.borderLeft  = "5px solid #806f50";
	canvas_left.style.borderRight   = "5px solid #806f50";

	canvas_center = document.createElement('canvas');
	canvas_center.id     = "canvas_center";
	canvas_center.width  = width;
	canvas_center.height = window.innerHeight;
	canvas_center.style.zIndex   = 8;
	canvas_center.style.borderRight   = "5px solid #806f50";

	canvas_right = document.createElement('canvas');
	canvas_right.id     = "canvas_right";
	canvas_right.width  = width;
	canvas_right.height = window.innerHeight;
	canvas_right.style.zIndex   = 8;
	canvas_right.style.borderRight   = "5px solid #806f50";

	document.body.appendChild(canvas_left);
	document.body.appendChild(canvas_right);
	document.body.appendChild(canvas_center);

	createCanvasOverlays();
	setupPegs();

	img = new Image();
	img.onload = imageLoaded;
	img.src = 'background_slice@2x.jpg';
};

function createCanvasOverlays() {
	
	overlay_left = document.createElement('canvas');
	overlay_left.id     = "overlay_left";
	overlay_left.width  = width + 10;
	overlay_left.height = window.innerHeight;
	overlay_left.style.zIndex   = 15;
	overlay_left.style.position   = 'absolute';
	overlay_left.style.top   = 0;
	overlay_left.style.left   = 0;

	overlay_center = document.createElement('canvas');
	overlay_center.id     = "overlay_left";
	overlay_center.width  = width + 5;
	overlay_center.height = window.innerHeight;
	overlay_center.style.zIndex   = 15;
	overlay_center.style.position   = 'absolute';
	overlay_center.style.top   = 0;
	overlay_center.style.left   = width+10;

	overlay_right = document.createElement('canvas');
	overlay_right.id     = "overlay_right";
	overlay_right.width  = width + 5;
	overlay_right.height = window.innerHeight;
	overlay_right.style.zIndex   = 15;
	overlay_right.style.position   = 'absolute';
	overlay_right.style.top   = 0;
	overlay_right.style.left   = (2*width)+15;

	document.body.appendChild(overlay_left);
	document.body.appendChild(overlay_center);
	document.body.appendChild(overlay_right);

};

function setupPegs() {

	for(var i = 0; i < window.innerHeight; i += (window.innerHeight / 8)) {
		var x = randomValue(90, width-100);
		var y = randomValue(i, i += (window.innerHeight / 15));
		//createPeg(overlay_left, x, y, '#003300');

		var pegfile = "pegs/p0/P0_" + parseInt(randomValue(0, 8));
		left_pegs.push(new Peg(x, y, overlay_left, pegfile));
	}

	for(var j = 0; j < window.innerHeight; j += (window.innerHeight / 8)) {
		var x = randomValue(90, width-100);
		var y = randomValue(j, j += (window.innerHeight / 15));
		//createPeg(overlay_center, x, y, '#FF0000');
		var pegfile = "pegs/p1/P1_" + parseInt(randomValue(0, 8));
		center_pegs.push(new Peg(x, y, overlay_center, pegfile));
	}

	for(var k = 0; k < window.innerHeight; k += (window.innerHeight / 8)) {
		var x = randomValue(90, width-100);
		var y = randomValue(k, k += (window.innerHeight / 15));
		//createPeg(overlay_right, x, y, '#0000FF');
		var pegfile = "pegs/p2/P2_" + parseInt(randomValue(0, 8));
		right_pegs.push(new Peg(x, y, overlay_right, pegfile));
	}
}

function createPeg(canvas, x, y, color) {
	var context = canvas.getContext('2d');
    var centerX = x;
    var centerY = y;
    var radius = 40;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = color;
    context.stroke();
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
    totalSeconds += delta;

    var vx = 25; // the background scrolls with a speed of 100 pixels/sec
    var numImages = Math.ceil(canvas_left.height / img.height) + 1;
    var xpos = totalSeconds * vx % img.height;
    
    canvas_left.getContext('2d').save();
    canvas_left.getContext('2d').translate(0, -xpos);
    
    for (var i = 0; i < numImages; i++) {
        canvas_left.getContext('2d').drawImage(img, 0, -1 * i * img.height);
    }
    
    canvas_left.getContext('2d').restore();

    canvas_center.getContext('2d').save();
    canvas_center.getContext('2d').translate(0, -xpos);
    
    for (var i = 0; i < numImages; i++) {
        canvas_center.getContext('2d').drawImage(img, 0, -1 * i * img.height);
    }
    
    canvas_center.getContext('2d').restore();

    canvas_right.getContext('2d').save();
    canvas_right.getContext('2d').translate(0, -xpos);
    
    for (var i = 0; i < numImages; i++) {
        canvas_right.getContext('2d').drawImage(img, 0, -1 * i * img.height);
    }
    
    canvas_right.getContext('2d').restore();


    overlay_left.getContext("2d").clearRect(0, 0, overlay_left.width, overlay_left.height);
    left_pegs.forEach(function(peg) {
    	peg.draw();
    	peg.y += .25;

    	var mX = mousePos.x;
	    var mY = mousePos.y;
	    if(mX >= peg.x && mX < peg.x+peg.width && mY >= peg.y && mY < peg.y+peg.height) {
	    	peg.activated = true;
	    }

    	if (peg.y > window.innerHeight) {  //Repeat the raindrop when it falls out of view
	        peg.y = -100 //Account for the image size
	        peg.x = randomValue(90, width-110);
	        peg.activated = false;   
	    }
  	});

    overlay_center.getContext("2d").clearRect(0, 0, overlay_left.width, overlay_left.height);
    center_pegs.forEach(function(peg) {
    	peg.draw();
    	peg.y += .25;

    	var mX = mousePos.x;
	    var mY = mousePos.y;
	    if(mX >= peg.x && mX < peg.x+peg.width && mY >= peg.y && mY < peg.y+peg.height) {
	    	peg.activated = true;
	    }

    	if (peg.y > window.innerHeight) {  //Repeat the raindrop when it falls out of view
	        peg.y = -100 //Account for the image size
	        peg.x = randomValue(90, width-110);
	        peg.activated = false;   
	    }
  	});

  	overlay_right.getContext("2d").clearRect(0, 0, overlay_left.width, overlay_left.height);
    
    right_pegs.forEach(function(peg) {
    	peg.draw();
    	peg.y += .25;

    	var mX = mousePos.x;
	    var mY = mousePos.y;
	    if(mX >= peg.x && mX < peg.x+peg.width && mY >= peg.y && mY < peg.y+peg.height) {
	    	peg.activated = true;
	    }

    	if (peg.y > window.innerHeight) {  //Repeat the raindrop when it falls out of view
	        peg.y = -100 //Account for the image size
	        peg.x = randomValue(90, width-110);
	        peg.activated = false;   
	    }

  	});
}


init();

overlay_center.addEventListener('mousemove', function(evt) {
	mousePos = getMousePos(overlay_center, evt);
}, false);
