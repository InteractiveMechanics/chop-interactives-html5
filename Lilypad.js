function HeavyLilyPad(I) {
	I = I || {};

	I.color = '#FF0000';
	I.x = randomInRange();
	I.y = randomInRange();
	I.dx = random_dx_dy();
	I.dy = random_dx_dy();

	I.width = 100;
	I.height = 100;
	I.weight = 10;
	
	I.update = function() {

		if( this.x<0 || this.x>window.innerWidth - 110){
			this.dx = -this.dx
		}

		if( this.y < 0 || this.y > window.innerHeight - 110){
			this.dy = -this.dy;
		}

		this.x += this.dx; 
		this.y += this.dy;
	};

	I.sprite = Sprite("lilypad_2@2x");

	I.draw = function() {
		this.sprite.draw(canvas2, this.x, this.y, null, null, this.width, this.height);
	}

	return I;
}

function LilyPad(I) {
	I = I || {};

	I.color = '#FF0000';
	I.x = randomInRange();
	I.y = randomInRange();
	I.dx = random_dx_dy();
	I.dy = random_dx_dy();

	I.width = 100;
	I.height = 100;
	I.weight = 6;

	I.update = function() {

		if( this.x<0 || this.x>window.innerWidth - 110){
			this.dx = -this.dx
		}

		if( this.y < 0 || this.y > window.innerHeight - 110){
			this.dy = -this.dy;
		}

		this.x += this.dx; 
		this.y += this.dy;
	};

	I.sprite = Sprite("lilypad_1@2x");

	I.draw = function() {
		this.sprite.draw(canvas2, this.x, this.y, null, null, this.width, this.height);
	}

	return I;
}

function Flower(I) {
	I = I || {};

	I.color = '#FF0000';
	I.x = randomInRange();
	I.y = randomInRange();
	I.dx = random_dx_dy();
	I.dy = random_dx_dy();

	I.width = 100;
	I.height = 100;
	I.weight = 3;

	I.update = function() {

		if( this.x<0 || this.x>window.innerWidth - 110){
			this.dx = -this.dx
		}

		if( this.y < 0 || this.y > window.innerHeight - 110){
			this.dy = -this.dy;
		}

		this.x += this.dx; 
		this.y += this.dy;
	};

	I.sprite = Sprite("flower@2x");
	
	I.draw = function() {

		this.sprite.draw(canvas2, this.x, this.y, null, null, this.width, this.height);
	}

	return I;
}