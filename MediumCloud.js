function MediumCloud(direction, canvas) {
	var I = I || {};

	I.x = randomValue(-800,-200);
	I.y = randomValue(50,900);

	I.direction = direction;

	I.arrayIndex = 0;

	I.width = 265.6;
	I.height = 163.75;

	I.outofbounds = false;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.sprite = new Sprite('cloud-med', new ImagePainter('./assets/cloud-med.png'));
	

	I.update = function() {
		this.x += 1.25 * this.direction;

		if(this.x > 3500) {
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