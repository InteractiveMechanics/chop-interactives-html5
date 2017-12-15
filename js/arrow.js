function Arrow(canvas, part, x, y, direction) {
	var I = I || {};

    I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.x = x;
	I.y = y;
    I.width = 113;
    I.height = 203;
	
    I.part = part;
    I.direction = direction;
	I.sprite = new Sprite('arrows', new ImagePainter('./images/arrow-' + direction + '.png'));
	
	I.draw = function(context) {
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
