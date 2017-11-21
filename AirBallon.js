function AirBallon(x, y, balllon_index, canvas) {
	var I = I || {};

	I.x = x;
	I.y = y;
	I.letter = 'D';

	I.arrayIndex = 0;

	I.width = 80;
	I.height = 106;

	I.canvas = canvas;
	I.context = canvas.getContext('2d');

	I.sprite = new Sprite('cloud-lg', new ImagePainter('./assets/air-ballon.png'));
	
	//Color Sprites
	I.ribbonArray = [
		new Ribbon('./assets/ribbon-D-blue.png', 72, 85),
		new Ribbon('./assets/ribbon-D-green.png', 72, 85),
		new Ribbon('./assets/ribbon-D-orange.png', 72, 85),
		new Ribbon('./assets/ribbon-D-teal.png', 72, 85),
		new Ribbon('./assets/ribbon-D-yellow.png', 72, 85)
	];


	I.update = function() {
		
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
	

	return I;
}