function LiteBrite(x, y, canvas) {
	var I = I || {};

	I.x = x;
	I.y = y;

	I.arrayIndex = 0;

	I.width = 100;
	I.height = 100;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.sprite = new Sprite('greypeg', new ImagePainter('./images/LB_gray.png'));
	
	//Color Sprites
	I.gray = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
	I.liteBriteArray = []


	I.update = function() {
		
	}

	I.loadLiteBrites = function() {
		for(var i = 1; i <= 30; i++) {
			this.liteBriteArray.push(new Sprite('LB_' + i, new ImagePainter('./images/LB_'+ i +'.png')));
		}
	}

	I.makeGray = function () {
	    this.sprite = this.gray;
	}

	I.draw = function() {
        
		this.context.save();
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;
        this.sprite.paint(this.context);
        this.context.restore();
	}

	I.getSprite = function () {

		if (this.arrayIndex == this.liteBriteArray.length - 1) {
			this.arrayIndex = 0;
		}

		var liteBrite = this.liteBriteArray[this.arrayIndex];
		this.arrayIndex += 1;

		return liteBrite;
	}

	

	return I;
}