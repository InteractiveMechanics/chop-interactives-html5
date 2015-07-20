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

	I.counter = 0;
	I.color = null;

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

		switch (playerNumber) {
		    case 0:
		        this.color = '#FF0000';
		        break;
		    case 1:
		        this.color = '#29ABE2';
		        break;
		    case 2:
		        this.color = '#FCEE21';
		        break;
		    case 3:
		        this.color = '#00FF00';
		        break;
		    case 4:
		        this.color = '#7D32AC';
		        break;
		    case 5:
		        this.color = '#FFA200';
		        break;
		    default:
		        this.color = null;
		        break;
		}
	}

	I.draw = function() {
		if(this.player_assigned) {
		    if (!this.activated) {
		        if (!this.showSpecialPeg) {
		            this.context.save();
		            this.context.shadowColor = this.color;
		            this.context.shadowBlur = this.counter * 3;
		            this.context.shadowOffsetX = 0;
		            this.context.shadowOffsetY = 0;

		            this.sprite.width = this.width;
		            this.sprite.height = this.height;
		            this.sprite.left = this.x;
		            this.sprite.top = this.y;
		            this.sprite.paint(this.context);
		            this.context.restore();
		        } else {
		            this.context.save();
		            this.context.shadowColor = '#FFF033';
		            this.context.shadowBlur = this.counter * 3;
		            this.context.shadowOffsetX = 0;
		            this.context.shadowOffsetY = 0;

		            this.special_sprite.width = this.width;
		            this.special_sprite.height = this.height;
		            this.special_sprite.left = this.x;
		            this.special_sprite.top = this.y;
		            this.special_sprite.paint(this.context);
		            this.context.restore();
		        }
			} else {
		        if (this.splatter_sprite) {
		            this.splatter_sprite.width = 200;
		            this.splatter_sprite.height = 200;
		            this.splatter_sprite.left = this.x - 40;
		            this.splatter_sprite.top = this.y - 40;
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