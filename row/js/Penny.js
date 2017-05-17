function Penny(I) {
    I = I || {};

    I.x = randomInRange(1800, 20);
    I.y = randomInRange(960, 20);

    I.width = 80;
    I.height = 80;
    I.isGolden = false;

    I.hasBeenHit = false;
    I.loadedAlphaImage = false;
    I.isActive = false;
    I.timeoutSet = false;
    I.paused = true;

    I.lastAdvance = 0;
    I.frames = 0;
    I.totalFrames = 12;

    I.cells = [
      { left: 0,   top: 0, width: 80, height: 80 },
      { left: 80,  top: 0, width: 80, height: 80 },
      { left: 160, top: 0, width: 80, height: 80 },
      { left: 240, top: 0, width: 80, height: 80 },
      { left: 320, top: 0, width: 80, height: 80 },
      { left: 400, top: 0, width: 80, height: 80 },
      { left: 480, top: 0, width: 80, height: 80 },
      { left: 560, top: 0, width: 80, height: 80 },
      { left: 640, top: 0, width: 80, height: 80 },
      { left: 720, top: 0, width: 80, height: 80 },
      { left: 800, top: 0, width: 80, height: 80 },
      { left: 880, top: 0, width: 80, height: 80 },
      { left: 960, top: 0, width: 80, height: 80 },
    ];

    I.goldenCells = [
      { left: 0, top: 0, width: 120, height: 120 },
      { left: 120, top: 0, width: 120, height: 120 },
      { left: 240, top: 0, width: 120, height: 120 },
      { left: 360, top: 0, width: 120, height: 120 },
      { left: 480, top: 0, width: 120, height: 120 },
      { left: 600, top: 0, width: 120, height: 120 },
      { left: 720, top: 0, width: 120, height: 120 },
      { left: 840, top: 0, width: 120, height: 120 },
      { left: 960, top: 0, width: 120, height: 120 },
      { left: 1080, top: 0, width: 120, height: 120 },
      { left: 1200, top: 0, width: 120, height: 120 },
      { left: 1320, top: 0, width: 120, height: 120 },
      { left: 1440, top: 0, width: 120, height: 120 },
    ];

    I.spritesheet = new Image();

    I.sprite = new Sprite('coin', new SpriteSheetPainter('images/coin_sprite@2x.png', I.cells));
    I.goldenSprite = new Sprite('coin', new SpriteSheetPainter('images/gold_coin_sprite@2x.png', I.goldenCells));

    I.draw = function (context) {

        if (this.isGolden) {
            var that = this;

            this.goldenSprite.width = 120;
            this.goldenSprite.height = 120;
            this.goldenSprite.left = this.x;
            this.goldenSprite.top = this.y;

            context.save();
            if (this.hasBeenHit) {
                if (!this.paused) {
                    var time = new Date();
                    var milli = time.getTime();
                    if (milli - that.lastAdvance > 100) {
                        that.goldenSprite.painter.advance();
                        that.lastAdvance = milli;
                        that.frames++;
                    }
                    if (that.frames == that.totalFrames - 1) {
                        that.paused = true;
                    }
                }
            }
            this.goldenSprite.paint(context);
            context.restore();
        } else {
            var that = this;

            this.sprite.width = this.width;
            this.sprite.height = this.height;
            this.sprite.left = this.x;
            this.sprite.top = this.y;

            context.save();
            if (this.hasBeenHit) {
                if (!this.paused) {
                    var time = new Date();
                    var milli = time.getTime();
                    if (milli - that.lastAdvance > 100) {
                        that.sprite.painter.advance();
                        that.lastAdvance = milli;
                        that.frames++;
                    }
                    if (that.frames == that.totalFrames - 1) {
                        that.paused = true;
                    }
                }
            }
            this.sprite.paint(context);
            context.restore();
        }
        
    }
    return I;
}