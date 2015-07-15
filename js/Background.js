function Background() {
	this.speed = 1;
	this.draw = function() {

		this.y += this.speed;
		
		this.context.drawImage = (img.background, this.x, this.y);
		this.context.drawImage = (img.background, img.height-Math.abs(5), this.y);

		if(this.y >= this.canvasHeight) {
			//this.y = 0;
		}
	}
}

// Set Background to inherit properties from Drawable
Background.prototype = new Drawable();