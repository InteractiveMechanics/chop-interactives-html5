function Cloud(I) {
	I = I || {};

	I.x = 100;
	I.y = 100;

	I.width = cloud_canvas.width;
	I.height = cloud_canvas.height;

	I.update = function() {
		
	};

	I.sprite = Sprite("clouds_background");
	I.draw = function() {
		
	}

	return I;
}