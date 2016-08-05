function Ball(x, y) {
	
	this.x = x;
	this.y = y;

	this.dX = 0;
	this.dY = 5;
	this.speed = 0.61;

	this.width = 100 * .5;
	this.height = 100 * .5;
	this.outBounds = false;

	this.sprite = new Sprite('sphere', new ImagePainter('images/pinball-pieces/sphere@2x.png'));;

	this.move = function () {
	    if (this.dY > 15) {
	        this.dY = this.dY - this.speed;
	    } else {
	        this.dY = this.dY + this.speed;
	    }

		this.x += this.dX;
		this.y += this.dY;
	};

	this.update = function () {
	    var that = this;
	    if (this.x > 2020 || this.x < -100 || this.y > 1180) {
	        setTimeout(function(){
	            that.outBounds = true;
	        }, 500);
	    }
	};

	this.draw = function() {
	    var context = document.getElementById('ball-canvas').getContext('2d');
		
		//context.clearRect(0, 0, window.innerWidth, window.innerHeight);

		this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;
		
        context.save();
        context.shadowColor = '#000000';
        context.shadowBlur = 5;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
		this.sprite.paint(context);
		context.restore();		
	}
}