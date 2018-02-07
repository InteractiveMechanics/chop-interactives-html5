function SandBag(canvas, powerup) {
	var I = I || {};

	I.x = -1;
	I.y = -1;



	I.width = 33;
	I.height = 52;
	I.colX = I.x;
	I.colY = I.y;
	I.collisionWidth = 33;
	I.collisionHeight = 52;

	I.outofbounds = false;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.sprite = new Sprite('cloud-lg', new ImagePainter('./resources/sandbag.png'));
	
	I.powerUpType = powerup;


	I.update = function() {
		this.y += 1.5;

		if(this.y > 1100) {
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