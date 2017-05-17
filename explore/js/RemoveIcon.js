function RemoveIcon(x, y, canvas) {
    var I = I || {};

    I.x = x;
    I.y = y;

    I.arrayIndex = 0;

    I.width = 100;
    I.height = 100;

    I.canvas = canvas;
    I.context = canvas.getContext('2d');

    I.sprite = new Sprite('remove-icon', new ImagePainter('./images/LB_close-btn.png'));

    I.update = function () {

    }

    I.draw = function () {

        this.context.save();
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;
        this.sprite.paint(this.context);
        this.context.restore();
    }

    I.getSprite = function () {

        if (this.arrayIndex == this.liteBriteArray.length - 1) {
            this.arrayIndex = 0;
        }

        var liteBrite = this.liteBriteArray[this.arrayIndex];
        this.arrayIndex += 1;

        return liteBrite;
    }



    return I;
}