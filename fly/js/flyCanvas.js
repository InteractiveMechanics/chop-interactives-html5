(function () {
    "use strict";

    var constants = {};

    var flyCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              var that = this;

              this._instructionsCanvas = document.getElementById('instructionsCanvas');
              this._instructionsContext = this._instructionsCanvas.getContext('2d');

              this._planeCanvas = document.getElementById('planeCanvas');
              this._pathCanvas = document.getElementById('pathCanvas');
              this._skyCanvas = document.getElementById('skyCanvas');
              this._cloudFGCanvas = document.getElementById('cloudFGCanvas');
              this._cloudMGCanvas = document.getElementById('cloudMGCanvas');
              this._cloudBGCanvas = document.getElementById('cloudBGCanvas');

              this._planeContext = this._planeCanvas.getContext('2d');
              this._pathContext = this._pathCanvas.getContext('2d');
              this._skyContext = this._skyCanvas.getContext('2d');
              this._cloudFGContext = this._cloudFGCanvas.getContext('2d');
              this._cloudMGContext = this._cloudMGCanvas.getContext('2d');
              this._cloudBGContext = this._cloudBGCanvas.getContext('2d');

              this.cloudFG = new Image();
              this.cloudFG.src = 'images/backgrounds/clouds_foreground.png';
              //this._cloudFGContext.drawImage(this.cloudFG, 0, 640, 1920, 640);

              this.cloudMG = new Image();
              this.cloudMG.src = 'images/backgrounds/clouds_midground.png';
              //this._cloudMGContext.drawImage(this.cloudMG, 0, 640, 1920, 640);

              this.cloudBG = new Image();
              this.cloudBG.src = 'images/backgrounds/clouds_background.png';
              //this._cloudBGContext.drawImage(this.cloudBG, 0, 640, 1920, 640);

              var background = new Image();
              background.src = 'images/backgrounds/background.png';
              this._skyContext.drawImage(background, 0, 0, 1920, 1080);

              this.showInstructions();
          },
          clearScreen: function (context) {
              var context = context;
              context.clearRect(0, 0, 1920, 1080);
          },
          showInstructions: function () {
              this._instructions.x = 1715;
              this._instructions.y = 775;
              this._instructions.draw(this._instructionsContext);
          },
          newPlayerAdded: function () {
              this.playerAdded = true;
              this._instructions.paused = false;
          },
          newPlayerRemoved: function () {
              this.playerAdded = false;
              this._instructions.paused = true;
          },
          playInstructions: function () {
              var count = 0;
              setTimeout(function () {

              });
          },
          draw: function () {
              this.clearScreen(this._planeContext);
              this.clearScreen(this._pathContext);

              if (this.playerAdded) {
                  this._instructions.draw(this._instructionsContext);
              }

              this._planes.forEach(function (plane) {
                  if (plane) {
                      plane.draw();
                  }
              });

              this._activePlanes.forEach(function (plane) {
                  if (plane) {
                      plane.draw();
                  }
              });

              //Foreground
              if (this.cloudFG) {
                  this._cloudFGContext.clearRect(0, 0, 1920, 1080);
                  this._cloudFGContext.globalAlpha = this._foregroundAlpha;
                  this._cloudFGContext.drawImage(this.cloudFG, 0, 640, 1920, 640);
              }

              //Mid
              if (this.cloudMG) {
                  this._cloudMGContext.clearRect(0, 0, 1920, 1080);
                  this._cloudMGContext.globalAlpha = this._midgroundAlpha;
                  this._cloudMGContext.drawImage(this.cloudMG, 0, 640, 1920, 640);
              }

              //Background
              if (this.cloudBG) {
                  this._cloudBGContext.clearRect(0, 0, 1920, 1080);
                  this._cloudBGContext.globalAlpha = this._backgroundAlpha;
                  this._cloudBGContext.drawImage(this.cloudBG, 0, 640, 1920, 640);
              }
          },
          update: function () {
              this._planes.forEach(function (plane) {
                  if (plane) {
                      plane.move();
                      plane.update();
                  }
                  //plane.drawText(this.statusText);
              });

              this._activePlanes.forEach(function (plane, index, object) {
                  if (plane) {
                      plane.move();
                      plane.update();

                      if (plane.isDead) {
                          object.splice(index, 1);
                      }
                  }
              });

              this._foregroundAlpha += this._foregroundSpeed;
              this._midgroundAlpha += this._midgroundSpeed;
              this._backgroundAlpha += this._backgroundSpeed;

              if (this._foregroundAlpha <= 0.25 || this._foregroundAlpha >= 1.5) this._foregroundSpeed = -this._foregroundSpeed;

              if (this._midgroundAlpha <= 0.25 || this._midgroundAlpha >= 1.5) this._midgroundSpeed = -this._midgroundSpeed;

              if (this._backgroundAlpha <= 0.25 || this._backgroundAlpha >= 1.5) this._backgroundSpeed = -this._backgroundSpeed;
          },
          calculateAngleDistance: function (deltaX, deltaY) {
              var angle = Math.atan2(deltaY, deltaX) * Math.PI;
              var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
              return [angle, distance];
          },

          isOverHelpIcon: function (mX, mY) {
              return (mX >= this._instructions.x && mX < this._instructions.x + 200 && mY >= this._instructions.y && mY < this._instructions.y + 200);
          },
          
          checkPlanesR: function (index, player, lastPlayer, whichHand) {

              var xPosition = parseInt(player['pos']['x']);
              var yPosition = parseInt(player['pos']['y']);

              if (this.isOverHelpIcon(xPosition, yPosition)) {
                  this._instructions.paused = false;
              }

              if (player['status'] === 'closed' && !this._planes[index]) {
                  //console.log(this._planes);
                  this._planes[index] = this.getPlane(index, xPosition, yPosition);
                  this._planes[index].hand = whichHand;
                  this._planes[index].p.x = xPosition;
                  this._planes[index].p.y = yPosition;

                  this.statusText = 'Start: ' + this._planes[index].startX + "," + this._planes[index].startY;
                  //console.log(this._planes);

                  this._planes[index].lastX = xPosition;
              }

              if (player['status'] === 'closed' && this._planes[index] && this._planes[index].hand === whichHand) {
                  this._planes[index] = this.getPlane(index, xPosition, yPosition);

                  if (this._planes[index].lastX < xPosition) {
                      this._planes[index].rotatePlane = true;
                  } else {
                      this._planes[index].rotatePlane = false;
                  }
                  this.statusText = 'Moving: ' + this._planes[index].startX + "," + this._planes[index].startY + '<br /> Postion: ' + xPosition + "," + yPosition;

                  this._planes[index].lastX = xPosition;
              }

              if ((player['status'] === 'open' && lastPlayer['status'] === 'closed') || (this._planes[index] && player['status'] === 'open' && lastPlayer['status'] === 'open' && this._planes[index].hand === whichHand)) {
                  this._planes[index] = this.getPlane(index, xPosition, yPosition);
                 
                  this.statusText = 'Start: ' + this._planes[index].startX + "," + this._planes[index].startY + '\n Thrown At: ' + xPosition + "," + yPosition;
                  //throw logic
                  var thrownAtX = xPosition;
                  var thrownAtY = yPosition;

                  if (Math.abs(this._planes[index].startX - xPosition) > 10) {
                      if (this._planes[index].startX < thrownAtX) {
                          this._planes[index].rotatePlane = true;
                      }

                      var scale = .2;
                      this._planes[index].p.x = xPosition;
                      this._planes[index].p.y = yPosition;
                      this._planes[index].v.x = (thrownAtX - this._planes[index].startX) * scale;
                      this._planes[index].v.y = (thrownAtY - this._planes[index].startY) * scale;
                      this._planes[index].isActive = true;

                      this._activePlanes.push(this._planes[index]);
                      this._planes[index] = undefined;
                  } else {
                      this._planes[index] = undefined;
                  }
              }

              if (this._planes[index] && this._planes[index].p.x === this._planes[index].lastX && this._planes[index].p.y === this._planes[index].lastY) {
                  this._planes[index] = undefined;
              }
          },
          getMousePos: function(canvas, evt) {
              var rect = canvas.getBoundingClientRect();
              this.mousePos = {
                  x: evt.clientX - rect.left,
                  y: evt.clientY - rect.top
              }
              return this.mousePos;
          },
          removePlane: function(index) {
              if (this._planes[index]) {
                  this._planes[index] = undefined;
              }
          },
          getPlane: function(index, x, y) {
              if (this._planes[index]) {
                  this._planes[index].p.x = x;
                  this._planes[index].p.y = y

                  //console.log('in here');
                  return this._planes[index];
              } else {
                  //console.log('new plane');
                  return new Plane(this._planeCanvas, x, y);
              }
          },

          _planeCanvas: null,
          _skyCanvas: null,
          _pathCanvas: null,
          _cloudFGCanvas: null,
          _cloudMGCanvas: null,
          _cloudBGCanvas: null,

          _planeContext: null,
          _skyContext: null,
          _pathContext: null,
          _cloudFGContext: null,
          _cloudMGContext: null,
          _cloBGContext: null,

          cloudBG: null,
          cloudMG: null,
          cloudFG: null,

          _foregroundAlpha: 0.25,
          _backgroundAlpha: 0.25,
          _midgroundAlpha: 0.25,

          _foregroundSpeed: 0.025,
          _midgroundSpeed: 0.01,
          _backgroundSpeed: 0.0075,


          plane: null,
          isDragging: false,
          isMouseDown: false,
          mouseX: null,
          mouseY: null,
          mousePos: null,
          gravity: 5,
          startX: null,
          startY: null,
          statusText: 'open',
          _planes: [],
          _activePlanes: [],
          _instructionsCanvas: null,
          _instructionsContext: null,
          _instructions: new Instructions(),
          playerAdded: false
       }
    );

    WinJS.Namespace.define('App', {
        FlyCanvas: flyCanvas
    });

})();