(function () {
    "use strict";

    var constants = {
        maxPlayers: 4,
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
              var count = 0;
              var activePlayers = this._activePlayers;
              var pendingPlayers = this._pendingPlayers;
              var lastPlayers = this._lastPlayers;
              var lastConfidentPlayers = this._lastConfidentPlayers;

              this.clearScreen(this._context);
              this._rowCanvas.update();

              for (var p in players) {
                  // I think we're going to need a check here where we add p to the pending players array first, then
                  // use that information to decide if we have too many players 
                  window.clearTimeout(this._resetAllTimeout);
                  this._activeReset = false;
                  count++;

                  // when a new player enters the area, start a timer for 5 seconds before creating them on screen
                  // set the active players array for their number to true
                  // make sure to set their last position so it doesn't break the code
                  // fire the instructions for the new user
                  var index = activePlayers.indexOf(p);
                  var pending = pendingPlayers.indexOf(p);
                  if (index === -1) {
                      if (pending === -1) {
                          pendingPlayers.push(p);
                          console.log("Player " + p + " joined the game.")

                          this._newPlayerTimeout = setTimeout(function () {
                              pendingPlayers.splice(pending, 1);
                              if (players[p]) {
                                  activePlayers.push(p);
                                  lastConfidentPlayers[p] = players[p];
                                  lastPlayers[p] = players[p];

                                  that.showInstructions(p);
                                  that._rowCanvas.createBoat(p);
                              }
                          }, 5000);
                      }
                  }

                  // if there are less players than the max
                  // draw their hands and do everything we need to do on-screen
                  if (activePlayers.length <= constants.maxPlayers && index > -1) {
                      this.drawHands(p, players[p], this._lastPlayers[p]);
                      this._rowCanvas.moveBoat(p, players[p]);
                  }
              }
              for (var l in lastPlayers) {
                  if (!players[l]) {
                      var index = activePlayers.indexOf(l);
                      var pending = pendingPlayers.indexOf(l);

                      if (index > -1) {
                          activePlayers.splice(index, 1);
                          this._rowCanvas.removeBoat(l);
                          console.log("Player " + l + " left the game.");
                      }
                      if (pending > -1) {
                          pendingPlayers.splice(pending, 1);
                          window.clearTimeout(this._newPlayerTimeout);
                          console.log("Canceled player " + l + " instructions.")
                      }
                  }
              }
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
              this._rowCanvas.draw();

              // Run this method often, checks to see if we have too many people
              this._totalBodies = count;
              this.showTooManyPlayers(this._totalBodies);

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
              //context.shadowColor = '#444444';
              //context.shadowBlur = 5;
              //context.shadowOffsetX = 0;
              //context.shadowOffsetY = 5;
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
          showInstructions: function (p) {
              var context = this._instructionsContext;
              var image = new Image();
              var that = this;

              if (this._activeAlert == false) {
                  this.clearScreen(context);
                  this._activeAlert = true;

                  console.log('Show instructions for Player ' + p);
                  image.src = 'images/instructions/P' + p + '_instruction_01.png';
                  context.save();
                  context.shadowColor = '#444444';
                  context.shadowBlur = 5;
                  context.shadowOffsetX = 0;
                  context.shadowOffsetY = 5;
                  context.drawImage(image, 832, 912, 128, 128);
                  context.restore();

                  setTimeout(function () {
                      that._activeAlert = false;
                      that.clearScreen(context);
                      console.log('Clear instructions for Player ' + p);
                  }, 5000);
              }
          },
          showTooManyPlayers: function (count) {
              // if our alert active variable is false, then show the message, fade it out after five seconds, and don't show it again for thirty seconds
              // if the alert active variable is true, then do nothing
              if (count > constants.maxPlayers && this._activeTooManyPlayers == false) {
                  console.log('Show "too many players" alert.');
                  this._activeTooManyPlayers = true;

                  this.tooManyTimeout = setTimeout(function () {
                      console.log('Remove "too many players" alert.');
                      this._activeTooManyPlayers = false;
                  }, constants.tooManyTimeoutDuration);
              }
              if (count <= constants.maxPlayers && this._activeTooManyPlayers == true) {
                  window.clearTimeout(this.tooManyTimeout);
                  this._activeTooManyPlayers = false;
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
          _tooManyTimeout: null
      }
    );

    WinJS.Namespace.define('App', {
        DrawCanvas: drawCanvas
    });

})();