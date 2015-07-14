function Penny(I) {
    I = I || {};

    I.x = randomInRange(1900, 20);
    I.y = randomInRange(1060, 20);

    I.width = 80;
    I.height = 80;

    I.hasBeenHit = false;
    I.loadedAlphaImage = false;
    I.isActive = false;
    I.timeoutSet = false

    I.update = function () {
        if (this.hasBeenHit) {
            if (!this.timeoutSet) {
                var that = this;
                setTimeout(function () {
                    that.isActive = true;
                }, 5000);

                this.timeoutSet = true;
            }
        }
    };

    I.sprite = new Sprite('coin', new ImagePainter('images/coin@2x.png'));
    I.draw = function (context) {
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;

        context.save();
        if (this.hasBeenHit) {
            context.globalAlpha = 0.25;
        }
        this.sprite.paint(context);
        context.restore();
    }
    return I;
}