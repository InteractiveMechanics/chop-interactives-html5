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

        { left: 0, top: 0, width: 100, height: 100 },
        { left: 100, top: 0, width: 100, height: 100 },
        { left: 200, top: 0, width: 100, height: 100 },
        { left: 300, top: 0, width: 100, height: 100 },
        { left: 400, top: 0, width: 100, height: 100 },
        { left: 500, top: 0, width: 100, height: 100 },
        { left: 600, top: 0, width: 100, height: 100 },
        { left: 700, top: 0, width: 100, height: 100 },
        { left: 800, top: 0, width: 100, height: 100 },
        { left: 900, top: 0, width: 100, height: 100 },
        { left: 1000, top: 0, width: 100, height: 100 },
        { left: 1100, top: 0, width: 100, height: 100 },
        { left: 1200, top: 0, width: 100, height: 100 },
        { left: 1300, top: 0, width: 100, height: 100 },
        { left: 1400, top: 0, width: 100, height: 100 },
        { left: 1500, top: 0, width: 100, height: 100 },
        { left: 1600, top: 0, width: 100, height: 100 },
        { left: 1700, top: 0, width: 100, height: 100 },
        { left: 1800, top: 0, width: 100, height: 100 },
        { left: 1900, top: 0, width: 100, height: 100 },



        { left: 0, top: 100, width: 100, height: 100 },
        { left: 100, top: 100, width: 100, height: 100 },
        { left: 200, top: 100, width: 100, height: 100 },
        { left: 300, top: 100, width: 100, height: 100 },
        { left: 400, top: 100, width: 100, height: 100 },
        { left: 500, top: 100, width: 100, height: 100 },
        { left: 600, top: 100, width: 100, height: 100 },
        { left: 700, top: 100, width: 100, height: 100 },
        { left: 800, top: 100, width: 100, height: 100 },
        { left: 900, top: 100, width: 100, height: 100 },
        { left: 1000, top: 100, width: 100, height: 100 },
        { left: 1100, top: 100, width: 100, height: 100 },
        { left: 1200, top: 100, width: 100, height: 100 },
        { left: 1300, top: 100, width: 100, height: 100 },
        { left: 1400, top: 100, width: 100, height: 100 },
        { left: 1500, top: 100, width: 100, height: 100 },
        { left: 1600, top: 100, width: 100, height: 100 },
        { left: 1700, top: 100, width: 100, height: 100 },
        { left: 1800, top: 100, width: 100, height: 100 },
        { left: 1900, top: 100, width: 100, height: 100 },

        { left: 0, top: 200, width: 100, height: 100 },
        { left: 100, top: 200, width: 100, height: 100 },
        { left: 200, top: 200, width: 100, height: 100 },
        { left: 300, top: 200, width: 100, height: 100 },
        { left: 400, top: 200, width: 100, height: 100 },
        { left: 500, top: 200, width: 100, height: 100 },
        { left: 600, top: 200, width: 100, height: 100 },
        { left: 700, top: 200, width: 100, height: 100 },
        { left: 800, top: 200, width: 100, height: 100 },
        { left: 900, top: 200, width: 100, height: 100 },
        { left: 1000, top: 200, width: 100, height: 100 },
        { left: 1100, top: 200, width: 100, height: 100 },
        { left: 1200, top: 200, width: 100, height: 100 },
        { left: 1300, top: 200, width: 100, height: 100 },
        { left: 1400, top: 200, width: 100, height: 100 },
        { left: 1500, top: 200, width: 100, height: 100 },
        { left: 1600, top: 200, width: 100, height: 100 },
        { left: 1700, top: 200, width: 100, height: 100 },
        { left: 1800, top: 200, width: 100, height: 100 },
        { left: 1900, top: 200, width: 100, height: 100 },

        { left: 0, top: 300, width: 100, height: 100 },
        { left: 100, top: 300, width: 100, height: 100 },
        { left: 200, top: 300, width: 100, height: 100 },
        { left: 300, top: 300, width: 100, height: 100 },
        { left: 400, top: 300, width: 100, height: 100 },
        { left: 500, top: 300, width: 100, height: 100 },
        { left: 600, top: 300, width: 100, height: 100 },
        { left: 700, top: 300, width: 100, height: 100 },
        { left: 800, top: 300, width: 100, height: 100 },
        { left: 900, top: 300, width: 100, height: 100 },
        { left: 1000, top: 300, width: 100, height: 100 },
        { left: 1100, top: 300, width: 100, height: 100 },
        { left: 1200, top: 300, width: 100, height: 100 },
        { left: 1300, top: 300, width: 100, height: 100 },
        { left: 1400, top: 300, width: 100, height: 100 },
        { left: 1500, top: 300, width: 100, height: 100 },
        { left: 1600, top: 300, width: 100, height: 100 },
        { left: 1700, top: 300, width: 100, height: 100 },
        { left: 1800, top: 300, width: 100, height: 100 },
        { left: 1900, top: 300, width: 100, height: 100 },

        { left: 0, top: 400, width: 100, height: 100 },
        { left: 100, top: 400, width: 100, height: 100 },
        { left: 200, top: 400, width: 100, height: 100 },
        { left: 300, top: 400, width: 100, height: 100 },
        { left: 400, top: 400, width: 100, height: 100 },
        { left: 500, top: 400, width: 100, height: 100 },
        { left: 600, top: 400, width: 100, height: 100 },
        { left: 700, top: 400, width: 100, height: 100 },
        { left: 800, top: 400, width: 100, height: 100 },
        { left: 900, top: 400, width: 100, height: 100 },
        { left: 1000, top: 400, width: 100, height: 100 },
        { left: 1100, top: 400, width: 100, height: 100 },
        { left: 1200, top: 400, width: 100, height: 100 },
        { left: 1300, top: 400, width: 100, height: 100 },
        { left: 1400, top: 400, width: 100, height: 100 },
        { left: 1500, top: 400, width: 100, height: 100 },
        { left: 1600, top: 400, width: 100, height: 100 },
        { left: 1700, top: 400, width: 100, height: 100 },
        { left: 1800, top: 400, width: 100, height: 100 },
        { left: 1900, top: 400, width: 100, height: 100 },

        { left: 0, top: 500, width: 100, height: 100 },
        { left: 100, top: 500, width: 100, height: 100 },
        { left: 200, top: 500, width: 100, height: 100 },
        { left: 300, top: 500, width: 100, height: 100 },
        { left: 400, top: 500, width: 100, height: 100 },
        { left: 500, top: 500, width: 100, height: 100 },
        { left: 600, top: 500, width: 100, height: 100 },
       
    ];
    I.spritesheet = new Image();
    I.sprite = new Sprite('instructions', new SpriteSheetPainter('images/instructions.png', I.cells));

    I.draw = function (context) {

        context.clearRect(0, 0, 1920, 1080);

        if (this.count >= 107) {
            this.count = 0;
            this.paused = true;
            this.sprite = new Sprite('instructions', new SpriteSheetPainter('images/instructions.png', I.cells));
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