function Peg(x, y, canvas, pegfile) {
	var I = I || {};

	I.x = x;
	I.y = y;
	I.activated = false;
	I.currentlyActive = false;
	I.width = 120;
	I.height = 120;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.active_sprite = Sprite(pegfile);
	I.faded_sprite = Sprite(pegfile + "-faded");

	I.update = function() {
		
	}

	I.draw = function() {
		if(this.activated) {
			this.active_sprite.draw(this.context, this.x, this.y, null, null, this.width, this.height);
		} else {
			this.faded_sprite.draw(this.context, this.x, this.y, null, null, this.width, this.height);
		}
	}

	return I;
}