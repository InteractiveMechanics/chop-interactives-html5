function Penny(I) {
	I = I || {};

	I.x = randomInRange();
	I.y = randomInRange();

	I.width = 48;
	I.height = 48;

	I.hasBeenHit = false;
	I.loadedAlphaImage = false;
	I.isActive = false;
	I.timeoutSet = false

	I.update = function() {

		if(this.hasBeenHit) {
			if(!this.timeoutSet) {
				var that = this;
				setTimeout(function(){
					that.isActive = true;
				}, 5000);

				this.timeoutSet = true;
			}
		}
	};

	I.sprite = Sprite("coin@2x");
	I.draw = function() {

		if(this.isActive) {
			//todo dead
		}

		this.sprite.draw(penny_canvas.getContext("2d"), this.x, this.y, null, null, this.width, this.height);
		if(this.hasBeenHit) {
			if(!this.loadedAlphaImage) {
				this.sprite = Sprite("coin-alpha@2x");
				this.loadedAlphaImage = true;
			}
		}
	}

	return I;
}