function Highlight(x, y, canvas) {
	var I = I || {};

	I.x = x;
	I.y = y;

	I.width = 100;
	I.height = 100;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.sprite = new Sprite('greypeg', new ImagePainter('./images/LB_shine.png'));
	

	I.update = function() {
		
	}

	I.draw = function() {

		this.context.save();
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;
        this.context.globalAlpha=0.1;
        this.sprite.paint(this.context);
        this.context.restore();
	}

	return I;
}