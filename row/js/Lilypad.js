function HeavyLilyPad(I) {
    I = I || {};

    I.color = '#FF0000';
    I.x = randomInRange(1900, 20);
    I.y = randomInRange(1060, 20);
    I.dx = random_dx_dy();
    I.dy = random_dx_dy();

    I.width = 200;
    I.height = 200;
    I.weight = 0.5;

    I.update = function () {
        if (this.x < -20 || this.x > 1940) {
            this.dx = -this.dx
        }

        if (this.y < -20 || this.y > 1060) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    };

    I.sprite = new Sprite('lilypad2', new ImagePainter('images/lilypad_2@2x.png'));
    I.draw = function (context) {
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;

        context.save();
        context.shadowColor = '#679FAC';
        context.shadowBlur = 4;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        this.sprite.paint(context);
        context.restore();
    }
    return I;
}

function LilyPad(I) {
    I = I || {};

    I.color = '#FF0000';
    I.x = randomInRange(1900, 20);
    I.y = randomInRange(1060, 20);
    I.dx = random_dx_dy();
    I.dy = random_dx_dy();

    I.width = 200;
    I.height = 200;
    I.weight = 1;

    I.update = function () {

        if (this.x < -20 || this.x > 1940) {
            this.dx = -this.dx
        }

        if (this.y < -20 || this.y > 1060) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    };

    I.sprite = new Sprite('lilypad1', new ImagePainter('images/lilypad_1@2x.png'));
    I.draw = function (context) {
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;

        context.save();
        context.shadowColor = '#679FAC';
        context.shadowBlur = 4;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        this.sprite.paint(context);
        context.restore();
    }
    return I;
}

function Flower(I) {
    I = I || {};

    I.color = '#FF0000';
    I.x = randomInRange(1900, 20);
    I.y = randomInRange(1060, 20);
    I.dx = random_dx_dy();
    I.dy = random_dx_dy();

    I.width = 200;
    I.height = 200;
    I.weight = 2;

    I.update = function () {

        if (this.x < -20 || this.x > 1940) {
            this.dx = -this.dx
        }

        if (this.y < -20 || this.y > 1060) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    };

    I.sprite = new Sprite('flower', new ImagePainter('images/flower@2x.png'));
    I.draw = function (context) {
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;

        context.save();
        context.shadowColor = '#679FAC';
        context.shadowBlur = 4;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        this.sprite.paint(context);
        context.restore();
    }
    return I;
}

function randomInRange(limit, offset) {
    var r = Math.random();
    return Math.floor(r * limit + offset);
}

function random_dx_dy() {
    var min = -.1,
        max = .9,
        highlightedNumber = Math.random() * (max - min) + min;

    if (highlightedNumber == 0) {
        return generateRandomNumber();
    }

    return highlightedNumber;
}

function Rectangle(x, y, width, height) {
    var I = I || {};

    I.x = x;
    I.y = y;
    I.width = width;
    I.height = height;

    I.intersectsWith = function (rect) {
        return (rect.x < this.x + this.width && this.x < rect.x + rect.width && rect.y < this.y + this.height)
    }

    return I;
}