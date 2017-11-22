function PaletteColor(name, file, x, y, r) {
	// var I = I || {};

	this.x = x;
	this.y = y;
  this.r = r;

	this.arrayIndex = 0;

	this.width = r*2;
	this.height = this.width;

	this.canvas = uiCanvas;
	this.context = uiCanvas.getContext('2d');

  this.name = name;
  this.file = file;

	this.sprite = new Sprite(name, new ImagePainter(file));

	this.loadPaletteColors = function() {
		// for(var i = 1; i <= 30; i++) {
		// 	this.paletteColorArray.push(new Sprite('LB_' + i, new ImagePainter('./images/LB_'+ i +'.png')));
		// }
	}

	this.draw = function() {

    // this.context.save();
    // this.context.beginPath();
    // this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    // this.context.closePath();
    // this.context.fillStyle = 'black';
    // this.context.fill();
    // this.context.restore();


		this.context.save();
    this.sprite.width = this.width;
    this.sprite.height = this.height;
    this.sprite.left = this.x - (this.width/2);
    this.sprite.top = this.y - (this.height/2);
    this.sprite.paint(this.context);
    this.context.restore();
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
