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
    this.lineAlpha = 1;
    this.rotatePlane = false;
    this.isDead = false;
    this.hand = null;
    
    this.playerId = null;
    this.planeType = getRandomPlane();
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
        var color = getColorValue(this.colorId);
         if (this.offScreenCounter < 4) {
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
        var color = getColorValue(this.colorId);
        var context = canvas.getContext("2d");
        if (this.offScreenCounter < 4) {
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
            //if (this.isActive && Math.abs(this.p.x - this.lastX) < 150 && Math.abs(this.p.y - this.lastY) < 150) {
            //    //_pathContext.save();
            //    //_pathContext.setLineDash(this.lineDash);
            //    //_pathContext.beginPath();
            //    //_pathContext.lineTo(this.lastX, this.lastY);
            //    //_pathContext.lineTo(this.p.x, this.p.y);
            //    //_pathContext.lineWidth = this.lineWidth;
            //    //_pathContext.lineJoin = 'round';
            //    //_pathContext.lineCap = 'round';
            //    //_pathContext.strokeStyle = color;
            //    //_pathContext.stroke();
            //    //_pathContext.restore();

            //    this._paths.push(new Path(this.lastX, this.lastY, this.p.x, this.p.y, color));
            //}

            if (this.paths.length > 4) {
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

function getRandomPlane() {
    var planeId = Math.floor(Math.random() * 5);
    switch (planeId) {
        case 1:
            this.drag = .99;
            this.lineDash = [5, 15];
            this.lineWidth = 2;
            break;
        case 2:
            this.drag = .99;
            this.lineDash = [3, 20];
            this.lineWidth = 3;
            break;
        case 3:
            this.drag = .99;
            this.lineDash = [1, 10];
            this.lineWidth = 2;
            break;
        case 4:
            this.drag = .99;
            this.lineDash = [10, 10];
            this.lineWidth = 4;
            break;
        case 0:
        default:
            this.drag = .99;
            this.lineDash = [4, 10, 8, 20];
            this.lineWidth = 1;
            break;
    }

    return planeId;
}

function getRandomColor() {
    return Math.floor(Math.random() * 9);
}

function getColorValue(colorId) {
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
    return hex;
}