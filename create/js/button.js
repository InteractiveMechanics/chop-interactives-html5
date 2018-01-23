
function Button(name, file, x, y, canvas) {



		this.x = x;
		this.y = y;
		this.name = name;
		this.file = file;
		this.isHover = false;
        
		this.width = 80;
		this.height = 80;
		this.r = this.width / 2;

		this.canvas = canvas;
		this.context = canvas.getContext('2d');


	  this.sprite = new Sprite(name, new ImagePainter(file + '.png'));
	  this.spriteHover = new Sprite(name + '-hover', new ImagePainter(file + '-hover.png'));



	  this.draw = function () {
	      this.context.save();
	      if (!this.isHover) {
	          this.sprite.width = this.width;
	          this.sprite.height = this.height;
	          this.sprite.left = this.x ;
	          this.sprite.top = this.y ;
	          this.sprite.paint(this.context);
	      } else {
	          this.spriteHover.width = this.width;
	          this.spriteHover.height = this.height;
	          this.spriteHover.left = this.x;
	          this.spriteHover.top = this.y;
	          this.spriteHover.paint(this.context);
	      }
	      this.context.restore();

	  }


		return this;
	}
