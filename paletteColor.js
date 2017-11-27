function PaletteColor(name, color, file, x, y, r) {

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
  this.colorRGBA = color;

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
