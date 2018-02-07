function Feet(canvas) {
	var I = I || {};

    I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.x = 0;
	I.y = 750;
	I.height = 253;
	I.width = 652;

	I.animating = false;
	I.animationFrame = 0;
	I.lastFrame = 0;
	I.animatingDirection = 'left';
    //make an animation context
	I.tcanvas = document.createElement('canvas');
	I.tctx = I.tcanvas.getContext('2d');
	I.tcanvas.height = I.height;
	I.tcanvas.width = I.width;

	I.totalFrames = 10;

    

    I.randomStart = function() {
        return Math.floor(Math.random() * (this.totalFrames - 1) + 0);
    }
	I.frame = I.randomStart();

	I.cells = [
		{left: 0, top: 0, width: 652, height: 253},
		{left: 652, top: 0, width: 652, height: 253},
		{left: 1304, top: 0, width: 652, height: 253},
		{left: 1956, top: 0, width: 652, height: 253},
		{left: 2608, top: 0, width: 652, height: 253},
		{left: 3260, top: 0, width: 652, height: 253},
		{left: 3912, top: 0, width: 652, height: 253},
		{left: 4564, top: 0, width: 652, height: 253},
		{left: 5216, top: 0, width: 652, height: 253},
		{left: 5868, top: 0, width: 652, height: 253}
	];

	I.sprite = new Sprite('feet', new SpriteSheetPainter('./images/feet.png', I.cells));

	I.draw = function () {
	    this.context.drawImage(this.tcanvas, this.x, this.y);
        
	}

	I.update = function() {
	    
	    this.tctx.clearRect(0, 0, this.tcanvas.width, this.tcanvas.height);
	    if (this.animating) {
	        console.log(this.animatingDirection);
	        if (this.animationFrame < this.width) {
	            this.animationFrame += 82;
	            if (this.animatingDirection == 'left') {
	                //draw last frame
	                this.sprite.painter.cellIndex = this.lastFrame;
	                this.tctx.save();
	                this.sprite.width = this.width;
	                this.sprite.height = this.height;
	                this.sprite.left = 0 + this.animationFrame;
	                this.sprite.top = 0;
	                this.sprite.paint(this.tctx);
	                this.tctx.restore();
	                //draw new frame
	                this.sprite.painter.cellIndex = this.frame;
	                this.tctx.save();
	                this.sprite.width = this.width;
	                this.sprite.height = this.height;
	                this.sprite.left = (-this.width) + this.animationFrame;
	                this.sprite.top = 0;
	                this.sprite.paint(this.tctx);
	                this.tctx.restore();
	            }
	            if (this.animatingDirection == 'right') {
	                //draw last frame
	                this.sprite.painter.cellIndex = this.lastFrame;
	                this.tctx.save();
	                this.sprite.width = this.width;
	                this.sprite.height = this.height;
	                this.sprite.left = 0 - this.animationFrame;
	                this.sprite.top = 0;
	                this.sprite.paint(this.tctx);
	                this.tctx.restore();
	                //draw new frame
	                this.sprite.painter.cellIndex = this.frame;
	                this.tctx.save();
	                this.sprite.width = this.width;
	                this.sprite.height = this.height;
	                this.sprite.left = (this.width) - this.animationFrame;
	                this.sprite.top = 0;
	                this.sprite.paint(this.tctx);
	                this.tctx.restore();
	            }
	        }
	        
	        else {
	            this.animating = false;
	            this.animationFrame = 0;
	        }
	    }
	    else {
	        this.tctx.save();
	        this.sprite.width = this.width;
	        this.sprite.height = this.height;
	        this.sprite.left = 0;
	        this.sprite.top = 0;
	        this.sprite.paint(this.tctx);
	        this.tctx.restore();
	    }
	    
	}

    I.change = function(direction) {
        if (direction == 'left') {
            this.lastFrame = this.frame;
            this.animating = true;
            this.animatingDirection = 'left';
            if (this.frame == 0) {
                this.frame = this.totalFrames - 1;
            } else {
                this.frame--;
            }
        } else if (direction == 'right') {
            this.lastFrame = this.frame;
            this.animating = true;
            this.animatingDirection = 'right';
            if (this.frame == this.totalFrames - 1) {
                this.frame = 0;
            } else {
                this.frame++;
            }
        }
    }

	return I;

}