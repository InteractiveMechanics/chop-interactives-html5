(function () {
    "use strict";

    var constants = {
        maxPlayers: 3,
        handHeight: 154,
        handWidth: 154,
        instructionsDuration: 5000,
        tooManyTimeoutDuration: 30000,
        resetTimeoutDuration: 30000
    };

    var drawCanvas = WinJS.Class.define(
      function (rowCanvas) {
          this._rowCanvas = rowCanvas
      },
      {
          init: function () {
              this._canvas = document.getElementById('kinectCanvas');
              this._instructionsCanvas = document.getElementById('instructionsCanvas');

              this._context = this._canvas.getContext('2d');
              this._instructionsContext = this._instructionsCanvas.getContext('2d');

              this._width = this._canvas.width;
              this._height = this._canvas.height;

              this._activePlayers = [];
              this._pendingPlayers = [];
              this._lastPlayers = {};
              this._lastConfidentPlayers = {};

              console.log('Kinect canvases initialized.');
          },
          clearScreen: function (context) {
              var context = context;
              context.clearRect(0, 0, this._width, this._height);
          },
          draw: function (players) {
              var that = this;
              var activePlayers = this._activePlayers;
              var pendingPlayers = this._pendingPlayers;
              var lastPlayers = this._lastPlayers;
              var lastConfidentPlayers = this._lastConfidentPlayers;

              this.clearScreen(this._context);
              this._totalBodies = 0;

              this._rowCanvas.update();

              // New loop for adding a player
              if (activePlayers.length < constants.maxPlayers) {
                  for (var p in players) {
                      var index = activePlayers.indexOf(p);
                      if (index === -1) {
                          activePlayers.push(p);
                          lastConfidentPlayers[p] = players[p];
                          lastPlayers[p] = players[p];

                          that._activeAlert = true;
                          that._instructions.paused = false;
                          console.log('Show instructions for Player ' + p);

                          setTimeout(function () {
                              that._activeAlert = false;
                              that._instructions.paused = true;
                              that.clearScreen(that._instructionsContext);
                              console.log('Clear instructions for Player ' + p);
                          }, 6000);

                          that._rowCanvas.createBoat(p);
                      }
                  }
              }

              // Compares lastPlayers to currentPlayers to see if someone leaves
              for (var l in lastPlayers) {
                  if (!players[l]) {
                      var index = activePlayers.indexOf(l);
                      var pending = pendingPlayers.indexOf(l);

                      if (pending > -1) {
                          pendingPlayers.splice(pending, 1);
                      }

                      if (index > -1) {
                          activePlayers.splice(index, 1);
                          that._rowCanvas.removeBoat(l);
                          console.log("Player " + l + " left the game.");
                      }
                  }
              }

              // Drawing
              activePlayers.forEach(function (aP) {
                  window.clearTimeout(that._resetAllTimeout);
                  that._activeReset = false;

                  if (players[aP]) {
                      that.drawHands(aP, players[aP], that._lastPlayers[aP]);
                      that._rowCanvas.moveBoat(aP, players[aP]);
                  }
              });

              // Hard Reset
              if (!players[0] && !players[1] && !players[2] && !players[3] && !players[4] && !players[5] && this._activeReset == false) {
                  this._activeReset = true;

                  this._resetAllTimeout = setTimeout(function () {
                      activePlayers = [];
                      pendingPlayers = [];
                      lastPlayers = {};
                      lastConfidentPlayers = {};
                      that._activeReset = false;
                      that._rowCanvas._boats = [];
                      console.log("No players present, reseting the game.");
                  }, constants.resetTimeoutDuration);
              }

              // Count total players
              for (var p in players) {
                  that._totalBodies++;
              }

              // Run this function often, checks to see if we have too many people
              if (this._totalBodies > constants.maxPlayers && this._activeTooManyPlayers == false) {
                  var image = new Image();
                  image.src = 'images/too-many-alert@2x.png';
                  that.clearScreen(that._instructionsContext);
                  that._instructionsContext.drawImage(image, 691, 920, 539, 80);

                  this._activeTooManyPlayers = true;
                  console.log('Show "too many players" alert.');

                  this.tooManyTimeout = setTimeout(function () {
                      that.clearScreen(that._instructionsContext);
                      this._activeTooManyPlayers = false;
                      console.log('Remove "too many players" alert.');
                  }, constants.tooManyTimeoutDuration);
              }
              if (this._totalBodies <= constants.maxPlayers && this._activeTooManyPlayers == true) {
                  that.clearScreen(that._instructionsContext);
                  this._activeTooManyPlayers = false;
                  window.clearTimeout(this.tooManyTimeout);
                  console.log('Remove "too many players" alert.');
              }

              this.showInstructions();
              this._rowCanvas.draw();
              this._lastPlayers = players;
          },
          drawHands: function (p, player, lastPlayer) {
              var context = this._context;
              var rightHand = new Image();
              var leftHand = new Image();
              var deltaX = player['right']['pos']['x'] - player['spine']['pos']['x'];
              var deltaY = player['right']['pos']['y'] - player['spine']['pos']['y'];
              var angle = this._rowCanvas.calculateAngleDistance(deltaX, deltaY);
              
              // If the kinect is confident and is able to accurately track the hand, then use that date and store it for the future
              // if the kinect is not confident and is not able to accurately track the hand, then use the last set of confident data that was stored
              context.save();
              context.shadowColor = '#679FAC';
              context.shadowBlur = 8;
              context.shadowOffsetX = 0;
              context.shadowOffsetY = 0;
              if (player['right']['confidence'] === 1) {
                  rightHand.src = 'images/arrows/P' + p + '_arrow.png';
                  this._lastConfidentPlayers[p]['right'] = player['right'];
              } else {
                  rightHand.src = 'images/arrows/P' + p + '_arrow.png';
              }
              if (player['right']['trackingState'] === 2) {
                  context.translate(Math.round(player['right']['pos']['x'] - constants.handWidth / 2), Math.round(player['right']['pos']['y'] - constants.handHeight / 2));
                  context.rotate(angle[0] / Math.PI);
                  context.drawImage(rightHand, -constants.handWidth / 2, -constants.handHeight / 2, constants.handWidth, constants.handHeight);
              } else if (player['right']['trackingState'] === 1 || 0) {
                  context.translate(Math.round(this._lastConfidentPlayers[p]['right']['pos']['x'] - constants.handWidth / 2), Math.round(this._lastConfidentPlayers[p]['right']['pos']['y'] - constants.handHeight / 2));
                  context.rotate(angle[0] / Math.PI);
                  context.globalAlpha = 0.5;
                  context.drawImage(rightHand, -constants.handWidth / 2, -constants.handHeight / 2, constants.handWidth, constants.handHeight);
              }
              context.restore();
          },
          showInstructions: function () {
              var context = this._instructionsContext;
              var that = this;

              if (this._activeAlert) {
                  this._instructions.x = 860;
                  this._instructions.y = 800;
                  this._instructions.draw(context);                  
              }
          },
          _canvas: null,
          _instructionsCanvas: null,
          _context: null,
          _instructionsContext: null,
          _width: null,
          _height: null,

          // Stores object data for players as reference for confidence/history
          _lastPlayers: null,
          _lastConfidentPlayers: null,

          // Keeps track of number of players and state
          _activePlayers: null,
          _pendingPlayers: null,
          _totalBodies: 0,

          // For alerts and messages
          _activeAlert: false,
          _activeTooManyPlayers: false,
          _activeReset: false,

          _newPlayerTimeout: null,
          _resetAllTimeout: null,
          _tooManyTimeout: null,

          _instructions: new Instructions()
      }
    );

    WinJS.Namespace.define('App', {
        DrawCanvas: drawCanvas
    });

})();