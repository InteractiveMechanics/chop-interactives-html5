function HeavyLilyPad(I) {
    I = I || {};

    I.color = '#FF0000';
    I.x = randomInRange();
    I.y = randomInRange();
    I.dx = random_dx_dy();
    I.dy = random_dx_dy();

    I.width = 200;
    I.height = 200;
    I.weight = 10;

    I.update = function () {
        if (this.x < 0 || this.x > window.innerWidth - 110) {
            this.dx = -this.dx
        }

        if (this.y < 0 || this.y > window.innerHeight - 110) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.angle += this.dr;
    };

    I.sprite = new Sprite('lilypad2', new ImagePainter('images/lilypad_2@2x.png'));
    I.draw = function (context) {
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x;
        this.sprite.top = this.y;

        context.save();
        //context.shadowColor = '#679FAC';
        //context.shadowBlur = 4;
        //context.shadowOffsetX = 0;
        //context.shadowOffsetY = 0;
        this.sprite.paint(context);
        context.restore();
    }
    return I;
}

function LilyPad(I) {
    I = I || {};

    I.color = '#FF0000';
    I.x = randomInRange();
    I.y = randomInRange();
    I.dx = random_dx_dy();
    I.dy = random_dx_dy();

    I.width = 200;
    I.height = 200;
    I.weight = 6;

    I.update = function () {

        if (this.x < 0 || this.x > window.innerWidth - 110) {
            this.dx = -this.dx
        }

        if (this.y < 0 || this.y > window.innerHeight - 110) {
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
        //context.shadowColor = '#679FAC';
        //context.shadowBlur = 4;
        //context.shadowOffsetX = 0;
        //context.shadowOffsetY = 0;
        //this.sprite.paint(context);
        context.restore();
    }
    return I;
}

function Flower(I) {
    I = I || {};

    I.color = '#FF0000';
    I.x = randomInRange();
    I.y = randomInRange();
    I.dx = random_dx_dy();
    I.dy = random_dx_dy();

    I.width = 200;
    I.height = 200;
    I.weight = 3;

    I.update = function () {

        if (this.x < 0 || this.x > window.innerWidth - 100) {
            this.dx = -this.dx
        }

        if (this.y < 0 || this.y > window.innerHeight - 100) {
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
        //context.shadowColor = '#679FAC';
        //context.shadowBlur = 4;
        //context.shadowOffsetX = 0;
        //context.shadowOffsetY = 0;
        this.sprite.paint(context);
        context.restore();
    }
    return I;
}

function randomInRange() {
    var r = Math.random();
    return Math.floor(r * (0 - window.innerWidth) + window.innerWidth);
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