function MainCurtain(canvas) {
	var I = I || {};

    I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.width = 660;
	I.height = 1034;
	I.left = 0;
	I.top = 0;

	I.lastAdvance = 0;
    I.totalFrames = 6;
    
    I.frame = 5;

	I.cells = [
		{left: 0, top: 0, width: 660, height: 1034},
		{ left: 660, top: 0, width: 660, height: 1034 },
		{ left: 1320, top: 0, width: 660, height: 1034 },
		{ left: 1980, top: 0, width: 660, height: 1034 },
		{ left: 2640, top: 0, width: 660, height: 1034 },
		{ left: 3300, top: 0, width: 660, height: 1034 },
	];

	I.sprite = new Sprite('mainCurtain', new SpriteSheetPainter('./images/sprite_curtains.png', I.cells));

	I.draw = function() {
        this.context.save();
		this.sprite.width = this.width;
		this.sprite.height = this.height;
		this.sprite.left = this.left;
		this.sprite.top = this.top;
		this.sprite.paint(this.context);
		this.context.restore();
	}

	I.update = function () {
        this.sprite.painter.cellIndex = this.frame;
	}
    
    I.change = function(direction) {
        if (direction == 'up') {
            if (this.frame > 0) {
                this.frame--;
            }
        } else if (direction == 'down') {
            if (this.frame < this.totalFrames - 1) {
                this.frame++;
            } 
        }
    }

	return I;

}