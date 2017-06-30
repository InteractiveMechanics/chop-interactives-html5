// TO DO: make this work
function Arrows(I) {
	I = I || {};

	I.x = 0;
	I.y = 0;

	I.isActive = false;
	I.timeoutSet = false;
	I.paused = true;


	

	I.sprite = new Sprite('arrows', new ImagePainter('./images/arrow-L.png'));
	
	I.draw = function(context) {
		var that = this;

		this.sprite.width = this.width;
		this.sprite.height = this.height;
		this.sprite.left = this.x; //this.x
		this.sprite.top = 200; //this.y;

		context.save();


		this.sprite.paint(context);
		context.restore();
	}

	



	return I;

}