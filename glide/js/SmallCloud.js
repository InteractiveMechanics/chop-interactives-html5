function SmallCloud(direction, canvas) {
	var I = I || {};


	I.x = Math.floor(Math.random() * (-170 - -500 + 1)) + -500;
	I.y = Math.floor(Math.random() * (500 - 0 + 1)) + 0;

	I.direction = direction;

	I.arrayIndex = 0;

	I.width = 165.5;
	I.height = 85.5;
	I.outofbounds = false;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.sprite = new Sprite('cloud-sm', new ImagePainter('./images/cloud-sm.png'));
	
	//Color Sprites
	I.liteBriteArray = []


	I.update = function() {
		this.x += 2.75 * this.direction;

		if(this.x > 2000) {
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