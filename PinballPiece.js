function PinballPiece(name, x, y, file) {
	
	this.x = x;
	this.y = y;

	this.width = 150;
	this.height = 150;

	this.name = name;

	this.sprite = new Sprite(name, new ImagePainter(file + '.png'));;
	this.pickedUp = false;
	this.playerHoldingPiece = -1;

	this.update = function(x,y) {
		if(this.pickedUp) {
			this.x = x;
			this.y = y;
		}
	};

	this.draw = function() {
		
		var context = enviromentCanvas.getContext('2d');


		this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x - (this.width / 2);
        this.sprite.top = this.y - (this.height / 2);
		
		context.save();
		this.sprite.paint(context);
		context.restore();
		
	}
}