function Face(canvas) {
	var I = I || {};

    I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.x = 0;
	I.y = 230;
	I.height = 431;
	I.width = 652;

	I.lastAdvance = 0;
    I.totalFrames = 14;
    I.randomStart = function() {
        return Math.floor(Math.random() * (this.totalFrames - 1) + 0);
    }
	I.frame = I.randomStart();

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
		{left: 6520, top: 0, width: 652, height: 431},
		{left: 7172, top: 0, width: 652, height: 431},
		{left: 7824, top: 0, width: 652, height: 431},
		{left: 8476, top: 0, width: 652, height: 431},
	];

	I.sprite = new Sprite('face', new SpriteSheetPainter('./images/face.png', I.cells));

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
        this.sprite.painter.cellIndex = this.frame;
	}

    I.change = function(direction) {
        if (direction == 'left') {
            if (this.frame == 0) {
                this.frame = this.totalFrames - 1;
            } else {
                this.frame--;
            }
        } else if (direction == 'right') {
            if (this.frame == this.totalFrames - 1) {
                this.frame = 0;
            } else {
                this.frame++;
            }
        }
    }

	return I;

}