function AirBallon(x, y, balllon_index, canvas, Color) {
	var I = I || {};

	I.x = x;
	I.y = y;
	I.letter = 'D';
	I.speed = 1;
	I.isActive = false;

	I.arrayIndex = 0;

	I.width = 125;
	I.height = 170;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.sprite = new Sprite('ballon', new ImagePainter('./resources/balloon-' + Color + '.png'));
	I.basket = new Sprite('basket', new ImagePainter('./resources/basket-01.png'));
	I.fire = new Fire(canvas, x, y);
	
	I.hasSpeedBoost = false;
	//Color Sprites
	I.ribbonArray = [
		new Ribbon('./resources/ribbon-blue.png', 124, 150),
		new Ribbon('./resources/ribbon-green.png', 134, 160),
		new Ribbon('./resources/ribbon-orange.png', 134, 160),
		new Ribbon('./resources/ribbon-teal.png', 134, 160),
		new Ribbon('./resources/ribbon-yellow.png', 134, 160)
	];

	I.basketArray = [
		new Sprite('basket', new ImagePainter('./resources/basket-01.png')),
		new Sprite('basket', new ImagePainter('./resources/basket-02.png')),
		new Sprite('basket', new ImagePainter('./resources/basket-03.png')),
		new Sprite('basket', new ImagePainter('./resources/basket-04.png')),
	];


	I.update = function() {
	    this.isActive = false;
	    if (this.hasSpeedBoost) {
	        this.fire.update(this.x,this.y);
	    }
	}

	I.draw = function() {

		var that = this;

		this.context.save();
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;
        this.sprite.paint(this.context);

        this.ribbonArray.forEach(function(ribbon){
			ribbon.draw(that.context, that.x, that.y);	
		});

        if (this.hasSpeedBoost) {
            this.fire.draw();
        }

		//basket
		this.basket.width = this.width;
        this.basket.height = this.height;
        this.basket.left = this.x;
        this.basket.top = this.y;
        this.basket.paint(this.context);

        this.context.restore();
	}

	I.addRibbon = function() {
		for(var i = 0; i < this.ribbonArray.length; i++) {
			if(!this.ribbonArray[i].active) {
				this.ribbonArray[i].activate();
				break;
			}
		}
	}

	I.changeBaskets = function() {
		this.basket = this.basketArray[Math.floor(Math.random() * this.basketArray.length)];
	}	

	I.getSpeed = function() {
		return this.speed * .025;
	}

	I.setSpeedBoost = function() {
		this.hasSpeedBoost = true;
		this.speed = 2.5;
		var that = this;
		console.log('speedboost');
		
		setTimeout(function () {
		    that.hasSpeedBoost = false;
			that.speed = 1;
		}, 3000);
	}
	

	return I;
}