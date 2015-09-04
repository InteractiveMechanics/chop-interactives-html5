function Instructions(I) {
    I = I || {};

    I.x = 0;
    I.y = 0;

    I.width = 0;
    I.height = 0;
    
    I.timeoutSet = false;
    I.paused = true;

    I.lastAdvance = 0;
    I.cells = [
        { left: 0,   top: 0, width: 200, height: 200 },
        { left: 200, top: 0, width: 200, height: 200 },
        { left: 400, top: 0, width: 200, height: 200 },
        { left: 600, top: 0, width: 200, height: 200 },
    ];
    I.spritesheet = new Image();
    I.sprite = new Sprite('instructions', new SpriteSheetPainter('images/instructions@2x.png', I.cells));

    I.draw = function (context) {
        var that = this;

        this.sprite.width = this.cells[0].width;
        this.sprite.height = this.cells[0].height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;

        context.save();
        if (!this.paused) {
            var time = new Date();
            var milli = time.getTime();
            if (milli - that.lastAdvance > 500) {
                that.sprite.painter.advance();
                that.lastAdvance = milli;
            }
        }
        this.sprite.paint(context);
        context.restore();
    }
    return I;
}