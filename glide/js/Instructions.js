function Instructions(I) {
    I = I || {};

    I.x = 0;
    I.y = 0;

    I.width = 0;
    I.height = 0;

    I.timeoutSet = false;
    I.paused = true;
    I.count = 0;

    I.lastAdvance = 0;
    I.cells = [

        { left: 0, top: 0, width: 200, height: 200 },
        { left: 200, top: 0, width: 200, height: 200 },
        { left: 400, top: 0, width: 200, height: 200 },
        { left: 600, top: 0, width: 200, height: 200 },
        { left: 800, top: 0, width: 200, height: 200 },
        { left: 1000, top: 0, width: 200, height: 200 },
        { left: 1200, top: 0, width: 200, height: 200 },
        { left: 1400, top: 0, width: 200, height: 200 },
        { left: 1600, top: 0, width: 200, height: 200 },
        { left: 1800, top: 0, width: 200, height: 200 },



        { left: 0, top: 400, width: 200, height: 200 },
        { left: 200, top: 400, width: 200, height: 200 },
        { left: 400, top: 400, width: 200, height: 200 },
        { left: 600, top: 400, width: 200, height: 200 },
        { left: 800, top: 400, width: 200, height: 200 },
        { left: 1000, top: 400, width: 200, height: 200 },
        { left: 1200, top: 400, width: 200, height: 200 },
        { left: 1400, top: 400, width: 200, height: 200 },
        { left: 1600, top: 400, width: 200, height: 200 },
        { left: 1800, top: 400, width: 200, height: 200 },

        { left: 0, top: 600, width: 200, height: 200 },
        { left: 200, top: 600, width: 200, height: 200 },
        { left: 400, top: 600, width: 200, height: 200 },
        { left: 600, top: 600, width: 200, height: 200 },
        { left: 800, top: 600, width: 200, height: 200 },
        { left: 1000, top: 600, width: 200, height: 200 },
        { left: 1200, top: 600, width: 200, height: 200 },
        { left: 1400, top: 600, width: 200, height: 200 },
        { left: 1600, top: 600, width: 200, height: 200 },
        { left: 1800, top: 600, width: 200, height: 200 },

        { left: 0, top: 800, width: 200, height: 200 },
        { left: 200, top: 800, width: 200, height: 200 },
        { left: 400, top: 800, width: 200, height: 200 },
        { left: 600, top: 800, width: 200, height: 200 },
        { left: 800, top: 800, width: 200, height: 200 },
        { left: 1000, top: 800, width: 200, height: 200 },
        { left: 1200, top: 800, width: 200, height: 200 },
        { left: 1400, top: 800, width: 200, height: 200 },
        { left: 1600, top: 800, width: 200, height: 200 },
        { left: 1800, top: 800, width: 200, height: 200 },

        { left: 0, top: 1000, width: 200, height: 200 },
        { left: 200, top: 1000, width: 200, height: 200 },
        { left: 400, top: 1000, width: 200, height: 200 },
        { left: 600, top: 1000, width: 200, height: 200 },
        { left: 800, top: 1000, width: 200, height: 200 },
        { left: 1000, top: 1000, width: 200, height: 200 },
        { left: 1200, top: 1000, width: 200, height: 200 },
        { left: 1400, top: 1000, width: 200, height: 200 },
        { left: 1600, top: 1000, width: 200, height: 200 },
        { left: 1800, top: 1000, width: 200, height: 200 },

        { left: 0, top: 1200, width: 200, height: 200 },
        { left: 200, top: 1200, width: 200, height: 200 },
        { left: 400, top: 1200, width: 200, height: 200 },
        { left: 600, top: 1200, width: 200, height: 200 },
        { left: 800, top: 1200, width: 200, height: 200 },
        { left: 1000, top: 1200, width: 200, height: 200 },
        { left: 1200, top: 1200, width: 200, height: 200 },
        { left: 1400, top: 1200, width: 200, height: 200 },
        { left: 1600, top: 1200, width: 200, height: 200 },
        { left: 1800, top: 1200, width: 200, height: 200 },

        { left: 0, top: 1400, width: 200, height: 200 },
        { left: 200, top: 1400, width: 200, height: 200 },
        { left: 400, top: 1400, width: 200, height: 200 },
        { left: 600, top: 1400, width: 200, height: 200 },
        { left: 800, top: 1400, width: 200, height: 200 },
        { left: 1000, top: 1400, width: 200, height: 200 },
        { left: 1200, top: 1400, width: 200, height: 200 },
        { left: 1400, top: 1400, width: 200, height: 200 },
    ];
    I.spritesheet = new Image();
    I.sprite = new Sprite('instructions', new SpriteSheetPainter('images/Instructions-Play.png', I.cells));

    I.draw = function (context) {

        context.clearRect(0, 0, 1920, 1080);

        if (this.count >= 68) {
            this.count = 0;
            this.paused = true;
            this.sprite = new Sprite('instructions', new SpriteSheetPainter('images/Instructions-Play.png', I.cells));
        }

        var that = this;

        this.sprite.width = this.cells[0].width;
        this.sprite.height = this.cells[0].height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;

        context.save();
        if (!this.paused) {
            var time = new Date();
            var milli = time.getTime();
            if (milli - that.lastAdvance > 75) {
                that.sprite.painter.advance();
                that.lastAdvance = milli;
                this.count += 1;
            }
        }
        this.sprite.paint(context);
        context.restore();
    }
    return I;
}