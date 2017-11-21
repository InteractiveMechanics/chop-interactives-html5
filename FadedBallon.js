function FadedBallon(fadedBallon, canvas) {
	var I = I || {};

	I.x = fadedBallon.x;
	I.y = fadedBallon.y;

	I.width = fadedBallon.width;
	I.height = fadedBallon.height;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.speed = fadedBallon.speed;
	I.outofbounds = false;

	I.sprite = fadedBallon.sprite;


	I.update = function() {
		this.y -= this.speed / 9;

		if(this.y < -125) {
			this.outofbounds = true;
		}
	}

	I.draw = function() {

		this.context.save();
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;
        this.sprite.paint(this.context);
        this.context.restore();
	}
	

	return I;
}