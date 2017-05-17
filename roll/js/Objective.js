function Objective(name, file) {
	
	this.x = 865;
	this.y = 1005;

	this.width = 175;
	this.height = 175;

	this.name = name;

	this.sprite = new Sprite(name, new ImagePainter(file + '.png'));
	this.isHit = false;
	this.pickedUp = false;
	this.playerHoldingPiece = -1;
	this.playerHand = '';

	this.update = function(x,y) {
		
	};

	this.draw = function() {
		
	    var context = document.getElementById('objective-canvas').getContext('2d');

		this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;
		
        context.save();       
		this.sprite.paint(context);
		context.restore();
		
	}
}