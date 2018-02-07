function Alien(direction, canvas) {
	var I = I || {};


	I.x = Math.floor(Math.random() * (2500 - 2000 + 1)) +2000;
	I.y = Math.floor(Math.random() * (500 - 0 + 1)) + 0;
	I.colX = I.x;
	I.colY = I.y;

	I.direction = direction;

	I.arrayIndex = 0;

	I.width = 128.5;
	I.height = 71;
	I.collisionWidth = 128.5;
	I.collisionHeight = 71;
	I.outofbounds = false;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.sprite = new Sprite('alien', new ImagePainter('./images/alien.png'));


	I.update = function() {
		this.x += 7 * this.direction;

		if(this.x < -this.width) {
			this.outofbounds = true;
		}
		this.colX = this.x;
		this.colY = this.y;
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