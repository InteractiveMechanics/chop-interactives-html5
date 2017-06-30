function Feet(I) {
	I = I || {};

	I.x = 0;
	I.y = 0;

	I.isActive = false;
	I.timeoutSet = false;
	I.paused = true;


	function getRandomInt(min, max) {
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min)) + min; 
	}


	I.lastAdvance = 0;
	I.frames = 0;
	I.totalFrames = 10;
	//console.log(I.totalFrames);

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
		{left: 5868, top: 0, width: 652, height: 253},
	];

	I.spritesheet = new Image();

	I.sprite = new Sprite('feet', new SpriteSheetPainter('./images/feet.png', I.cells));
	//I.sprite = new Sprite('greypeg', new ImagePainter('./images/LB_gray.png'));

	I.draw = function(context) {
		var that = this;

		this.sprite.width = this.width;
		this.sprite.height = this.height;
		this.sprite.left = this.x; //this.x
		this.sprite.top = 700; //this.y;

		context.save();

		if (!this.paused) {
			that.sprite.painter.advance();
			that.lastAdvance = that.lastAdvance;
			//that.frames++;
			console.log(that.lastAdvance);
		}

		// if (!this.paused) {
		// 	var time = new Date();
		// 	var milli = time.getTime();
		// 	if (milli - that.lastAdvance > 100) {
		// 		that.sprite.painter.advance();
		// 		that.lastAdvance = milli;
		// 		that.frames++;
		// 	}
		// 	if (that.frames == that.totalFrames - 1) {
		// 		that.paused = true;
		// 	}

		// }

		


		this.sprite.paint(context);
		context.restore();
	}

	// I.update = function(context) {
		
	// }



	return I;

}