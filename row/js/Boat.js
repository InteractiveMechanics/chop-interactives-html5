function Boat(I) {
    I = I || {};

    I.x = 50;
    I.y = 50;
    I.width = 54;
    I.height = 168;

    I.sprite = new Sprite('boat', {
        paint: function (sprite, context, i) {
            this.image = new Image;
            this.image.src = 'images/P' + i + '_boat@2x.png';
            if (this.image !== undefined) {
                if (!this.image.complete) {
                    this.image.onload = function (e) {
                        sprite.width = this.width;
                        sprite.height = this.height;

                        context.drawImage(this,  // this is image
                           sprite.left, sprite.top,
                           sprite.width, sprite.height);
                    };
                }
                else {
                    context.drawImage(this.image, sprite.left, sprite.top,
                                      sprite.width, sprite.height);
                }
            }
        }
    });
    I.draw = function (context, index) {
	    this.sprite.width = this.width;
	    this.sprite.height = this.height;
	    this.sprite.left = this.x;
	    this.sprite.top = this.y;

	    context.save();
	    this.sprite.paint(context, index);
	    context.restore();
	}

	return I;
}