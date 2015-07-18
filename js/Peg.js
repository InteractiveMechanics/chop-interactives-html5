function Peg(x, y, canvas, pegfile, index, specialfile) {
	var I = I || {};

	I.x = x;
	I.y = y;
	I.pegIndex = index;
	I.width = 120;
	I.height = 120;

	I.player_assigned = false;
	I.activated = false;
	I.currentlyActive = false;
	I.showSpecialPeg = false;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.sprite = Sprite(pegfile);
	I.splatter_sprite = null;
	I.gray_sprite = Sprite(pegfile);
	I.special_sprite = Sprite(specialfile);

	I.update = function() {
		
	}

	I.playerHasEntered = function(playerNumber) {
		var filename = "pegs/p" + playerNumber + "/P" + playerNumber + "_" + this.pegIndex;
		this.sprite = Sprite(filename);
	}

	I.draw = function() {

		if(this.player_assigned) {
			if(!this.activated) {
				if(!this.showSpecialPeg) {
					this.sprite.draw(this.context, this.x, this.y, null, null, this.width, this.height);
				} else {
					this.special_sprite.draw(this.context, this.x, this.y, null, null, this.width, this.height);
				}
			} else {
				if(this.splatter_sprite) {
					this.splatter_sprite.draw(this.context, this.x, this.y, null, null, this.width, this.height);
				}
			}
		} else {
			this.gray_sprite.draw(this.context, this.x, this.y, null, null, this.width, this.height);
		}
	}

	return I;
}