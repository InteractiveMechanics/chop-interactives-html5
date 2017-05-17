function Boat(I) {
    I = I || {};

    I.x = 60;
    I.y = 60;
    I.dx = 0;
    I.maxSpeed = 3;
    I.dy = 0;

    I.width = 168;
    I.height = 54;
    I.angle = 0;
    I.color = null;
    I.counter = 0;
    I.newlyAdded = false;

    I.update = function () {
        if (this.x < -20 || this.x > 1940) {
            this.dx = -this.dx
        }

        if (this.y < -20 || this.y > 1100) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    };

    I.playerHasEntered = function (playerNumber) {
        switch (parseInt(playerNumber)) {
            case 0:
                this.color = '#FF0000';
                break;
            case 1:
                this.color = '#29ABE2';
                break;
            case 2:
                this.color = '#FCEE21';
                break;
            case 3:
                this.color = '#00FF00';
                break;
            case 4:
                this.color = '#7D32AC';
                break;
            case 5:
                this.color = '#FFA200';
                break;
            default:
                this.color = null;
                break;
        }

        this.newlyAdded = true;
    }

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
                    context.drawImage(this.image, sprite.left, sprite.top, sprite.width, sprite.height);
                }
            }
        }
    });
    I.draw = function (context, index) {
	    this.sprite.width = this.width;
	    this.sprite.height = this.height;
	    this.sprite.left = 0 - this.width / 2;
	    this.sprite.top = 0 - this.height / 2;

	    context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle / Math.PI);

        if (this.newlyAdded) {

            if (this.color == null) {
                this.color = '#679FAC';
            }

            context.shadowColor = this.color;
            context.shadowBlur = this.counter;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;

            if (this.counter == 60) {
                this.newlyAdded = false;
            }
            this.counter += 1.5;
        } else {
            context.shadowColor = '#679FAC';
            context.shadowBlur = 4;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
        }
        
	    this.sprite.paint(context, index);
	    context.restore();
	}

	return I;
}