function Face(I) {
	I = I || {};

	I.x = 0;
	I.y = 0;

	I.isActive = false;
	I.timeoutSet = false;
	I.paused = true;

	I.lastAdvance = 0;
	I.frames = 0;
	I.totalFrames = 14;

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

	I.spritesheet = new Image();

	I.sprite = new Sprite('body', new SpriteSheetPainter('./images/face.png', I.cells));

	I.draw = function(context) {
		var that = this;

		this.sprite.width = this.width;
		this.sprite.height = this.height;
		this.sprite.left = this.x;
		this.sprite.top = 400;

		context.save();

		this.sprite.paint(context);
		context.restore();
	}

	return I;


}