function Button(name, file, x, y, r, canvas) {

	this.x = x;
	this.y = y;
  this.r = r;

	this.arrayIndex = 0;

	this.width = r*2;
	this.height = this.width;

	this.canvas = canvas;
	this.context = canvas.getContext('2d');

	this.file = file;
	this.rightHoverArray = [];
	this.leftHoverArray = [];

  this.sprite = new Sprite(name, new ImagePainter(file + '.png'));
  this.spriteHover = new Sprite(name + '-hover', new ImagePainter(file + '-hover.png'));



  this.draw = function () {
      this.context.save();
      if (this.rightHoverArray.indexOf(true) >= 0 || this.leftHoverArray.indexOf(true) >= 0) {
	        this.spriteHover.width = this.width;
	        this.spriteHover.height = this.height;
	        this.spriteHover.left = this.x;
	        this.spriteHover.top = this.y;
	        this.spriteHover.paint(this.context);      
	    } else {
	        this.sprite.width = this.width;
	        this.sprite.height = this.height;
	        this.sprite.left = this.x;
	        this.sprite.top = this.y;
	        this.sprite.paint(this.context);
	    }
	    this.context.restore();
	}

	return this;
}
