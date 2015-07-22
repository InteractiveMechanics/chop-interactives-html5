function Panel(bg_canvas, overlay_canvas, pegs) {
	var I = I || {};

	I.bg_canvas = bg_canvas;
	I.overlay_canvas = overlay_canvas;
	I.showSpecialPeg = false;
	I.pegs = pegs;
	I.speed = .5;
	I.scrollVal = 0;
	I.bg_image = null;

	I.specialPegCounter = 0;
    I.specialPegCounterLimit = 2;
	
    I.startY = 0;
	I.startY2 = -8100

	I.xPosition = function(totalSeconds, height) {
		return totalSeconds * this.speed % height;
	}

	I.moveBG = function () {
	    if (this.bg_image) {

	        this.bg_canvas.getContext('2d').drawImage(this.bg_image, 0, this.startY);
	        this.bg_canvas.getContext('2d').drawImage(this.bg_image, 0, this.startY2);

	        if (this.startY > this.bg_image.height) {
	            this.startY = -(this.bg_image.height - 1);
	        }

	        if (this.startY2 > this.bg_image.height) {
	            this.startY2 = -(this.bg_image.height - 1);
	        }

	        this.startY += this.speed;
	        this.startY2 += this.speed;
	    }
	}

	I.drawPegs = function () {
	    var that = this;
		this.overlay_canvas.getContext("2d").clearRect(0, 0, this.overlay_canvas.width, this.overlay_canvas.height);
	    
	    this.pegs.forEach(function(peg) {
	    	peg.draw();
	    	peg.y += that.speed;

	    	if (peg.y > window.innerHeight + 100) {  //Repeat the raindrop when it falls out of view
	    	    if (!peg.activated && that.speed > 0.25) {
	    	        that.speed -= 0.25;
	    	    }

		        peg.y = -100 //Account for the image size
		        peg.x = randomValue(90, that.overlay_canvas.width - 110);
		        peg.activated = false;   
		        peg.splatter_sprite = null;
		        peg.counter = 0;
		        peg.isSpecialPeg = false;
		        that.specialPegCounter += 1;

		        if(that.specialPegCounter == that.specialPegCounterLimit) {
		            peg.isSpecialPeg = true;
		            that.specialPegCounter = 0;
		        }
		    }
	  	});
	}

	return I;
}

function randomValue (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}