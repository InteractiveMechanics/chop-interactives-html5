function Palette(x, y, canvas) {
	// var I = I || {};

	this.x = x;
	this.y = y;

	this.arrayIndex = 0;

	this.width = 100;
	this.height = 100;

	this.canvas = canvas;
	this.context = canvas.getContext('2d');

	//I.sprite = new Sprite('greypeg', new ImagePainter('./images/LB_gray.png'));

	//Color Sprites
	//I.gray = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
	this.paletteColorArray = []


	// I.update = function() {
  //
	// }

	this.loadPaletteColors = function() {
		// for(var i = 1; i <= 30; i++) {
		// 	this.paletteColorArray.push(new Sprite('LB_' + i, new ImagePainter('./images/LB_'+ i +'.png')));
		// }
	}

	this.draw = function() {
    this.context.save();
    this.context.beginPath();
    this.context.arc(this.x, this.y, 25, 0, 2 * Math.PI, false);
    this.context.closePath();
    this.context.fillStyle = 'black';
    this.context.fill();
    this.context.restore();


		// this.context.save();
    //     this.sprite.width = this.width;
    //     this.sprite.height = this.height;
    //     this.sprite.left = this.x;
    //     this.sprite.top = this.y;
    //     this.sprite.paint(this.context);
    //     this.context.restore();
	}

	this.getSprite = function () {

		if (this.arrayIndex == this.liteBriteArray.length - 1) {
			this.arrayIndex = 0;
		}

		var liteBrite = this.liteBriteArray[this.arrayIndex];
		this.arrayIndex += 1;

		return liteBrite;
	}



	return this;
}
