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
              console.log('Game canvases initialized.')
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

              if(this._pennies.length < 4) {
                  this._pennies.push(new Penny());
              }
              this.collidingCircles();
          },
          createBoat: function (p, playerData) {
              this._boats[p] = new Boat();
          },
          moveBoat: function (p, playerData) {
              var that = this;
              var xDistance = (playerData['right']['pos']['x'] - 30) - (this._boats[p].x - 27);
              var yDistance = (playerData['right']['pos']['y'] - 38) - (this._boats[p].y - 84);
              var angleDistance = this.calculateAngleDistance(xDistance, yDistance);
    
              if (angleDistance[1] > 1) {
                  this._boats[p].x += xDistance * .015;
                  this._boats[p].y += yDistance * .015;
              }
              this._boats[p].angle = angleDistance[0];

              /*
              this._pennies.forEach(function (penny) {
                  if (!penny.hasBeenHit) {
                      var boatData = that._canvasContext.getImageData(that._boats[p].x, that._boats[p].y, that._boats[p].width, that._boats[p].height);
                      var pennyData = that._pennyContext.getImageData(penny.x, penny.y, penny.width, penny.height);
                      
                      if (that.isPixelCollision(boatData, that._boats[p].x, that._boats[p].y, pennyData, penny.x, penny.y, false)) {
                          penny.hasBeenHit = true;
                      }
                  }
              });
              
              this._lilypads.forEach(function (lilypad) {
                    var boatData = that._canvasContext.getImageData(that._boats[p].x, that._boats[p].y, that._boats[p].width, that._boats[p].height);
                    var lilypadData = that._canvas2Context.getImageData(lilypad.x, lilypad.y, lilypad.width, lilypad.height);

                    if (that.isPixelCollision(boatData, that._boats[p].x, that._boats[p].y, lilypadData, lilypad.x, lilypad.y, false)) {

                    }
              });
              */
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

                        if ( Math.sqrt( ( circle1.x-circle2.x ) * ( circle1.x-circle2.x )  + ( circle1.y-circle2.y ) * ( circle1.y-circle2.y ) ) < 197) 
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
                for(var i = 0; i < 10; i++) {
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

                for(var i = 0; i < 4; i++) {
                    this._pennies.push(new Penny());
                }
          },
          collides: function (a, b) {
              if (a.x < b.x + b.width &&
                  a.x + a.width > b.x &&
                  a.y < b.y + b.height &&
                  a.y + a.height > b.y) return true;
          },
          isPixelCollision: function ( first, x, y, other, x2, y2, isCentred ) {
                // we need to avoid using floats, as were doing array lookups
                x  = Math.round( x );
                y  = Math.round( y );
                x2 = Math.round( x2 );
                y2 = Math.round( y2 );

                var w  = first.width,
                    h  = first.height,
                    w2 = other.width,
                    h2 = other.height ;

                // deal with the image being centred
                if ( isCentred ) {
                    // fast rounding, but positive only
                    x  -= ( w/2 + 0.5) << 0
                    y  -= ( h/2 + 0.5) << 0
                    x2 -= (w2/2 + 0.5) << 0
                    y2 -= (h2/2 + 0.5) << 0
                }

                // find the top left and bottom right corners of overlapping area
                var xMin = Math.max( x, x2 ),
                    yMin = Math.max( y, y2 ),
                    xMax = Math.min( x+w, x2+w2 ),
                    yMax = Math.min( y+h, y2+h2 );

                 // Sanity collision check, we ensure that the top-left corner is both
                // above and to the left of the bottom-right corner.
                if ( xMin >= xMax || yMin >= yMax ) {
                    return false;
                }

                var xDiff = xMax - xMin,
                    yDiff = yMax - yMin;

                // get the pixels out from the images
                var pixels  = first.data,
                    pixels2 = other.data;

                // if the area is really small,
                // then just perform a normal image collision check
                if ( xDiff < 10 && yDiff < 10 ) {
                    for ( var pixelX = xMin; pixelX < xMax; pixelX++ ) {
                        for ( var pixelY = yMin; pixelY < yMax; pixelY++ ) {
                            if (
                                    ( pixels [ ((pixelX-x ) + (pixelY-y )*w )*4 + 3 ] !== 0 ) &&
                                    ( pixels2[ ((pixelX-x2) + (pixelY-y2)*w2)*4 + 3 ] !== 0 )
                            ) {
                                return true;
                            }
                        }
                    }
                } else {
                    /* What is this doing?
                    * It is iterating over the overlapping area,
                    * across the x then y the,
                    * checking if the pixels are on top of this.
                    *
                    * What is special is that it increments by incX or incY,
                    * allowing it to quickly jump across the image in large increments
                    * rather then slowly going pixel by pixel.
                    *
                    * This makes it more likely to find a colliding pixel early.
                    */

                    // Work out the increments,
                    // it's a third, but ensure we don't get a tiny
                    // slither of an area for the last iteration (using fast ceil).
                    var incX = xDiff / 3.0,
                        incY = yDiff / 3.0;
                    incX = (~~incX === incX) ? incX : (incX+1 | 0);
                    incY = (~~incY === incY) ? incY : (incY+1 | 0);

                    for ( var offsetY = 0; offsetY < incY; offsetY++ ) {
                        for ( var offsetX = 0; offsetX < incX; offsetX++ ) {
                            for ( var pixelY = yMin+offsetY; pixelY < yMax; pixelY += incY ) {
                                for ( var pixelX = xMin+offsetX; pixelX < xMax; pixelX += incX ) {
                                    if (
                                            ( pixels [ ((pixelX-x ) + (pixelY-y )*w )*4 + 3 ] !== 0 ) &&
                                            ( pixels2[ ((pixelX-x2) + (pixelY-y2)*w2)*4 + 3 ] !== 0 )
                                    ) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
                return false;
          },
          calculateAngleDistance: function (deltaX, deltaY) {
              var angle = Math.atan2(deltaY, deltaX) * Math.PI;
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