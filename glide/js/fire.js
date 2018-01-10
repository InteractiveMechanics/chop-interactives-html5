function Fire(canvas,x,y) {
    var I = I || {};

    I.canvas = canvas;
    I.context = canvas.getContext('2d');

    I.width = 125;
    I.height = 170;
    I.left = x;
    I.top = y;

    I.totalFrames = 7;

    I.frame = 0;

    I.cells = [
		{ left: 0, top: 0, width: 125, height: 170 },
		{ left: 125, top: 0, width: 125, height: 170 },
		{ left: 250, top: 0, width: 125, height: 170 },
		{ left: 375, top: 0, width: 125, height: 170 },
		{ left: 500, top: 0, width: 125, height: 170 },
		{ left: 625, top: 0, width: 125, height: 170 },
        { left: 750, top: 0, width: 125, height: 170 },
    ];

    I.sprite = new Sprite('fire', new SpriteSheetPainter('./images/fire.png', I.cells));

    I.draw = function () {
        this.context.save();
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.left;
        this.sprite.top = this.top;
        this.sprite.paint(this.context);
        this.context.restore();
    }

    I.update = function (x, y) {
        this.left = x;
        this.top = y;
        this.sprite.painter.cellIndex = this.frame;
        if (this.frame < this.totalFrames -1) {
            this.frame++;
        }
        else {
            this.frame = 0;
        }
    }

    return I;

}