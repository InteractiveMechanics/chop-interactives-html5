(function () {
    "use strict";

    var constants = {};

    var rowCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              this._canvas = document.getElementById('drawingCanvas');
              this._canvas2 = document.getElementById('drawingCanvas2');
              this._pennyCanvas = document.getElementById('pennyCanvas');
              this._pondCanvas = document.getElementById('pondCanvas');

              this._canvasContext = this._canvas.getContext('2d');
              this._canvas2Context = this._canvas2.getContext('2d');
              this._pennyContext = this._pennyCanvas.getContext('2d');
              this._pondContext = this._pondCanvas.getContext('2d');

              var background = new Image();
              background.src = 'images/background@2x.png';
              this._pondContext.drawImage(background, 0, 0, 1920, 1080);

              this.populateCircleArray();
          },
          clearScreen: function (context) {
              var context = context;
              context.clearRect(0, 0, 1920, 1080);
          },
          draw: function () {
              var that = this;
              this.clearScreen(this._canvasContext);
              this.clearScreen(this._canvas2Context);
              this.clearScreen(this._pennyContext);

              this._boats.forEach(function (boat, index) {
                  boat.draw(that._canvasContext, index);
              });
              this._lilypads.forEach(function (lilypad) {
                  lilypad.draw(that._canvas2Context);
              });
              this._pennies.forEach(function (penny) {
                  penny.draw(that._pennyContext);
              });
              /*
              this._pennies.forEach(function (penny) {
                  that._boats.forEach(function (boat) {
                      if (that.collides(boat, penny)) {
                          penny.hasBeenHit = true;
                      }
                  });
              });
              */
              this.collidingCircles();
              /*
              this._lilypads.forEach(function (lilypad) {
                  if (this.lilyPadvPlayerCollides(this._player, lilypad)) {
                      console.log('hit');
                  }
              });
              */
          },
          update: function () {
              var i;
              for (i = 0; i < this._pennies.length; ++i) {
                  if (this._pennies[i].isActive) {
                      this._pennies.splice(i--, 1);
                  } else {
                      this._pennies[i].update();
                  }
              }
              this._lilypads.forEach(function(lilypad) {
                  lilypad.update();
              });

              if(this._pennies.length < 12) {
                  this._pennies.push(new Penny());
              }
          },
          createBoat: function (p, playerData) {
              this._boats[p] = new Boat();
          },
          moveBoat: function (p, playerData) {
              var xDistance = playerData['right']['pos']['x'] - this._boats[p].x;
              var yDistance = playerData['right']['pos']['y'] - this._boats[p].y;
              var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
    
              if (distance > 1) {
                  this._boats[p].x += xDistance * .025;
                  this._boats[p].y += yDistance * .025;
              }
          },
          removeBoat: function (p) {
              this._boats.splice(p, 1);
          },
          collidingCircles: function () {
              var length = this._lilypads.length;

              for (var i = 0; i < length; i++) {
                    var circle1 = this._lilypads[i];
                    for (var j= i + 1; j< length; j++) {

                        var circle2 = this._lilypads[j];

                        if ( Math.sqrt( ( circle1.x-circle2.x ) * ( circle1.x-circle2.x )  + ( circle1.y-circle2.y ) * ( circle1.y-circle2.y ) ) < 97) 
                        {
                            circle1.dx = (circle1.weight / 10) * ((circle1.x-(circle2.x+circle2.width/2))/circle2.width);
                            circle1.dy = -circle1.dy;

                            circle2.dx = (circle2.weight/10) * ((circle2.x-(circle1.x+circle1.width/2))/circle1.width);
                            circle2.dy = -circle2.dy;
                        }
                    }
              };
          },
          populateCircleArray: function () {
                for(var i = 0; i < 20; i++) {
                    var weight = Math.floor(Math.random() * 10);

                    if((weight > 0) && (weight <= 3)) {
                        this._lilypads.push(new Flower());
                    }

                    if((weight > 3) && (weight <= 6)) {
                        this._lilypads.push(new LilyPad());
                    }

                    if((weight > 6) && (weight <= 9)) {
                        this._lilypads.push(new HeavyLilyPad());
                    }
    
                }

                for(var i = 0; i < 12; i++) {
                    this._pennies.push(new Penny());
                }
          },
          collides: function (a, b) {
                return a.x < b.x + (b.width) &&
                a.x + (a.width * .25) > b.x &&
                a.y < b.y + (b.height) &&
                a.y + (a.height * .25) > b.y;
          },
          lilyPadvPlayerCollides: function (object1, object2) {
                //return player.x < lilypad.x + (lilypad.width) && player.x + (player.width * .25) > lilypad.x && player.y < lilypad.y + (lilypad.heigh) && player.y + (player.height * .25) > lilypad.y;
                if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
                object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
                console.log('hit');
                }

                return false;
          },
          calculateAngleDistance: function (deltaX, deltaY) {
              var angle = Math.atan2(deltaX, deltaY) / Math.PI;
              var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
              return [angle, distance];
          },

          _canvas: null,
          _canvas2: null,
          _pennyCanvas: null,
          _pondCanvas: null,

          _canvasContext: null,
          _canvas2Context: null,
          _pennyContext: null,
          _pondContext: null,
          _lilypads: [],
          _pennies: [],
          _boats: []
       }
    );

    WinJS.Namespace.define('App', {
        RowCanvas: rowCanvas
    });

})();