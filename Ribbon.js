function Ribbon(ribbon, width, height) {
	var I = I || {};

	I.width = width;
	I.height = height;  

	I.sprite = new Sprite('cloud-lg', new ImagePainter(ribbon));
	I.active = false;

	I.update = function() {
		
	}

	I.draw = function(context, x, y) {

		if(this.active) {
			this.sprite.width = this.width;
	        this.sprite.height = this.height;
	        this.sprite.left = x;
	        this.sprite.top = y;
	        this.sprite.paint(context);
		}

	}

	I.activate = function() {
		this.active = true;
		var that = this;

		setTimeout(function() {
			that.active = false;
		}, 5000);
	}
	
	return I;
}