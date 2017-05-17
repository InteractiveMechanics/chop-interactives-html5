function Sediment(x, y, w, h, canvas, file) {
    this.p = { x: x, y: y }; // position
    this.v = { x: -5, y: 5 }; 	// velocity
    this.width = parseInt(w * .4);
    this.height = parseInt(h * .4);
    this.isActive = false;
    this.G = .23; 			// universal gravitational constant.
    this.drag = .99;
    this.offScreenCounter = 0;
    this.offScreenMax = 1;
    this.lastX = 0;
    this.lastY = 0;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.sprite = new Sprite('rock', new ImagePainter(file));
    this.pickedUp = false;
    this.playerHoldingPiece = -1;
    this.playerHand = '';
    this.angle = 0;
    this.hitPoints = 100;


    this.move = function () {
        if (this.isActive) {
            this.v.x *= this.drag;
            this.v.y *= this.drag;

            this.v.y += this.G;

            this.lastX = this.p.x;
            this.lastY = this.p.y;

            this.p.x += this.v.x;
            this.p.y += this.v.y;
        }
    };

    this.update = function (x, y) {

        if (this.pickedUp && !this.isActive) {
            this.p.x = x;
            this.p.y = y;
            this.isActive = true;
        }

        if (this.offScreenCounter < this.offScreenMax) {
            if (this.p.x > canvas.width + 100) {
                this.offScreenCounter += 1;
            }

            if (this.p.x < -100) {
                this.offScreenCounter += 1;
            }

            if (this.p.y > canvas.height + 100) {
                this.offScreenCounter += 1;
            }

            if (this.p.y < -100) {
                this.offScreenCounter += 1;
                //this.v.y = -this.b * this.v.y;
            }
        }

    }

    this.reset = function () {
        this.p = { x: 100, y: 100 };
        this.v = { x: 0, y: 0 };
    }

    this.minusHitPoints = function () {
        this.hitPoints -= 7;

        console.log(this.hitPoints);

        if (this.hitPoints <= 0) {
            this.pickedUp = true;
        }
    }
    this.draw = function () {
        this.context.save();
        this.context.rotate(this.angle / Math.PI);
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.p.x;
        this.sprite.right = this.p.x + this.width;
        this.sprite.top = this.p.y;
        this.sprite.bottom = this.p.y + this.height;
        this.sprite.paint(this.context);
        this.context.restore();
    }
}