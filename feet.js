function Feet(I) {
	I = I || {};

	I.x = 0;
	I.y = 0;

	I.height = 253;
	I.width = 652;

	I.isActive = false;
	I.timeoutSet = false;
	I.paused = true;

	function getRandomInt(min, max) {
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min)) + min; 
	}


	I.lastAdvance = 0;
	I.frame = 0;
	I.totalFrames = 10;

	I.cells = [
		{left: 0, top: 0, width: 652, height: 253},
		{left: 652, top: 0, width: 652, height: 253},
		{left: 1304, top: 0, width: 652, height: 253},
		{left: 1956, top: 0, width: 652, height: 253},
		{left: 2608, top: 0, width: 652, height: 253},
		{left: 3260, top: 0, width: 652, height: 253},
		{left: 3912, top: 0, width: 652, height: 253},
		{left: 4564, top: 0, width: 652, height: 253},
		{left: 5216, top: 0, width: 652, height: 253},
		{left: 5868, top: 0, width: 652, height: 253}
	];

	I.sprite = new Sprite('feet', new SpriteSheetPainter('./images/feet.png', I.cells));

	I.draw = function(context) {
		var that = this;

		this.sprite.width = this.width;
		this.sprite.height = this.height;
		this.sprite.left = this.x;
		this.sprite.top = this.y;

		context.save();
		this.sprite.paint(context);
		context.restore();
	}

	I.update = function(context) {
		this.draw(context);
	}



	return I;

}