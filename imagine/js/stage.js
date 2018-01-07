function Stage(canvas) {
	var I = I || {};

    I.canvas = canvas;
	I.context = canvas.getContext('2d');

    I.width = 1920;
    I.height = 1080;
    I.x = 0;
    I.y = 0;

    I.sprite = new Sprite('background', new ImagePainter('./images/bkgr.png'));

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
