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

              this._backgroundContext = this._backgroundCanvas.getContext('2d');
              this._ballContext = this._ballCanvas.getContext('2d');
              this._enviromentContext = this._enviromentCanvas.getContext('2d');

              this._backgroundCanvas.style.backgroundImage = "url('images/background.png')";

              this.setupPieces();

              setInterval(function () {
                  that.createBall(that);
              }, 2500);
          },
          clearScreen: function (context) {
              var context = context;
              context.clearRect(0, 0, 1920, 1080);
          },
          setupPieces: function () {
             
              //Bumpers Verticals
              this._pinballPieces.push(new PinballPiece('bumper_left_02', 200, 780, 252, 309, 'images/pinball-pieces/bumper_left_03@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_left_02', 1710, 780, 252, 309, 'images/pinball-pieces/bumper_right_03@2x'));

              //Bumpers Middle Top
              this._pinballPieces.push(new PinballPiece('bumper_left_02', 500, 660, 355, 190, 'images/pinball-pieces/bumper_left_01@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_left_02', 1390, 660, 355, 190, 'images/pinball-pieces/bumper_right_01@2x'));

              //Bumpers Middle Bottom
              this._pinballPieces.push(new PinballPiece('bumper_left_02', 730, 822, 325, 184, 'images/pinball-pieces/bumper_right_02@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_left_02', 1180, 822, 325, 184, 'images/pinball-pieces/bumper_left_02@2x'));

              //White-Yellow Circle Bumper
              this._pinballPieces.push(new PinballPiece('bumper_circle_01', 875, 475, 175, 175, 'images/pinball-pieces/bumper_circle_01@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_circle_01', 630, 300, 175, 175, 'images/pinball-pieces/bumper_circle_01@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_circle_01', 1150, 300, 175, 175, 'images/pinball-pieces/bumper_circle_01@2x'));

              //Red-Yellow Circle Bumper
              this._pinballPieces.push(new PinballPiece('bumper_right_02', 140, 124, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_right_02', 425, 149, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_right_02', 254, 329, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_right_02', 1384, 149, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_right_02', 1673, 124, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));
              this._pinballPieces.push(new PinballPiece('bumper_right_02', 1558, 329, 100, 100, 'images/pinball-pieces/bumper_circle_02@2x'));

              this._pinballPieces.forEach(function (piece) {
                  piece.draw();
              });
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

              
          },
          checkPieces: function (index, player, lastPlayer, hand) {
              var mX = parseInt(player['pos']['x']);
              var mY = parseInt(player['pos']['y']);
              var that = this;

              for (var i = 0; i < this._pinballPieces.length; i++) {
                  var piece = this._pinballPieces[i];
                  if (mX >= (piece.x - (piece.width / 2)) && mX < piece.x + piece.width && mY >= (piece.y - (piece.height / 2)) && mY < piece.y + piece.height) {

                      if (player['status'] === 'closed' && player['confidence'] === 1 && !that._leftHandArray[index] && !piece.pickedUp && hand === 'left') {
                          piece.pickedUp = true;
                          that._leftHandArray[index] = i;

                          piece.playerHoldingPiece = index;
                          piece.playerHand = hand
                      }
                      if (player['status'] === 'closed' && player['confidence'] === 1 && !that._rightHandArray[index] && !piece.pickedUp && hand === 'right') {
                          piece.pickedUp = true;
                          that._rightHandArray[index] = i;

                          piece.playerHoldingPiece = index;
                          piece.playerHand = hand
                      }

                      if (piece.pickedUp && piece.playerHoldingPiece == index && piece.playerHand == hand) {
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
              this._balls.forEach(function (ball) {
                  ball.move();
                  ball.draw();
              });
              this._pinballPieces.forEach(function (piece) {
                  piece.draw();
              });
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
              });

              var length = this._balls.length;

              for (var i = 0; i < length; i++) {
                  var ball = this._balls[i];
                  for (var j = i + 1; j < length; j++) {
                      var piece = this._balls[j];
                      if (ball.x >= (piece.x - (piece.width)) && ball.x < piece.x + piece.width && ball.y >= (piece.y - (piece.height)) && ball.y < piece.y + piece.height) {
                          var pixel = that._ballContext.getImageData(ball.x, ball.y, 1, 1).data;
                          console.log(pixel[3]);
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
          randomValue: function (min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          },

          _backgroundCanvas: null,
          _ballCanvas: null,
          _enviromentCanvas: null,

          _backgroundContext: null,
          _ballContext: null,
          _enviromentContext: null,
          _ballDropInterval: null,

          _pinballPieces: [],
          _leftHandArray: [],
          _rightHandArray: [],
          _balls: [],
          _activePlayerCount: 1
      }
    );

    WinJS.Namespace.define('App', {
        RollCanvas: rollCanvas
    });

})();