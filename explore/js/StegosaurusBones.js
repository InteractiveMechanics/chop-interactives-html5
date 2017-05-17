function StegosaurusBones(x, y, width, height, file, cX, cY, canvas) {
	
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.canvas = canvas;

	this.name = name;

	this.sprite = new Sprite(name, new ImagePainter(file));
	this.isHit = false;
	this.pickedUp = false;
	this.playerHoldingPiece = -1;
	this.playerHand = '';

	this.correctX = cX;
	this.correctY = cY;
	this.isBoneInPlace = false;

	this.update = function(x,y) {
		
		if(!this.isBoneInPlace) {
			if(this.pickedUp) {
				this.x = x;
				this.y = y;
			}
		}
		
		
		
		if( (this.correctX >= this.x - 20 && this.correctX <= this.x + 20) && (this.correctY >= this.y - 20 && this.correctY <= this.y + 20) ) {
			this.x = this.correctX;
			this.y = this.correctY;
			this.isBoneInPlace = true;
		}
		
	};

	this.draw = function() {
		
	    var context = canvas.getContext('2d');
	    context.save();
		this.sprite.width = this.width;
        this.sprite.height = this.height;
		this.sprite.left = this.x - (this.width / 2);
        this.sprite.top = this.y - (this.height / 2);
		this.sprite.paint(context);
		context.restore();
		
	}
}