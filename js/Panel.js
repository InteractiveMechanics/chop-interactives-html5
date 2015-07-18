function Panel(bg_canvas, overlay_canvas, pegs) {
	var I = I || {};

	I.bg_canvas = bg_canvas;
	I.overlay_canvas = overlay_canvas;
	I.showSpecialPeg = false;
	I.pegs = pegs;
	I.speed = 15;

	I.splatAll = function() {
		this.pegs.forEach(function(peg) {
	    	peg.activated = true;
	  	});
	};

	I.xPosition = function(totalSeconds, height) {
		return totalSeconds * this.speed % height;
	}

	I.moveBG = function(totalSeconds, img, val) {
		this.bg_canvas.getContext('2d').save();
    	this.bg_canvas.getContext('2d').translate(0, this.xPosition(totalSeconds, img.height));
    	this.bg_canvas.getContext('2d').drawImage(img, 0, val);
    	this.bg_canvas.getContext('2d').restore();
	}

	I.drawPegs = function(mousePos) {
		this.overlay_canvas.getContext("2d").clearRect(0, 0, this.overlay_canvas.width, this.overlay_canvas.height);
	    
	    this.pegs.forEach(function(peg) {
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
	}

	return I;
}