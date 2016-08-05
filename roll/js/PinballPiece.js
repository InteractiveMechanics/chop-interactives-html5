function PinballPiece(name, x, y, width, height, file) {
	
	this.x = x;
	this.y = y;

	this.width = width;
	this.height = height;

	this.name = name;

	this.sprite = new Sprite(name, new ImagePainter(file + '.png'));
	this.isHit = false;
	this.pickedUp = false;
	this.playerHoldingPiece = -1;
	this.playerHand = '';

	this.update = function(x,y) {
		if(this.pickedUp) {
			this.x = x;
			this.y = y;
		}
	};

	this.draw = function() {
		
	    var context = document.getElementById('enviroment-canvas').getContext('2d');

		this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x - (this.width / 2);
        this.sprite.top = this.y - (this.height / 2);
		
        context.save();
        if (this.isHit) {
            context.shadowColor = '#FFFFFF';
            context.shadowBlur = 20;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            this.isHit = false;
        } else {
            if (this.pickedUp) {
                context.shadowColor = '#000000';
                context.shadowBlur = 40;
                context.shadowOffsetX = 0;
                context.shadowOffsetY = 20;
            } else {
                context.shadowColor = '#000000';
                context.shadowBlur = 20;
                context.shadowOffsetX = 0;
                context.shadowOffsetY = 0;
            }
        }
		this.sprite.paint(context);
		context.restore();
		
	}
}