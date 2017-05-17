(function () {
    "use strict";

    var constants = {
        maxSpeed: 4
    };

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
              this._instructionsCanvas = document.getElementById('instructionsCanvas');
              this._instructionsContext = this._instructionsCanvas.getContext('2d');

              var background = new Image();
              background.src = 'images/background@2x.png';
              this._pondContext.drawImage(background, 0, 0, 1920, 1080);

              this.populateCircleArray();
              // console.log('Game canvases initialized.')


              this.showInstructions();
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

              if (this.playerAdded) {
                  this._instructions.draw(this._instructionsContext);
              }

              //this._canvas2Context.fillStyle = "red";
              //this._canvas2Context.font = "bold 16px Arial";
              //this._canvas2Context.fillText(this.left_z, 100, 50);
              //this._canvas2Context.fillText(this.right_z, 1800, 50);


              this._boats.forEach(function (boat, index) {
                  if (boat != undefined) {
                      boat.draw(that._canvasContext, index);
                  }
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
              var pennyCount = 0;
              var totalPennyCount = 0;

              this._lilypads.forEach(function (lilypad) {
                  if (Math.abs(lilypad.dx) > lilypad.weight) {
                      if (lilypad.dx > 0) {
                          lilypad.dx = lilypad.weight;
                      } else {
                          lilypad.dx = -lilypad.weight;
                      }
                  }
                  if (Math.abs(lilypad.dy) > lilypad.weight) {
                      if (lilypad.dy > 0) {
                          lilypad.dy = lilypad.weight;
                      } else {
                          lilypad.dy = -lilypad.weight;
                      }
                  }
                  lilypad.update();
              });

              this._pennies.forEach(function (penny) {
                  if (!penny.hasBeenHit) {
                      pennyCount++;
                  }
                  totalPennyCount++;
              });
              if (pennyCount < 4) {
                  this._pennies.push(new Penny());
              }
              if (totalPennyCount > 25) {
                  this._pennies.splice(0, 1);
              }

              this.collidingCircles();
          },
          newPlayerAdded: function () {
              this.playerAdded = true;
              this._instructions.paused = false;
          },
          showInstructions: function () {
              this._instructions.x = 1715;
              this._instructions.y = 775;
              this._instructions.draw(this._instructionsContext);
          },
          createBoat: function (p) {
              if (!this._boats[p]) {
                  this._boats[p] = new Boat();
              }
              while(!this.validBoatXAndY(p)) {
                  this._boats[p].x = randomInRange(1900, 20);
                  this._boats[p].y = randomInRange(1060, 20);
              }

              this._boats[p].playerHasEntered(p);
          },
          validBoatXAndY: function (p) {
              var that = this;
              this._lilypads.forEach(function (lilypad) {
                  var boatRect = new Rectangle(that._boats[p].x, that._boats[p].y, that._boats[p].width, that._boats[p].height);
                  var lilypadRect = new Rectangle(lilypad.x, lilypad.y, lilypad.width, lilypad.height);

                  if (!boatRect.intersectsWith(lilypadRect)) {
                     
                      return false;
                  }
              });

              return true;
          },
          moveBoat: function (p, playerData) {
              if (playerData && this._boats[p]) {
                  var that = this;
                  var multiplier = 0.001;

                  this.left_z = parseInt(playerData['left']['pos']['z'] * 10) + 2;
                  this.right_z = parseInt(playerData['right']['pos']['z'] * 10);

                  var properX = 0;
                  var properY = 0;

                  

                  if (this.right_z <= this.left_z) {
                      properX = playerData['right']['pos']['x'];
                      properY = playerData['right']['pos']['y'];
                  } else {
                      properX = playerData['left']['pos']['x'];
                      properY = playerData['left']['pos']['y'];
                  }

                  var xDistance = (properX - (playerData['spine']['pos']['x']));
                  var yDistance = (properY - (playerData['spine']['pos']['y']));

                  //var xDistance = (playerData['right']['pos']['x']) - (playerData['spine']['pos']['x']);
                  //var yDistance = (playerData['right']['pos']['y']) - (playerData['spine']['pos']['y']);

                  var angleDistance = this.calculateAngleDistance(xDistance, yDistance);

                  var boatX = that._boats[p].x - that._boats[p].width / 2;
                  var boatY = that._boats[p].y - that._boats[p].width / 2;

                  if (angleDistance[1] > 1) {
                      this._boats[p].dx += xDistance * multiplier;
                      this._boats[p].dy += yDistance * multiplier;
                  }
                  this._boats[p].angle = angleDistance[0];

                  this._pennies.forEach(function (penny) {
                      if (!penny.hasBeenHit) {
                          if (that.collides(penny.x, penny.y, penny.width, that._boats[p].x - that._boats[p].width/2, that._boats[p].y - that._boats[p].height/2, that._boats[p].width)) { 
                              var boatData = that._canvasContext.getImageData(boatX, boatY, that._boats[p].width, that._boats[p].width);
                              var pennyData = that._pennyContext.getImageData(penny.x, penny.y, penny.width, penny.height);

                              if (that.isPixelCollision(boatData, boatX, boatY, pennyData, penny.x, penny.y, false)) {
                                  penny.hasBeenHit = true;
                                  penny.paused = false;

                                  if (penny.isGolden) {
                                      that._boats[p].maxSpeed = 10;

                                      setTimeout(function () {
                                          if(that._boats[p]) {
                                              that._boats[p].maxSpeed = 3;
                                          }
                                      }, 5000);
                                  }
                              }
                          }
                      }
                  });

                  this._lilypads.forEach(function (lilypad) {
                      if (that.collides(lilypad.x, lilypad.y, lilypad.width, that._boats[p].x - that._boats[p].width/2, that._boats[p].y - that._boats[p].height/2, that._boats[p].width)) {
                          var boatData = that._canvasContext.getImageData(boatX, boatY, that._boats[p].width, that._boats[p].width);
                          var lilypadData = that._canvas2Context.getImageData(lilypad.x, lilypad.y, lilypad.width, lilypad.height);

                          if (that.isPixelCollision(boatData, boatX, boatY, lilypadData, lilypad.x, lilypad.y, false)) {
                              multiplier = 0.003;

                              if ((that._boats[p].dx > 0 && lilypad.dx > 0) || (that._boats[p].dx < 0 && lilypad.dx < 0)) {
                                  lilypad.dx = lilypad.dx * 2;
                                  that._boats[p].dx = -that._boats[p].dx;
                              } else {
                                  lilypad.dx = -lilypad.dx * 2;
                                  that._boats[p].dx = -that._boats[p].dx * 1.5;
                              }

                              if ((that._boats[p].dy > 0 && lilypad.dy > 0) || (that._boats[p].dy < 0 && lilypad.dy < 0)) {
                                  lilypad.dy = lilypad.dy * 2;
                                  that._boats[p].dy = -that._boats[p].dy;
                              } else {
                                  lilypad.dy = -lilypad.dy * 2;
                                  that._boats[p].dy = -that._boats[p].dy * 1.5;
                              }
                          }
                      }
                  });

                  this._boats.forEach(function (otherBoat) {
                      if (otherBoat != undefined) {
                          if (otherBoat.x != that._boats[p].x && otherBoat.y != that._boats[p].y) {
                              if (that.collides(otherBoat.x - that._boats[p].width / 2, otherBoat.y - that._boats[p].height / 2, otherBoat.width, that._boats[p].x - that._boats[p].width / 2, that._boats[p].y - that._boats[p].height / 2, that._boats[p].width)) {
                                  var boatData = that._canvasContext.getImageData(boatX, boatY, that._boats[p].width, that._boats[p].width);
                                  var otherBoatData = that._canvasContext.getImageData(otherBoat.x - otherBoat.width / 2, otherBoat.y - otherBoat.width / 2, otherBoat.width, otherBoat.width);

                                  if (that.isPixelCollision(boatData, boatX, boatY, otherBoatData, otherBoat.x, otherBoat.y, false)) {
                                      if ((that._boats[p].dx > 0 && otherBoat.dx > 0) || (that._boats[p].dx < 0 && otherBoat.dx < 0)) {
                                          otherBoat.dx = otherBoat.dx + that._boats[p].dx;
                                          that._boats[p].dx = that._boats[p].dx / 1.5;
                                      } else {
                                          otherBoat.dx = -otherBoat.dx;
                                          that._boats[p].dx = -that._boats[p].dx;
                                      }

                                      if ((that._boats[p].dy > 0 && otherBoat.dy > 0) || (that._boats[p].dy < 0 && otherBoat.dy < 0)) {
                                          otherBoat.dy = otherBoat.dy + that._boats[p].dy / 1.5;
                                          that._boats[p].dy = that._boats[p].dy / 1.5;
                                      } else {
                                          otherBoat.dy = -otherBoat.dy;
                                          that._boats[p].dy = -that._boats[p].dy;
                                      }
                                  }
                              }
                          }
                      }
                  });

                  if (this._boats[p].dx > this._boats[p].maxSpeed) {
                      this._boats[p].dx = this._boats[p].maxSpeed;
                  }
                  if (this._boats[p].dx < -this._boats[p].maxSpeed) {
                      this._boats[p].dx = -this._boats[p].maxSpeed;
                  }
                  if (this._boats[p].dy > this._boats[p].maxSpeed) {
                      this._boats[p].dy = this._boats[p].maxSpeed;
                  }
                  if (this._boats[p].dy < -this._boats[p].maxSpeed) {
                      this._boats[p].dy = -this._boats[p].maxSpeed;
                  }
                  this._boats[p].update();
              }
          },
          removeBoat: function (p) {
              this._boats.splice(p, 1);
              this._boats.splice(p, 0, undefined);
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
               
                this._lilypads.push(new LilyPad());
                this._lilypads.push(new LilyPad());
                this._lilypads.push(new LilyPad());

                this._lilypads.push(new HeavyLilyPad());
                this._lilypads.push(new HeavyLilyPad());
                this._lilypads.push(new HeavyLilyPad());

                this._lilypads.push(new Flower());
                this._lilypads.push(new Flower());

                for (var i = 0; i < 4; i++) {
                    var rand = this.randomInRange(6, 0);
                    var p = new Penny();

                    if (rand == 3 || rand == 2) {
                        p.isGolden = true;
                        this._pennies.push(p);
                    } else {
                        this._pennies.push(p);
                    }
                }
          },
          randomInRange: function(limit, offset) {
              var r = Math.random();
              return Math.floor(r * limit + offset);
          },
          collides: function (ax, ay, awidth, bx, by, bwidth) {
              if (ax < bx + bwidth &&
                  ax + awidth > bx &&
                  ay < by + bwidth &&
                  ay + awidth > by) return true;
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
                    h2 = other.height;

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
                if ( xDiff < 4 && yDiff < 4 ) {
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

          left_z: -1,
          right_z: -1,

          _canvasContext: null,
          _canvas2Context: null,
          _pennyContext: null,
          _pondContext: null,
          _lilypads: [],
          _pennies: [],
          _boats: [],
          _instructionsCanvas: null,
          _instructionsContext: null,
          _instructions: new Instructions(),
          playerAdded: false
       }
    );

    WinJS.Namespace.define('App', {
        RowCanvas: rowCanvas
    });

})();