function Ball() {
	
	this.x = 50;
	this.y = 50;

	this.dX = 5;
	this.dY = 5;
	this.speed = 5;

	this.width = 100 * .5;
	this.height = 100 * .5;

	this.sprite = new Sprite('sphere', new ImagePainter('images/sphere@2x.png'));;

	this.move = function () {
		this.x += this.dX;
		this.y += this.dY;
	};

	this.update = function() {
		if(this.x > ballCanvas.width) {
	  		this.x = 0;
	  	}

	  	if(this.x < 0) {
	  		this.x = ballCanvas.width;
	  	}

	  	if(this.y > ballCanvas.height) {
	  		this.y = 0;
	  	}

	  	if(this.y < 0) {
	  		this.y = ballCanvas.height;
	  	}
	};

	this.draw = function() {
		
		var context = enviromentCanvas.getContext('2d');
		
		context.clearRect(0, 0, window.innerWidth, window.innerHeight);

		this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;
		
		context.save();
		this.sprite.paint(context);
		context.restore();
	
		
	}
}