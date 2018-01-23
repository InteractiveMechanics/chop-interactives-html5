function PaletteColor(name, color, file, x, y, r, canvas) {

	this.x = x;
	this.y = y;
	this.r = r;
	this.isHover = false;

	this.arrayIndex = 0;

	this.width = r*2;
	this.height = this.width;

	this.canvas = canvas;
	this.context = canvas.getContext('2d');

  this.name = name;
  this.file = file;
  this.colorRGBA = color;

  this.sprite = new Sprite(name, new ImagePainter(file + '.png'));
  this.spriteHover = new Sprite(name + '-hover', new ImagePainter(file + '-hover.png'));



  this.draw = function () {
      this.context.save();
      if (!this.isHover) {
          this.sprite.width = this.width;
          this.sprite.height = this.height;
          this.sprite.left = this.x - (this.width / 2);
          this.sprite.top = this.y - (this.height / 2);
          this.sprite.paint(this.context);
      } else {
          this.spriteHover.width = this.width;
          this.spriteHover.height = this.height;
          this.spriteHover.left = this.x - (this.width / 2);
          this.spriteHover.top = this.y - (this.height / 2);
          this.spriteHover.paint(this.context);
      }
      this.context.restore();

	}

	return this;
}
