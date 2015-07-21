function Panel(bg_canvas, overlay_canvas, pegs) {
	var I = I || {};

	I.bg_canvas = bg_canvas;
	I.overlay_canvas = overlay_canvas;
	I.showSpecialPeg = false;
	I.pegs = pegs;
	I.speed = .75;
	I.scrollVal = 0;
	I.bg_image = null;

	I.startY = 0;
	I.startY2 = -8100

	I.specialPegCounter = 0;
	I.specialPegCounterLimit = 2;



	I.splatAll = function() {
		this.pegs.forEach(function(peg) {
	    	peg.activated = true;
	    	if(!peg.splatter_sprite) {
	    		peg.splatter_sprite = randomSplat();
	    	}
	  	});
	};

	I.xPosition = function(totalSeconds, height) {
		return totalSeconds * this.speed % height;
	}

	I.moveBG = function(totalSeconds, img, val) {


		this.bg_canvas.getContext('2d').drawImage(img,0,this.startY);
		this.bg_canvas.getContext('2d').drawImage(img,0,this.startY2);

		if (this.startY > img.height) {
		    this.startY = -(img.height-1);
		}
		
		if (this.startY2 > img.height) {
		   this.startY2 = -(img.height-1);
		}

		  this.startY += this.speed;
		  this.startY2 += this.speed;
	}

	I.drawPegs = function(mousePos) {
		this.overlay_canvas.getContext("2d").clearRect(0, 0, this.overlay_canvas.width, this.overlay_canvas.height);
	    
	    var that = this;
	    this.pegs.forEach(function(peg) {
	    	peg.draw();
	    	peg.y += that.speed;

	    	var mX = mousePos.x;
		    var mY = mousePos.y;
		    if(mX >= peg.x && mX < peg.x+peg.width && mY >= peg.y && mY < peg.y+peg.height && peg.player_assigned) {
		    	peg.activated = true;

		    	if(peg.isSpecialPeg) {
		    		that.splatAll();
		    		peg.splatter_sprite = peg.special_splatter_sprite;
		    	} else {
		    		if(!peg.splatter_sprite) {
			    		peg.splatter_sprite = randomSplat();
			    	}
		    	}

		    	/*

		    	if(!peg.splatter_sprite && !peg.isSpecialPeg) {
		    		peg.splatter_sprite = randomSplat();
		    	} else {
		    		peg.showingSpecialPeg = false;
		    		that.splatAll();
		    	}

		    	*/
		    }

	    	if (peg.y > window.innerHeight) {  //Repeat the raindrop when it falls out of view
		        peg.y = -100 //Account for the image size
		        peg.x = randomValue(90, width-110);
		        peg.activated = false;   
		        peg.splatter_sprite = null;
		        that.specialPegCounter += 1;

		        if(that.specialPegCounter == that.specialPegCounterLimit) {
		        	peg.isSpecialPeg = true;
		        }
		    }
	  	});
	}

	return I;
}