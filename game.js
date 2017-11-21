var cloudArray = new Array();
var fadedBallons = new Array();
var sandBags = new Array();

var ballon = new AirBallon(5, 5, 1, airballonCanvas);
var mousePos = {
	x: 5,
	y: 5
}

airballonCanvas.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(_canvas, evt);
}, false);

function getMousePos(_canvas, evt) {
    var rect = _canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function setup() {
	//Setup Clouds
	setupClouds();
	//Make Airbloon

	var fadedBallon = getFadedBallon();
	fadedBallons.push(
		new FadedBallon(fadedBallon, fadedCanvas)
	);

	var fadedBallon = getFadedBallon();
	fadedBallons.push(
		new FadedBallon(fadedBallon, fadedCanvas)
	);

	var fadedBallon = getFadedBallon();
	fadedBallons.push(
		new FadedBallon(fadedBallon, fadedCanvas)
	);

	var fadedBallon = getFadedBallon();
	fadedBallons.push(
		new FadedBallon(fadedBallon, fadedCanvas)
	);

	setInterval(function() {
		var fadedBallon = getFadedBallon();

		if(fadedBallons.length < 5) {
			fadedBallons.push(
				new FadedBallon(fadedBallon, fadedCanvas)
			);
		}
	}, 10000);

	setInterval(function() {
		if(sandBags.length < 3) {
			sandBags.push(
				new SandBag(sandbag_canvas)
			);
		}
	}, 5000);

	setInterval(function() {
	  update();
	  draw();

	}, 1000/60);

}

function collides(a, b) {
  return a.x < b.x + (b.width) &&
    a.x + (a.width * .25) > b.x &&
    a.y < b.y + (b.height) &&
    a.y + (a.height * .25) > b.y;
}

function getFadedBallon() {
	return {
		x: randomValue(50, 1880),
		y: randomValue(1180, 1380),
		width: 77,
		height: 109,
		speed: randomValue(2, 8),
		sprite: new Sprite('ballon-sm', new ImagePainter('./assets/bkgr-balloon-sm.png'))
	} 
}

function setupClouds() {

	setInterval(function() {
		if(cloudArray.length < 4) {
			cloudArray.push( getCloud() );
		}
	}, 7500);
}

function getCloud() {
	var randomNumber = randomValue(1, 3);

	if ( randomNumber == 1) {
		return new LargeCloud(1, _canvas);
	}


	if ( randomNumber == 2) {
		return new MediumCloud(1, _canvas);
	}

	if ( randomNumber == 3) {
		return new SmallCloud(1, _canvas);
	}

	return new MediumCloud(1, _canvas);
}

function update() {

	var xDistance = mousePos.x - ballon.x;
  	var yDistance = mousePos.y - ballon.y;
  	var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
    
  	if (distance > 1) {
    	ballon.x += xDistance * .025;
    	ballon.y += yDistance * .025;
  	}

	for (var i = 0; i < fadedBallons.length; ++i) {
	    if (fadedBallons[i].outofbounds) {
	        fadedBallons.splice(i--, 1);
	    } else {
	      fadedBallons[i].update();
	    }
	}

	for (var i = 0; i < cloudArray.length; ++i) {
	    if (cloudArray[i].outofbounds) {
	        cloudArray.splice(i--, 1);
	    } else {
	      cloudArray[i].update();
	    }
	}

	for (var i = 0; i < sandBags.length; ++i) {
	    if (sandBags[i].outofbounds) {
	        sandBags.splice(i--, 1);
	    } else {
	      sandBags[i].update();
	    }
	}
}

function draw() {
	canvas.clearRect(0, 0, window.innerWidth, window.innerHeight);
	airballonContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
	fadeContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
	sandBagContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
	
	cloudArray.forEach(function(c){
		c.draw();
	});

	fadedBallons.forEach(function(fb){
		fb.draw();
	});

	sandBags.forEach(function(sb){
		sb.draw();	
	});

	sandBags.forEach(function(sb){
		if(collides(sb, ballon)) {
			sb.outofbounds = true;	
			ballon.addRibbon();
		}
	});

	ballon.draw();
}


setup();