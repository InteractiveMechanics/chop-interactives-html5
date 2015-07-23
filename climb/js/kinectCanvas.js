﻿(function () {
    "use strict";

    var constants = {
        maxPlayers: 3,
        handHeight: 76,
        handWidth: 60,
        instructionsDuration: 8000,
        tooManyTimeoutDuration: 30000,
        resetTimeoutDuration: 30000
    };

    var drawCanvas = WinJS.Class.define(
      function (climbCanvas) {
          this._climbCanvas = climbCanvas
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

              var LeftPanel = this._climbCanvas._LeftPanel;
              var CenterPanel = this._climbCanvas._CenterPanel;
              var RightPanel = this._climbCanvas._RightPanel;

              this.clearScreen(this._context);
              this._totalBodies = 0;

              // New loop for adding a player
              if (activePlayers.length < constants.maxPlayers) {
                  for (var p in players) {
                      var index = activePlayers.indexOf(p);
                      if (index === -1) {
                          if (!that._centerPanelPlayer) {
                              that._centerPanelPlayer = p;
                              CenterPanel.pegs.forEach(function (peg) {
                                  peg.playerHasEntered(p);
                                  peg.player_assigned = true;
                              });

                              console.log('Player ' + p + ' assigned to Center Panel.');
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
                          } else if (players[p]['spine']['pos']['x'] < 960 && !that._leftPanelPlayer) {
                              that._leftPanelPlayer = p;
                              LeftPanel.pegs.forEach(function (peg) {
                                  peg.playerHasEntered(p);
                                  peg.player_assigned = true;
                              });

                              console.log('Player ' + p + ' assigned to Left Panel.');
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
                          } else if (players[p]['spine']['pos']['x'] > 960 && !that._rightPanelPlayer) {
                              that._rightPanelPlayer = p;
                              RightPanel.pegs.forEach(function (peg) {
                                  peg.playerHasEntered(p);
                                  peg.player_assigned = true;
                              });

                              console.log('Player ' + p + ' assigned to Right Panel.');
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
                          }
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
                          if (that._centerPanelPlayer == l) {
                              that._centerPanelPlayer = null;
                              CenterPanel.pegs.forEach(function (peg) {
                                  peg.player_assigned = false;
                              });
                          }
                          if (that._leftPanelPlayer == l) {
                              that._leftPanelPlayer = null;
                              LeftPanel.pegs.forEach(function (peg) {
                                  peg.player_assigned = false;
                              });
                          }
                          if (that._rightPanelPlayer == l) {
                              that._rightPanelPlayer = null;
                              RightPanel.pegs.forEach(function (peg) {
                                  peg.player_assigned = false;
                              });
                          }
                          console.log("Player " + l + " left the game.");
                      }
                  }
              }

              // Drawing
              activePlayers.forEach(function (aP) {
                  window.clearTimeout(that._resetAllTimeout);
                  that._activeReset = false;

                  if (players[aP]) {
                      if (that._leftPanelPlayer === aP) {
                          var offset = 0;
                          var panel = LeftPanel;
                      }
                      if (that._centerPanelPlayer === aP) {
                          var offset = 1;
                          var panel = CenterPanel;
                      }
                      if (that._rightPanelPlayer === aP) {
                          var offset = 2;
                          var panel = RightPanel;
                      }

                      that.drawHands(aP, players[aP], that._lastPlayers[aP], offset);
                      that._climbCanvas.detectActivated(players[aP]['right'], panel, offset);
                      that._climbCanvas.detectActivated(players[aP]['left'], panel, offset);
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
                      that._rightPanelPlayer = null;
                      that._leftPanelPlayer = null;
                      that._centerPanelPlayer = null;
                      that._activeReset = false;
                      console.log("No players present, reseting the game.");
                  }, constants.resetTimeoutDuration);
              }

              for (var p in players) {
                  that._totalBodies++;
              }

              // Run this function often, checks to see if we have too many people
              if (this._totalBodies > constants.maxPlayers && this._activeTooManyPlayers == false) {
                  var image = new Image();
                  image.src = 'images/too-many-alert@2x.png';

                  that._activeAlert = false;
                  that._instructions.paused = true;
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
              this._climbCanvas.draw();
              this._lastPlayers = players;
          },
          drawHands: function (p, player, lastPlayer, panel) {
              var context = this._context;
              var rightHand = new Image();
              var leftHand = new Image();

              var spineX = player['spine']['pos']['x'];
              var minX = spineX - 320;
              var maxX = spineX + 320;
              var panelMinX = 640 * panel - 30;
              var panelMaxX = 640 * (panel + 1) + 30;

              player['right']['pos']['x'] = this.map_range(player['right']['pos']['x'], minX, maxX, panelMinX, panelMaxX);
              player['left']['pos']['x'] = this.map_range(player['left']['pos']['x'], minX, maxX, panelMinX, panelMaxX);

              // If the kinect is confident and is able to accurately track the hand, then use that date and store it for the future
              // if the kinect is not confident and is not able to accurately track the hand, then use the last set of confident data that was stored
              context.save();
              if (player['right']['confidence'] === 1) {
                  if (player['right']['status'] === 'closed') {
                      rightHand.src = 'images/shared/P' + p + '_closed.png';
                  } else {
                      rightHand.src = 'images/shared/P' + p + '_open.png';
                  }
                  this._lastConfidentPlayers[p]['right'] = player['right'];
              } else {
                  if (this._lastConfidentPlayers[p]['right']['status'] === 'closed') {
                      rightHand.src = 'images/shared/P' + p + '_closed.png';
                  } else {
                      rightHand.src = 'images/shared/P' + p + '_open.png';
                  }
              }
              context.scale(-1, 1);
              if (player['right']['trackingState'] === 2) {
                  context.translate(-(Math.round(player['right']['pos']['x'] - constants.handWidth / 2)), Math.round(player['right']['pos']['y'] - constants.handHeight / 2));
                  context.drawImage(rightHand, -60, 0, 60, 76);
              } else if (player['right']['trackingState'] === 1 || 0) {
                  context.translate(-(Math.round(this._lastConfidentPlayers[p]['right']['pos']['x'] - constants.handWidth / 2)), Math.round(this._lastConfidentPlayers[p]['right']['pos']['y'] - constants.handHeight / 2));
                  context.globalAlpha = 0.5;
                  context.drawImage(rightHand, -60, 0, 60, 76);
              }
              context.restore();

              context.save();
              if (player['left']['confidence'] === 1) {
                  if (player['left']['status'] === 'closed') {
                      leftHand.src = 'images/shared/P' + p + '_closed.png';
                  } else {
                      leftHand.src = 'images/shared/P' + p + '_open.png';
                  }
                  this._lastConfidentPlayers[p]['left'] = player['left'];
              } else {
                  if (this._lastConfidentPlayers[p]['left']['status'] === 'closed') {
                      leftHand.src = 'images/shared/P' + p + '_closed.png';
                  } else {
                      leftHand.src = 'images/shared/P' + p + '_open.png';
                  }
              }
              if (player['left']['trackingState'] === 2) {
                  context.drawImage(leftHand, Math.round(player['left']['pos']['x']), Math.round(player['left']['pos']['y']), 60, 76);
              } else if (player['left']['trackingState'] === 1 || 0) {
                  context.globalAlpha = 0.5;
                  context.drawImage(leftHand, Math.round(this._lastConfidentPlayers[p]['left']['pos']['x']), Math.round(this._lastConfidentPlayers[p]['left']['pos']['y']), 60, 76);
              }
              context.restore();
          },
          map_range: function (value, low1, high1, low2, high2) {
              return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
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

          // Keep track of who is which quadrant
          _leftPanelPlayer: null,
          _centerPanelPlayer: null,
          _rightPanelPlayer: null,

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