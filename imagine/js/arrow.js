function Arrow(canvas, part, x, y, direction) {
	var I = I || {};

    I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.x = x;
	I.y = y;
    I.width = 113;
    I.height = 203;
	
    I.part = part;
    I.direction = direction;

    I.isHover = false;

	I.sprite = new Sprite('arrow', new ImagePainter('./images/arrow-' + direction + '.png'));
    I.spriteHover = new Sprite('arrowHover', new ImagePainter('./images/arrow-' + direction + '-hover.png'));
	
	I.draw = function(context) {
		this.context.save();
        if (!this.isHover){
            this.sprite.width = this.width;
    		this.sprite.height = this.height;
    		this.sprite.left = this.x;
    		this.sprite.top = this.y;
            this.sprite.paint(this.context);
        } else {
            this.spriteHover.width = this.width;
    		this.spriteHover.height = this.height;
    		this.spriteHover.left = this.x;
    		this.spriteHover.top = this.y;
            this.spriteHover.paint(this.context);
        }
		this.context.restore();
	}

    I.changePart = function() {
        part.change(direction);
    }

	return I;

}
