function Hero(canvas) {
	var I = I || {};

    I.canvas = canvas;
    I.context = canvas.getContext('2d');
    
	I.x = 0;
	I.y = 0;
	I.width = 650;
	I.height = 1080;

	I.isActive = false;

	I.curtains = new Sprite('curtains', new ImagePainter('./images/curtains.png'));
	I.spotlight = new Sprite('spotlight', new ImagePainter('./images/spotlight.png'));
	I.blankFace = new Sprite('blankFace', new ImagePainter('./images/blankFace.png'));


	I.feet = new Feet(canvas);
    I.body = new Body(canvas);
    I.face = new Face(canvas);
    I.hat = new Hat(canvas);
    I.mainCurtain = new MainCurtain(canvas);


    I.arrows = [
        new Arrow(canvas, I.hat, 20, 200, 'left'),
        new Arrow(canvas, I.hat, 520, 210, 'right'),
        new Arrow(canvas, I.face, 20, 400, 'left'),
        new Arrow(canvas, I.face, 520, 410, 'right'),
        new Arrow(canvas, I.body, 20, 600, 'left'),
        new Arrow(canvas, I.body, 520, 610, 'right'),
        new Arrow(canvas, I.feet, 20, 800, 'left'),
        new Arrow(canvas, I.feet, 520, 810, 'right'),
    ];

	I.draw = function() {
		if (this.isActive){
            this.spotlight.width = 424.5;
            this.spotlight.height = 978.5;
            this.spotlight.left = 112.75;
            this.spotlight.top = 50;
            this.spotlight.paint(this.context);

			this.feet.draw();
			this.body.draw();
			this.blankFace.width = 652;
			this.blankFace.height = 431;
			this.blankFace.left = 0;
			this.blankFace.top = 230;
			this.blankFace.paint(this.context);
            this.face.draw();

            this.hat.draw();
            
		}
		this.mainCurtain.draw();
        this.curtains.width = 660;
        this.curtains.height = 1060;
        this.curtains.left = 0;
        this.curtains.top = 0;
        this.curtains.paint(this.context);

        if (this.isActive){
            this.arrows.forEach(function(item, index) {
                item.draw();
            });
            this.mainCurtain.change("up");
        } else {
            this.mainCurtain.change("down");
        }
	}

	I.update = function() {
        this.feet.update();
        this.body.update();
        this.face.update();
        this.hat.update();
        this.mainCurtain.update();
        this.isActive = false;
	}

	I.reset = function() {

	}

	return I;
}
