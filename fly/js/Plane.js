function Plane(canvas, startX, startY) {
    this.canvas = canvas;
    this.p = { x: startX, y: startY }; // position
    this.v = { x: 0, y: 0 }; 	// velocity
    this.mass = 1;
    this.radius = 15;
    this.width = 200;
    this.height = 200;
    this.isActive = false;
    this.b = 0.90;  		// energy loss factor from wall bounce.
    this.G = .23; 			// universal gravitational constant.
    this.drag = .99;
    this.offScreenCounter = 0;
    this.offScreenMax = 4;
    this.lineAlpha = 1;
    this.rotatePlane = false;
    this.isDead = false;
    this.hand = null;
    
    this.playerId = null;
    this.planeType = getRandomPlane(this);
    this.colorId = getRandomColor();

    this.lineWidth = 3;
    this.lineDash = [5, 15];

    this.startX = startX;
    this.startY = startY;
    this.lastX = 0;
    this.lastY = 0;
    this.paths = [];
    this.theta = 0;  			// rotational angle.

    // everything we need for sprites
    this.paused = true;
    this.lastAdvance = 0;
    this.frames = 0;
    this.totalFrames = 3;
    this.cells = [
      { left: 0, top: 0, width: 200, height: 200 },
      { left: 200, top: 0, width: 200, height: 200 },
      { left: 400, top: 0, width: 200, height: 200 }
    ];
    this.spritesheet = new Image();
    this.sprite = new Sprite('plane', new SpriteSheetPainter('images/planes/plane' + this.planeType + '_' + this.colorId + '.png', this.cells));

    this.move = function () {
        if (this.isActive) {
            this.v.x *= this.drag;
            //this.v.y *= this.drag;

            this.v.y += this.G;

            this.lastX = this.p.x;
            this.lastY = this.p.y;

            this.p.x += this.v.x;
            this.p.y += this.v.y;

            this.theta = Math.atan(this.v.y / this.v.x)  || 0;
            
        }
    };

    this.update = function () {
        var color = getColorValue(this.colorId, this.planeType);
        if (this.offScreenCounter < this.offScreenMax) {
            if (this.p.x > canvas.width + 100) {
                this.p.x = 0;
                this.offScreenCounter += 1;
            }

            if (this.p.x < -100) {
                this.p.x = canvas.width;
                this.offScreenCounter += 1;
            }

            if (this.p.y > canvas.height + 100) {
                this.p.y = 0;
                this.offScreenCounter += 1;
            }

            if (this.p.y < -100) {
                this.p.y = canvas.height;
                this.offScreenCounter += 1;
                //this.v.y = -this.b * this.v.y;
            }

            if (this.isActive && Math.abs(this.p.x - this.lastX) < 150 && Math.abs(this.p.y - this.lastY) < 150) {
                this.paths.push(new Path(this.lastX, this.lastY, this.p.x, this.p.y, color, this.lineWidth, this.lineDash));
            }
        }
    };

    this.reset = function () {
        this.p = { x: 100, y: 100 };
        this.v = { x: 0, y: 0 };
    };

    this.drawText = function (text) {
        var context = canvas.getContext("2d");
        context.font = "20px Arial";
        context.fillText(text, 100, 100);
    }
    
    this.draw = function () {
        var color = getColorValue(this.colorId, this.planeType);
        var context = canvas.getContext("2d");
        if (this.offScreenCounter < this.offScreenMax) {
            context.save();

            if (this.isActive) {
                var time = new Date();
                var milli = time.getTime();
                if (milli - this.lastAdvance > 175) {
                    this.sprite.painter.advance();
                    this.lastAdvance = milli;
                }
            }

            this.sprite.width = this.width;
            this.sprite.height = this.height;
            this.sprite.left = 0 - this.width / 2;
            this.sprite.top = 0 - this.height / 2;


            if (this.rotatePlane) {
                //Rotate Logic
                context.scale(-1, 1);
                context.translate(-(Math.round(this.p.x)), Math.round(this.p.y));
            } else {
                context.translate(Math.round(this.p.x), Math.round(this.p.y));
            }

            if (this.v.x > 0) {
                context.rotate(-this.theta);
            } else {
                context.rotate(this.theta);
            }
            
            this.sprite.paint(context);
            context.restore();

            var _pathCanvas = document.getElementById('pathCanvas');
            var _pathContext = _pathCanvas.getContext("2d");

            if (this.paths.length > this.offScreenMax) {
                this.paths.forEach(function (path) {
                    if (path) {
                        path.draw();
                    }
                });
            }
            
        } else {
            //context.clearRect(0, 0, canvas.width, canvas.height);
            this.isActive = false;
            this.isDead = true;
        }
    }
}

function getRandomPlane(obj) {
    var that = obj;
    var planeId = Math.floor(Math.random() * 11);
    switch (planeId) {
        case 3:
        case 4:
        case 5:
            that.drag = .99;
            that.lineDash = [5, 15];
            that.lineWidth = 2;
            planeId = 1;
            break;
        case 6:
        case 7:
        case 8:
            that.drag = .99;
            that.lineDash = [3, 20];
            that.lineWidth = 3;
            planeId = 3;
            break;
        case 9:
            that.G = .2;
            that.lineDash = [1, 0];
            that.lineWidth = 1;
            planeId = 2;
            break;
        case 10:
            that.G = -0.1;
            that.drag = .99;
            that.lineDash = [10, 10];
            that.lineWidth = 10;
            that.offScreenMax = 10;
            planeId = 4;
            break;
        case 0:
        case 1:
        case 2:
        default:
            that.G = .17;
            that.drag = .94;
            that.lineDash = [4, 10, 8, 20];
            that.lineWidth = 1;
            planeId = 0;
            break;
    }

    return planeId;
}

function getRandomColor() {
    return Math.floor(Math.random() * 9);
}

function getColorValue(colorId, planeId) {
    var hex;
    switch (colorId) {
        case 1:
            hex = '#d7df23';
            break;
        case 2:
            hex = '#8dc63f';
            break;
        case 3:
            hex = '#2bb673';
            break;
        case 4:
            hex = '#27aae1';
            break;
        case 5:
            hex = '#8254a2';
            break;
        case 6:
            hex = '#ed1c24';
            break;
        case 7:
            hex = '#ec008c';
            break;
        case 8:
            hex = '#fbb040';
            break;
        case 9:
            hex = '#f26522';
            break;
        case 0:
        default:
            hex = '#fff200';
            break;
    }
    if (planeId === 2) { hex = '#666666'; }
    if (planeId === 4) { hex = '#FFFFFF'; }
    return hex;
}