function Collide(canvas,x,y) {
    var I = I || {};

    I.canvas = canvas;
    I.context = canvas.getContext('2d');

    I.width = 160;
    I.height = 234;
    I.left = x;
    I.top = y;

    I.totalFrames = 11;

    I.frame = 0;

    I.cells = [
		{ left: 0, top: 0, width: 180, height: 234 },
		{ left: 180, top: 0, width: 180, height: 234 },
		{ left: 360, top: 0, width: 180, height: 234 },
		{ left: 540, top: 0, width: 180, height: 234 },
		{ left: 720, top: 0, width: 180, height: 234 },
		{ left: 900, top: 0, width: 180, height: 234 },
        { left: 1080, top: 0, width: 180, height: 234 },
        { left: 1260, top: 0, width: 180, height: 234 },
        { left: 1440, top: 0, width: 180, height: 234 },
        { left: 1620, top: 0, width: 180, height: 234 },
        { left: 1800, top: 0, width: 180, height: 234 },
    ];

    I.sprite = new Sprite('collide', new SpriteSheetPainter('./images/sprite-collide.png', I.cells));

    I.draw = function () {
        if (this.frame < this.totalFrames - 1) {
            this.context.save();
            this.sprite.width = this.width;
            this.sprite.height = this.height;
            this.sprite.left = this.left;
            this.sprite.top = this.top;
            this.sprite.paint(this.context);
            this.context.restore();
        }
        
    }

    I.update = function (x, y) {
        this.left = x;
        this.top = y;
        this.sprite.painter.cellIndex = this.frame;
        if (this.frame < this.totalFrames -1) {
            this.frame++;
        }
        
    }

    return I;

}