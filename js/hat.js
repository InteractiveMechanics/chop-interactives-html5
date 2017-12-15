function Hat(canvas) {
	var I = I || {};

    I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.x = 0;
	I.y = 220;
	I.height = 431;
	I.width = 652;

    I.randomStart = function() {
        return Math.floor(Math.random() * (this.totalFrames - 0 + 1) + 0);
    }

	I.lastAdvance = 0;
	I.frame = 0;
	I.totalFrames = 10;

	I.cells = [
		{left: 0, top: 0, width: 652, height: 431},
		{left: 652, top: 0, width: 652, height: 431},
		{left: 1304, top: 0, width: 652, height: 431},
		{left: 1956, top: 0, width: 652, height: 431},
		{left: 2608, top: 0, width: 652, height: 431},
		{left: 3260, top: 0, width: 652, height: 431},
		{left: 3912, top: 0, width: 652, height: 431},
		{left: 4564, top: 0, width: 652, height: 431},
		{left: 5216, top: 0, width: 652, height: 431},
		{left: 5868, top: 0, width: 652, height: 431},
	];

	I.sprite = new Sprite('hat', new SpriteSheetPainter('./images/hat.png', I.cells));

	I.draw = function() {
        this.context.save();
		this.sprite.width = this.width;
		this.sprite.height = this.height;
		this.sprite.left = this.x;
		this.sprite.top = this.y;
		this.sprite.paint(this.context);
		this.context.restore();
	}

	I.update = function() {

	}

	return I;

}