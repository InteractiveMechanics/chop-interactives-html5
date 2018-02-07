function AirBallon(x, y, balllon_index, canvas, color) {
	var I = I || {};

	I.x = x;
	I.y = y;
	I.index = balllon_index;
	I.letter = 'D';
	I.speed = 1;
	I.isActive = false;

	I.arrayIndex = 0;

	I.width = 163;
	I.height = 234;
	I.colX = x;
	I.colY = y;
	I.collisionWidthInit = 140;
	I.collisionHeightInit = 234;
	I.collisionWidth = 140;
	I.collisionHeight = 234;
	I.growOffsetX = 0;
	I.growOffsetY = 0;
	I.growScale = 1;
	I.penaltyX = 0;
	I.balloonCollided = false;
	I.collidedX = 0;
	I.collidedY = 0;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.fire = new Fire(canvas, x, y);
	
	I.hasSpeedBoost = true;
	I.isAttacked = false;
	//Color Sprites
	I.ribbonArray = [
		new Ribbon('./images/ribbon-blue.png', 163, 234),
		new Ribbon('./images/ribbon-green.png', 163, 234),
		new Ribbon('./images/ribbon-orange.png', 163, 234),
		new Ribbon('./images/ribbon-teal.png', 163, 234),
		new Ribbon('./images/ribbon-yellow.png', 163, 234)
	];

	I.balloonArray = [
		new Balloon('./images/balloon-' + color +'.png', 163, 234),
		new Balloon('./images/balloon-apple.png', 163, 234),
		new Balloon('./images/balloon-soap.png', 163, 234),
        new Balloon('./images/balloon-planet.png', 163, 234)
	];

	I.basketArray = [
		new Basket('./images/basket-01.png', 163, 234),
        new Basket('./images/basket-02.png', 163, 234),
        new Basket('./images/basket-03.png', 163, 234),
        new Basket('./images/basket-04.png', 163, 234),
        new Basket('./images/basket-shoe.png', 163, 234),
        new Basket('./images/basket-duck.png', 163, 234),
        new Basket('./images/basket-butterfly.png', 163, 234),
	];

	I.basket = I.basketArray[0];
    
	I.balloon = I.balloonArray[0];


	I.update = function () {
	    var that = this;
	    this.isActive = false;
	    //if (this.hasSpeedBoost) {
	    //    this.fire.update(this.x, this.y);
	    //}
	    if (this.shrinking && this.growScale > 1) {
	        this.growScale -= 0.01;
	    }
	    else {
	        this.shrinking = false;
	    }

	    if (this.growing1 && this.growScale < 1.25) {
	        this.growScale += 0.01;
	    }
	    else if (this.growing2 && this.growScale < 1.5) {
	        this.growScale += 0.01;
	    }

	    if (this.shrinking && this.growScale > 1) {
	        this.growScale -= 0.01;
	    }
	    
	    this.ribbonArray.forEach(function (ribbon) {
	        ribbon.width = (that.width * that.growScale)
	        ribbon.height = (that.height * that.growScale);
	    });

	    this.balloonArray.forEach(function (balloon) {
	        balloon.width = (that.width * that.growScale)
	        balloon.height = (that.height * that.growScale);
	    });

	    this.collisionWidth = this.collisionWidthInit * this.growScale;
	    this.collisionHeight = this.collisionHeightInit * this.growScale;

	    this.growOffsetX = (this.width/2) - ((this.width*this.growScale) / 2);
	    //height could be different, adding a slight modifier
	    this.growOffsetY = (this.height / 2) - ((this.height * this.growScale) * 0.54);
	    this.colX = this.x + this.growOffsetX;
	    this.colY = this.y + this.growOffsetY;
	}

	I.draw = function() {

		var that = this;

		this.context.save();
		this.balloon.draw(that.context, this.x + this.growOffsetX, this.y + this.growOffsetY);
		this.ribbonArray.forEach(function (ribbon) {
		    ribbon.draw(that.context, that.x + that.growOffsetX, that.y + that.growOffsetY);
        });


        if (this.hasSpeedBoost) {
            this.fire.update(this.x+18, this.y);
            this.fire.draw();
        }

		//basket
        this.basket.draw(this.context, that.x, that.y);

        this.context.restore();
	}

	I.addRibbon = function () {
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

	I.changeBalloons = function () {
        //first 3 balloons are default balloons
	    this.balloon = this.balloonArray[Math.floor(Math.random() * this.balloonArray.length)];
	}

	I.growBalloon = function () {
	    console.log('growing');
	    if (!this.growing1) {
	        this.growing1 = true;
	    }
	    else if (this.growScale < 1.5) {
	        this.growing2 = true;
	    }

	}


	I.balloonCollision = function (penalty) {
	    console.log('balloon collided');
	    var that = this;
	    this.balloonCollided = true;
	    this.collidedX = this.x + penalty;
	    this.collidedY = this.y;
	    this.speed = 5;
	    setTimeout(function () {
	        console.log('reset collision');
	        that.balloonCollided = false;
	        that.speed = 1;
	    }, 750);
	}

	I.alienAttack = function () {
	    this.isAttacked = true;
	    this.attackedX = this.x;
	    this.speed = 0.5;
	    var that = this;
	    this.shrinking = true;
	    this.growing1 = false;
	    this.growing2 = false;
	    console.log('alien attack');

	    setTimeout(function () {
            that.shrinking = false
	        that.isAttacked = false;
	        that.speed = 1.5;
	        that.basket = that.basketArray[0];
	        that.balloon = that.balloonArray[0];
	        that.ribbonArray.forEach(function (ribbon) {
	            ribbon.active = false;
	        });
	    }, 2000);
	}
	

	return I;
}