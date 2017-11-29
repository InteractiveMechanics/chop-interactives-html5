function StartButton(name, file, x, y, r) {

	this.x = x;
	this.y = y;
  this.r = r;

	this.arrayIndex = 0;

	this.width = r*2;
	this.height = this.width;

	this.canvas = mainCanvas;
	this.context = mainCanvas.getContext('2d');

  this.file = file;

	this.sprite = new Sprite(name, new ImagePainter(file));



	this.draw = function() {
		this.context.save();
    this.sprite.width = this.width;
    this.sprite.height = this.height;
    this.sprite.left = this.x - (this.width/2);
    this.sprite.top = this.y - (this.height/2);
    this.sprite.paint(this.context);
    this.context.restore();
	}

	return this;
}
