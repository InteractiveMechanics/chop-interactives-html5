function Peg(x, y, canvas, pegfile, index, specialfile) {
	var I = I || {};

	I.x = x;
	I.y = y;
	I.pegIndex = index;
	I.activated = false;
	I.currentlyActive = false;
	I.width = 120;
	I.height = 120;

	I.player_assigned = false;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.sprite = new Sprite('peg', new ImagePainter(pegfile));
	I.splatter_sprite = null;
	I.gray_sprite = new Sprite('peg', new ImagePainter(pegfile));
	I.special_sprite = new Sprite('specialpeg', new ImagePainter(specialfile));

	I.update = function() {
		
	}

	I.playerHasEntered = function(playerNumber) {
		var filename = "images/pegs/P" + playerNumber + "/P" + playerNumber + "_" + this.pegIndex + '.png';
		this.sprite = new Sprite('peg', new ImagePainter(filename));
	}

	I.draw = function() {
		if(this.player_assigned) {
		    if (!this.activated) {
		        this.sprite.width = this.width;
		        this.sprite.height = this.height;
		        this.sprite.left = this.x;
		        this.sprite.top = this.y;
				this.sprite.paint(this.context);
			} else {
		        if (this.splatter_sprite) {
		            this.splatter_sprite.width = this.width;
		            this.splatter_sprite.height = this.height;
		            this.splatter_sprite.left = this.x;
		            this.splatter_sprite.top = this.y;
					this.splatter_sprite.paint(this.context);
				}
			}
		} else {
		    this.gray_sprite.width = this.width;
		    this.gray_sprite.height = this.height;
		    this.gray_sprite.left = this.x;
		    this.gray_sprite.top = this.y;
			this.gray_sprite.paint(this.context);
		}
	}

	return I;
}