function Balloon(balloon, width, height) {
	var I = I || {};

	I.width = width;
	I.height = height;

	I.sprite = new Sprite('anon-blloon', new ImagePainter(balloon));
	//I.active = false;

	I.update = function() {
		
	}

	I.widthMultiplier = function (multiplier) {
	    this.width = this.width * multiplier;
	}

	I.draw = function(context, x, y) {

			this.sprite.width = this.width;
	        this.sprite.height = this.height;
	        this.sprite.left = x;
	        this.sprite.top = y;
	        this.sprite.paint(context);

	}

	//I.activate = function() {
	//	this.active = true;
	//	var that = this;

	//	setTimeout(function() {
	//		that.active = false;
	//	}, this.ribbonTimer);
	//}
	
	return I;
}