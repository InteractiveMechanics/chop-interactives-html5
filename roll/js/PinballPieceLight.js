function PinballPieceLight(name, x, y, width, height, file) {

    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.name = name;

    this.activateLights = false;

    this.loadedAlphaImage = false;
    this.isActive = false;
    this.timeoutSet = false;
    this.paused = true;

    this.lastAdvance = 0;
    this.frames = 0;
    this.totalFrames = 11;

    this.cells = [
      { left: 0, top: 0, width: 97, height: 97 },
      { left: 97, top: 0, width: 97, height: 97 },
      { left: 0, top: 0, width: 97, height: 97 },
      { left: 97, top: 0, width: 97, height: 97 },
      { left: 0, top: 0, width: 97, height: 97 },
      { left: 97, top: 0, width: 97, height: 97 },
      { left: 0, top: 0, width: 97, height: 97 },
      { left: 97, top: 0, width: 97, height: 97 },
      { left: 0, top: 0, width: 97, height: 97 },
      { left: 97, top: 0, width: 97, height: 97 },
      { left: 0, top: 0, width: 97, height: 97 }
    ];
    
    this.sprite = new Sprite('lights', new SpriteSheetPainter(file + '.png', this.cells));
    this.isHit = false;
    this.pickedUp = false;
    this.playerHoldingPiece = -1;
    this.playerHand = '';

    this.update = function (x, y) {
        
    };

    this.draw = function () {

        var context = document.getElementById('light-canvas').getContext('2d');

        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x - (this.width / 2);
        this.sprite.top = this.y - (this.height / 2);

        context.save();
        if (this.activateLights) {
            if (!this.paused) {
                var time = new Date();
                var milli = time.getTime();
                if (milli - this.lastAdvance > 135) {
                    this.sprite.painter.advance();
                    this.lastAdvance = milli;
                    this.frames++;
                }
                if (this.frames == this.totalFrames - 1) {
                    this.paused = true;
                    this.lastAdvance = 0;
                    this.frames = 0;
                }
            }
        }
        this.sprite.paint(context);
        context.restore();

    }
}