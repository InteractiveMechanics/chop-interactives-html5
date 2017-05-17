(function () {
    "use strict";

    var constants = {};

    var rollCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              var that = this;
              this._backgroundCanvas = document.getElementById('canvas');
              this._ballCanvas = document.getElementById('ball-canvas');
              this._enviromentCanvas = document.getElementById('enviroment-canvas');
              this._lightCanvas = document.getElementById('light-canvas');

              this._instructionsCanvas = document.getElementById('instructionsCanvas');
              this._instructionsContext = this._instructionsCanvas.getContext('2d');

              this._backgroundContext = this._backgroundCanvas.getContext('2d');
              this._ballContext = this._ballCanvas.getContext('2d');
              this._enviromentContext = this._enviromentCanvas.getContext('2d');
              this._lightContext = this._lightCanvas.getContext('2d');

              this._backgroundCanvas.style.backgroundImage = "url('images/background.png')";

              this.setupPieces();
              this.showInstructions();

              setInterval(function () {
                  that.createBall(that);
              }, 2500);
          },


          clearScreen: function (context) {
              var context = context;
              context.clearRect(0, 0, 1920, 1080);
          },
          newPlayerAdded: function () {
              this.playerAdded = true;
              this._instructions.paused = false;
          },
          newPlayerRemoved: function () {
              this.playerAdded = false;
              this._instructions.paused = true;
          },
          showInstructions: function () {
              this._instructions.x = 1715;
              this._instructions.y = 775;
              this._instructions.draw(this._instructionsContext);
          },

          setupPieces: function () {
             
              //Bumpers Verticals
              //this._pinballPieces.push(new PinballPiece('bumper_left_02', 200, 780, 252, 309, 'images/pinball-pieces/bumper_left_03@2x'));
              //this._pinballPieces.push(new PinballPiece('bumper_left_02', 1710, 780, 252, 309, 'images/pinball-pieces/bumper_right_03@2x'));

              //Bumpers Middle Top
              this._pinballPieces.push(new PinballPiece('bumper_left_02', 500, 660, 355, 190, 'images/pinball-pieces/bumper_left_01@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_left_02', 500, 660, 355, 190, 'images/pinball-pieces/bumper_left_01@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_left_02', 1390, 660, 355, 190, 'images/pinball-pieces/bumper_right_01@2x'));

              //Bumpers Middle Bottom
              //this._pinballPieces.push(new PinballPiece('bumper_left_02', 730, 822, 325, 184, 'images/pinball-pieces/bumper_right_02@2x'));
              //this._pinballPieces.push(new PinballPiece('bumper_left_02', 1180, 822, 325, 184, 'images/pinball-pieces/bumper_left_02@2x'));

              //White-Yellow Circle Bumper
              this._pinballPieces.push(new PinballPiece('bumper_circle_01', 875, 475, 175, 175, 'images/pinball-pieces/bumper_circle_01@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_circle_01', 630, 300, 175, 175, 'images/pinball-pieces/bumper_circle_01@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_circle_01', 1150, 300, 175, 175, 'images/pinball-pieces/bumper_circle_01@2x'));

              //Red-Yellow Circle Bumper
             // this._pinballPieces.push(new PinballPiece('bumper_right_02', 140, 124, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_right_02', 425, 149, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_right_02', 254, 329, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_right_02', 1384, 149, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));
              //this._pinballPieces.push(new PinballPiece('bumper_right_02', 1673, 124, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_right_02', 1558, 329, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));

              this._pinballLightPieces.push(new PinballPieceLight('lights', 52, 52, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 152, 52, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 52, 152, 100, 100, 'images/pinball-pieces/lights@2x'));

              this._pinballLightPieces.push(new PinballPieceLight('lights', 1870, 52, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 1770, 52, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 1870, 152, 100, 100, 'images/pinball-pieces/lights@2x'));

              /*this._pinballLightPieces.push(new PinballPieceLight('lights', 52, 1030, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 152, 1030, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 52, 932, 100, 100, 'images/pinball-pieces/lights@2x'));

              this._pinballLightPieces.push(new PinballPieceLight('lights', 1870, 52, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 1770, 52, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 1870, 152, 100, 100, 'images/pinball-pieces/lights@2x'));

              this._pinballLightPieces.push(new PinballPieceLight('lights', 1870, 1030, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 1770, 1030, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 1880, 932, 100, 100, 'images/pinball-pieces/lights@2x'));*/

              this._pinballLightPieces.push(new PinballPieceLight('lights', 830, 1010, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 780, 912, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 728, 1010, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 678, 912, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 730, 812, 100, 100, 'images/pinball-pieces/lights@2x'));

              this._pinballLightPieces.push(new PinballPieceLight('lights', 1180, 1010, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 1233, 912, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 1078, 1010, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 1130, 912, 100, 100, 'images/pinball-pieces/lights@2x'));
              this._pinballLightPieces.push(new PinballPieceLight('lights', 1180, 812, 100, 100, 'images/pinball-pieces/lights@2x'));

              this._objective = new Objective('objective', 'images/objective@2x');

              this._pinballPieces.forEach(function (piece, index) {
                  if (index > 0) {
                    piece.draw();
                  }
              });

              this._pinballLightPieces.forEach(function (piece) {
                  piece.draw();
              });

              this._objective.draw();
          },
          createBall: function (that) {

              if (this._activePlayerCount == 2) {
                  that._balls.push(new Ball(240, -90));
              }

              if (this._activePlayerCount == 3) {
                  that._balls.push(new Ball(240, -90));
                  that._balls.push(new Ball(1600, -90));
              }

              that._balls.push(new Ball(960, -90));

              var rand = this.randomValue(0, 10);

              if (rand === 1) {
                  var ball = new Ball(960, -3000);
                  ball.isGolden = true;
                  ball.speed = 1.1;
                  that._balls.push(ball);
              }
              
          },

          isOverHelpIcon: function (mX, mY) {
              return (mX >= this._instructions.x && mX < this._instructions.x + 200 && mY >= this._instructions.y && mY < this._instructions.y + 200);
          },

          checkPieces: function (index, player, lastPlayer, hand) {
              var mX = parseInt(player['pos']['x']);
              var mY = parseInt(player['pos']['y']);

              if (this.isOverHelpIcon(mX, mY)) {
                  this._instructions.paused = false;
              }

              var that = this;

              for (var i = 0; i < this._pinballPieces.length; i++) {
                  var piece = this._pinballPieces[i];
                  if (mX >= (piece.x - (piece.width / 2)) && mX < piece.x + piece.width && mY >= (piece.y - (piece.height / 2)) && mY < piece.y + piece.height) {

                      if (player['status'] === 'closed' && player['confidence'] === 1 && !that._leftHandArray[index] && !piece.pickedUp && hand === 'left') {

                          console.log(player['status'], player['confidence'], that._leftHandArray[index], piece.pickedUp, hand);

                          piece.pickedUp = true;
                          that._leftHandArray[index] = i;

                          piece.playerHoldingPiece = index;
                          piece.playerHand = hand

                          console.log(player['status'], player['confidence'], that._leftHandArray[index], piece.pickedUp, hand);

                          console.log('--------------');
                      }
                      if (player['status'] === 'closed' && player['confidence'] === 1 && !that._rightHandArray[index] && !piece.pickedUp && hand === 'right') {
                          piece.pickedUp = true;
                          that._rightHandArray[index] = i;

                          piece.playerHoldingPiece = index;
                          piece.playerHand = hand
                      }

                      if (piece.pickedUp && piece.playerHoldingPiece == index && piece.playerHand == hand && player['status'] === 'closed') {
                          piece.update(mX, mY);
                      }
                  }



                  if (player['status'] === 'open' && that._leftHandArray[index] == i && hand === 'left') {
                      that._leftHandArray[index] = undefined;
                      piece.pickedUp = false;
                      piece.playerHoldingPiece = -1;
                      piece.playerHand = '';
                  }
                  if (player['status'] === 'open' && that._rightHandArray[index] == i && hand === 'right') {
                      that._rightHandArray[index] = undefined;
                      piece.pickedUp = false;
                      piece.playerHoldingPiece = -1;
                      piece.playerHand = '';
                  }
                  
              };
          },
          draw: function () {
              var that = this;
              this.clearScreen(this._enviromentContext);
              this.clearScreen(this._ballContext);
              this.clearScreen(this._lightContext);

              if (this.playerAdded) {
                  this._instructions.draw(this._instructionsContext);
              }

              this._balls.forEach(function (ball) {
                  ball.move();
                  ball.draw();
              });
              
              this._pinballPieces.forEach(function (piece, index) {
                  if (index > 0) {
                      piece.draw();
                  }
              });

              this._pinballLightPieces.forEach(function (piece) {
                  piece.draw();
              });

              this._objective.draw();
          },
          update: function () {
              var that = this;
              that._balls.forEach(function (ball) {
                  // var ball = that._balls[i];
                  if (ball.outBounds) {
                      //ball
                  }
                  ball.update();

                  for (var i = 0; i < that._pinballPieces.length; i++) {
                      var piece = that._pinballPieces[i];
                      if (ball.x >= (piece.x - (piece.width / 2)) && ball.x < piece.x + piece.width && ball.y >= (piece.y - (piece.height / 2)) && ball.y < piece.y + piece.height) {
                          
                          var pixel = that._enviromentContext.getImageData(ball.x, ball.y, 1, 1).data;
                          if (pixel[3] != 0) {
                              if (ball.x > piece.x) {
                                  ball.dX = (ball.dX + 3);
                              } else {
                                  ball.dX = (ball.dX - 3);
                              }
                              ball.dY = (ball.dY + 4) * -1;
                              that._pinballPieces[i].isHit = true;
                          }
                      }
                  };

                  var piece = that._objective;
                  if (ball.x >= (piece.x - (piece.width / 2)) && ball.x < piece.x + piece.width && ball.y >= (piece.y - (piece.height / 2)) && ball.y < piece.y + piece.height) {

                      var objectiveContext = document.getElementById('objective-canvas').getContext('2d');
                      var pixel = objectiveContext.getImageData(ball.x, ball.y, 1, 1).data;

                      if (pixel[3] != 0) {
                          if (ball.isGolden && !ball.isHidden) {
                              that.launchMultipleBalls();
                          }
                          ball.isHidden = true;
                      }
                  }

              });

              var length = this._balls.length;

              for (var i = 0; i < length; i++) {
                  var ball = this._balls[i];
                  for (var j = i + 1; j < length; j++) {
                      var piece = this._balls[j];
                      if (ball.x >= (piece.x - (piece.width)) && ball.x < piece.x + piece.width && ball.y >= (piece.y - (piece.height)) && ball.y < piece.y + piece.height) {
                          var pixel = that._ballContext.getImageData(ball.x, ball.y, 1, 1).data;
                          // console.log(pixel[3]);
                          if (pixel[3] != 0) {

                              if (ball.x > piece.x) {
                                  ball.dX = (ball.dX + 5);
                                  piece.dX = (piece.dX - 5);
                              } else {
                                  ball.dX = (ball.dX - 5);
                                  piece.dX = (piece.dX + 5);
                              }
                              ball.dY = (ball.dY + 6) * -1;
                              piece.dY = (piece.dY + 6) * -1;
                              //that._pinballPieces[i].isHit = true;
                          }
                      }
                  }
              };


              for (var i = 0; i < this._balls.length; i++) {
                  var ball = this._balls[i];
                  if (ball.outBounds) {
                      this._balls.splice(i, 1);
                  }
              }   
          },
          launchMultipleBalls: function () {

              this._pinballLightPieces.forEach(function (piece) {
                  piece.activateLights = true;
                  piece.paused = false;
              });

              this._balls.push(new Ball(50, -90));
              this._balls.push(new Ball(240, -90));
              this._balls.push(new Ball(480, -90));
              this._balls.push(new Ball(960, -90));
              this._balls.push(new Ball(1600, -90));
              this._balls.push(new Ball(1880, -90));
          },
          randomValue: function (min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          },

          _backgroundCanvas: null,
          _ballCanvas: null,
          _enviromentCanvas: null,
          _lightCanvas: null,

          _backgroundContext: null,
          _ballContext: null,
          _enviromentContext: null,
          _lightContext: null,
          _ballDropInterval: null,

          _pinballPieces: [],
          _pinballLightPieces: [],
          _leftHandArray: [],
          _rightHandArray: [],
          _balls: [],
          _objective: null,
          _activePlayerCount: 1,
          _instructionsCanvas: null,
          _instructionsContext: null,
          _instructions: new Instructions(),
          playerAdded: false
      }
    );

    WinJS.Namespace.define('App', {
        RollCanvas: rollCanvas
    });

})();