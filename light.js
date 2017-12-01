function Light(color, x, y) {
  this.x = x;
  this.y = y;
  this.colorRGBA = color;
  this.canvas = mainCanvas;
	this.context = mainCanvas.getContext('2d');
}
