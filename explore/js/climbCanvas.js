(function () {
    "use strict";

    var constants = {};

    var climbCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              var that = this;

              if (this.dinoNumber === 4) {
                  this.dinoNumber = 1;
              }

              this.dinoCanvas = document.getElementById('dino-bones');
              this.dinoContext = this.dinoCanvas.getContext("2d");

              this.sedimentCanvas = document.getElementById('sediment-layer');
              this.sedimentContext = this.sedimentCanvas.getContext("2d");
               
              this.backgroundCanvas = document.getElementById('background');
              this.backgroundContext = this.backgroundCanvas.getContext("2d");

              this.touchCanvas = document.getElementById('touch-layer');
              this.touchContext = this.touchCanvas.getContext("2d");

              this._instructionsCanvas = document.getElementById('instructionsCanvas');
              this._instructionsContext = this._instructionsCanvas.getContext('2d');

              this.dinoBackgroundCanvas = document.getElementById('dino-background');
              this.dinoBackgroundContext = this.dinoBackgroundCanvas.getContext("2d");

              var video = document.getElementById('video');
              var sources = video.getElementsByTagName('source');
              var dino = null;

              if (this.dinoNumber == 1) {
                  dino = new Stegosaurus(this.dinoBackgroundCanvas);
                  sources[0].src = 'animations/stegAni.mp4';
                  video.load();
              }

              
              

              if (this.dinoNumber == 2) {
                  dino = new Trex(this.dinoBackgroundCanvas);
                  sources[0].src = 'animations/trexAni.mp4';
                  video.load();
              }

              if (this.dinoNumber == 3) {
                  dino = new Triceratop(this.dinoBackgroundCanvas);
                  sources[0].src = 'animations/tricAni.mp4';
                  video.load();
              }

              dino.init();

              this.setDinoPieces();
              this.setRocks();

              this.draw();
              this.showInstructions();
          },
          showInstructions: function () {
              this._instructions.x = 1715;
              this._instructions.y = 775;
              this._instructions.draw(this._instructionsContext);
          },
          newPlayerAdded: function () {
              this.playerAdded = true;
              this._instructions.paused = false;
              this.hasStartedPlaying = true;
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
          isOverHelpIcon: function (mX, mY) {
              return (mX >= this._instructions.x && mX < this._instructions.x + 200 && mY >= this._instructions.y && mY < this._instructions.y + 200);
          },
          randomLocationX: function(limit, offset) {
             var r = Math.random();
             var randomLocation = Math.floor(r * limit + offset);
             if (randomLocation > 400 && randomLocation < 1700) {
                return this.randomLocationX(1900, 20);
             }

             return randomLocation;
          },

          randomLocationY: function (limit, offset) {
              var r = Math.random();
              var randomLocation = Math.floor(r * limit + offset);

              if (randomLocation > 225 && randomLocation < 555) {
                 return this.randomLocationX(1060, 20);
              }

              return randomLocation;
          },

          checkBones: function(index, player, lastplayer, hand) {
              var mX = parseInt(player['pos']['x']);
              var mY = parseInt(player['pos']['y']);
              var that = this;

              if (this.isOverHelpIcon(mX, mY)) {
                  this._instructions.paused = false;
              }

              if (!this.isNotComplete()) {
                  for (i = 0; i < this.sedimentPieces.length; i++) {
                      var piece = this.sedimentPieces[i];
                      if (mX >= (piece.p.x - (piece.width / 2)) && mX < piece.p.x + piece.width && mY >= (piece.p.y - (piece.height / 2)) && mY < piece.p.y + piece.height) {



                          if (player['status'] === 'open' && player['confidence'] === 1 && !that._leftHandArray[index] && !piece.pickedUp && hand === 'left') {
                              //piece.pickedUp = true;

                              piece.minusHitPoints();
                          }
                          if (player['status'] === 'open' && player['confidence'] === 1 && !that._rightHandArray[index] && !piece.pickedUp && hand === 'right') {
                              //piece.pickedUp = true;
                              piece.minusHitPoints();
                          }

                          if (piece.pickedUp) {
                              piece.update(mX, mY);
                          }
                      }

                      piece.move();
                  }

                  for (var i = 1; i < this.dinoPieces.length; i++) {
                      var piece = this.dinoPieces[i];
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

                          if (piece.pickedUp && piece.playerHoldingPiece == index && piece.playerHand == hand && !piece.isBoneInPlace && this.nothingOverPiece(piece)) {
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

              } else {

                  if (!this.showingAnimation) {
                      this.showAnimation();
                  }

                  this.showingAnimation = true;
              }
          },

          showAnimation: function () {
              var that = this;

              (function fade() {
                  var el = document.getElementById('animation-layer');
                  var val = parseFloat(el.style.opacity);
                  if (!((val += .1) > 1)) {
                      el.style.opacity = val;
                      requestAnimationFrame(fade);
                  }
              })();

              var video = document.getElementById('video');

              if (!this.listenerAttached) {
                  video.addEventListener('ended', function (e) {
                      that.reset();

                      var el = document.getElementById('animation-layer');
                       
                      (function fade() {
                          if ((el.style.opacity -= .1) < 0) {
                              el.style.opacity = 0;
                          } else {
                              requestAnimationFrame(fade);
                          }
                      })();
                  });
              }

              this.listenerAttached = true;
              video.play();
          },

          reset: function () {
              this.clearScreen(this.dinoContext);
              this.clearScreen(this.sedimentContext);
              this.clearScreen(this.dinoBackgroundContext);

              this.backgroundCanvas = null;
              this.backgroundContext = null;

              this.touchCanvas = null;
              this.touchContext = null;

              this.dinoCanvas = null;
              this.dinoContext = null;


              this.sedimentCanvas = null;
              this.sedimentContext = null;

              this.dinoBackgroundCanvas = null;
              this.dinoBackgroundContext = null;

              this.dinoPieces = [];
              this.sedimentPieces = [];

              this._leftHandArray = [];
              this._rightHandArray = [];

              this.showingAnimation = false;
              this.hasStartedPlaying = false;

              this.dinoNumber += 1

              this.init();
          },
          
          setRocks: function () {
              if (this.dinoNumber == 1) {
                  this.setStegRocks();
              }

              if (this.dinoNumber == 2) {
                  this.setTrexRocks();
              }

              if (this.dinoNumber == 3) {
                  this.setTricRocks();
              }
              /*for (var i = 0; i < 600; i++) {
                  var rockie = new Sediment(this.randomLocationX(1900, 20), this.randomLocationY(1050, 20), this.sedimentCanvas);
                  this.sedimentPieces.push(rockie);
              }*/
          },

          isNotComplete: function () {
              var complete = true;
              for (var j = 1; j < this.dinoPieces.length; j++) {
                  var bone = this.dinoPieces[j];

                  if (!bone.isBoneInPlace) {
                      complete = false;
                  }

              }

              return complete;
          },

          nothingOverPiece: function (piece) {
              var overlappingPiece = -1;
              for (var j = 0; j < this.sedimentPieces.length; j++) {
                  var rock = this.sedimentPieces[j];
                  if (rock.sprite.overlap(piece)) {
                      overlappingPiece = j;
                      break;
                  }
              }

              return overlappingPiece == -1;
          },

          setDinoPieces: function () {
              if (this.dinoNumber == 1) {

                  var head = new Bones(825, 170, 223, 90, './images/CHOP_DiggingUpDinos_steg-skeleton-skull.png', 510, 550, this.dinoCanvas);
                  var head1 = new Bones(825, 170, 223, 90, './images/CHOP_DiggingUpDinos_steg-skeleton-skull.png', 510, 550, this.dinoCanvas);
                  var upperbody = new Bones(1625, 245, 254, 473, './images/CHOP_DiggingUpDinos_steg-skeleton-ribs.png', 700, 550, this.dinoCanvas);
                  var lowerbody = new Bones(300, 300, 220, 456, './images/CHOP_DiggingUpDinos_steg-skeleton-hips.png', 900, 550, this.dinoCanvas);
                  var tail = new Bones(1455, 800, 548, 252, './images/CHOP_DiggingUpDinos_steg-skeleton-tail.png', 1225, 475, this.dinoCanvas);

              }

              if (this.dinoNumber == 2) {

                  var head = new Bones(150, 925, 222, 232, './images/CHOP_DiggingUpDinos_trex-skeleton-skull.png', 265, 446);
                  var head1 = new Bones(150, 925, 222, 232, './images/CHOP_DiggingUpDinos_trex-skeleton-skull.png', 265, 446);
                  var upperbody = new Bones(1625, 200, 477, 305, './images/CHOP_DiggingUpDinos_trex-skeleton-ribs.png', 565, 450);
                  var lowerbody = new Bones(1425, 750, 509, 471, './images/CHOP_DiggingUpDinos_trex-skeleton-hips.png', 811, 555);
                  var tail = new Bones(550, 150, 993, 276, './images/CHOP_DiggingUpDinos_trex-skeleton-tail.png', 1268, 451);
                  
              }

              if (this.dinoNumber == 3) {
                  
                  var head = new Bones(600, 800, 245, 338, './images/CHOP_DiggingUpDinos_tri-skeleton-skull.png', 525, 480);
                  var head1 = new Bones(600, 800, 245, 338, './images/CHOP_DiggingUpDinos_tri-skeleton-skull.png', 525, 480);
                  var upperbody = new Bones(250, 225, 456, 403, './images/CHOP_DiggingUpDinos_tri-skeleton-ribs.png', 811, 569);
                  var lowerbody = new Bones(1425, 225, 349, 375, './images/CHOP_DiggingUpDinos_tri-skeleton-hips.png', 1056, 581);
                  var tail = new Bones(1700, 600, 364, 228, './images/CHOP_DiggingUpDinos_tri-skeleton-tail.png', 1358, 650);
                  
              }

              this.dinoPieces = [];
              //head.isBoneInPlace = true;
              this.dinoPieces.push(head);
              this.dinoPieces.push(head1);
              this.dinoPieces.push(upperbody);
              this.dinoPieces.push(lowerbody);
              this.dinoPieces.push(tail);
          },
          
          clearScreen: function (context) {
              var context = context;
              context.clearRect(0, 0, 1920, 1080);
          },

          update: function() {

          },

          draw: function () {
              var that = this;
              this.clearScreen(this.dinoContext);
              this.clearScreen(this.sedimentContext);

              if (this.playerAdded) {
                  this._instructions.draw(this._instructionsContext);
              }

              this.dinoPieces.forEach(function (bone, index) {
                  if (bone != undefined && index > 0) {
                      bone.draw();
                  }
              });

              this.artifacts.forEach(function (artifact, index) {
                  artifact.draw();
              });

              

              this.sedimentPieces.forEach(function (rock, index) {
                  if (rock != undefined) {
                     rock.draw();
                  }
              });
          },

          attractLoop: function () {
              var that = this;
              
              that.sedimentPieces[1].p.y += 5
              that.sedimentPieces[5].p.y += 5;
              that.sedimentPieces[20].p.y += 5;
              that.sedimentPieces[27].p.y += 5;
              that.sedimentPieces[16].p.y += 5;
              that.sedimentPieces[7].p.y += 5;
              that.sedimentPieces[38].p.y += 5;
              that.sedimentPieces[35].p.y += 5;

              that.sedimentPieces[3].p.x += 5
              that.sedimentPieces[8].p.x += 5;
              that.sedimentPieces[11].p.x += 5;
              that.sedimentPieces[17].p.x += 5;
              that.sedimentPieces[26].p.x += 5;

              //this.draw();
              setTimeout(function () {
                  that.sedimentPieces[1].p.y -= 5;
                  that.sedimentPieces[5].p.y -= 5;
                  that.sedimentPieces[20].p.y -= 5;
                  that.sedimentPieces[27].p.y -= 5;
                  that.sedimentPieces[16].p.y -= 5;
                  that.sedimentPieces[7].p.y -= 5;
                  that.sedimentPieces[38].p.y -= 5;
                  that.sedimentPieces[35].p.y -= 5;

                  that.sedimentPieces[3].p.x -= 5
                  that.sedimentPieces[8].p.x -= 5;
                  that.sedimentPieces[11].p.x -= 5;
                  that.sedimentPieces[17].p.x -= 5;
                  that.sedimentPieces[26].p.x -= 5;
//                  that.draw();
              }, 750);
              //}
          },

          randomValue: function (min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          },

          setStegRocks: function() {
              this.sedimentPieces.push(new Sediment(740, 70, 520, 500, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(690, 90, 300, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));

              this.sedimentPieces.push(new Sediment(250, 50, 506, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(350, -30, 506, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(230, 280, 506, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));

              this.sedimentPieces.push(new Sediment(140, 310, 706, 672, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
                 
              this.sedimentPieces.push(new Sediment(50, 80, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(140, 100, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(75, 40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(35, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));

              this.sedimentPieces.push(new Sediment(0, -40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(0, -30, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));

              this.sedimentPieces.push(new Sediment(200, -40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(175, -30, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-02.png'));
              this.sedimentPieces.push(new Sediment(300, 30, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(475, 20, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));

              this.sedimentPieces.push(new Sediment(-20,60, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));
              this.sedimentPieces.push(new Sediment(150, 100, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));

              this.sedimentPieces.push(new Sediment(400, -30, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));

              this.sedimentPieces.push(new Sediment(500, 80, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(75, 100, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(305, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(270, 80, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(405, 40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(305, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));



              // Bottom Right
              this.sedimentPieces.push(new Sediment(1250, 650, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));

              this.sedimentPieces.push(new Sediment(1200, 700, 646, 415, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(1225, 820, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1140, 600, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1350, 780, 520, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1450, 800, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(1525, 800, 520, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));

              // Top Right
              this.sedimentPieces.push(new Sediment(1450, 0, 700, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1450, 200, 850, 1000, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));

              this.sedimentPieces.push(new Sediment(1550, 220, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1250, 20, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1275, 140, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));

              this.sedimentPieces.push(new Sediment(1402, 200, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));
              this.sedimentPieces.push(new Sediment(1350, 0, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1575, 50, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1500, 150, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(1602, 250, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-06.png'));
              this.sedimentPieces.push(new Sediment(1700, 300, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(1450, 125, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1574, 0, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));
              this.sedimentPieces.push(new Sediment(1650, 70, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1700, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-02.png'));
              this.sedimentPieces.push(new Sediment(1800, 55, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1674, 20, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-06.png'));
              this.sedimentPieces.push(new Sediment(1749, 110, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-02.png'));
            
              //artifacts
              this.artifacts.push(new Artifact(190, 950, 80, 145, './images/CHOP_DiggingUpDinos_object-30.png'));
              this.sedimentPieces.push(new Sediment(100, 850, 506, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(150, 910, 506, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(60, 900, 306, 200, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));

              this.artifacts.push(new Artifact(590, 950, 66, 55, './images/CHOP_DiggingUpDinos_object-31.png'));
              this.sedimentPieces.push(new Sediment(490, 900, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(510, 900, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(550, 900, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));

              this.artifacts.push(new Artifact(1820, 600, 52, 100, './images/CHOP_DiggingUpDinos_object-28.png'));
              this.sedimentPieces.push(new Sediment(1725, 550, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1675, 575, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(1750, 500, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(1780, 580, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));

          },

          setTricRocks: function() {
              this.sedimentPieces.push(new Sediment(540, 620, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(480, 720, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(350, 680, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(375, 740, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(435, 790, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));


              this.sedimentPieces.push(new Sediment(250, 50, 506, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));

              this.sedimentPieces.push(new Sediment(350, -30, 506, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(230, 280, 506, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));


              this.sedimentPieces.push(new Sediment(50, 80, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(140, 100, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(75, 40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(35, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));

              this.sedimentPieces.push(new Sediment(0, -40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(0, -30, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));

              this.sedimentPieces.push(new Sediment(200, -40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(175, -30, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-02.png'));
              this.sedimentPieces.push(new Sediment(300, 30, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(475, 20, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));

              this.sedimentPieces.push(new Sediment(-20, 60, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));
              this.sedimentPieces.push(new Sediment(150, 100, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));

              this.sedimentPieces.push(new Sediment(400, -30, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));

              this.sedimentPieces.push(new Sediment(500, 80, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(75, 100, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(305, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(270, 80, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(405, 40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(305, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));



              // Bottom Right
              this.sedimentPieces.push(new Sediment(1435, 560, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(1575, 640, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1560, 540, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1690, 620, 520, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1450, 470, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));

              // Top Right
              this.sedimentPieces.push(new Sediment(1200, 120, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1250, 20, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1275, 140, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));

              this.sedimentPieces.push(new Sediment(1402, 200, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));
              this.sedimentPieces.push(new Sediment(1350, 0, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1575, 50, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1500, 150, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(1602, 250, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-06.png'));
              this.sedimentPieces.push(new Sediment(1700, 300, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(1450, 125, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1574, 0, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));
              this.sedimentPieces.push(new Sediment(1490, 70, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1700, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-02.png'));
              this.sedimentPieces.push(new Sediment(1800, 55, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1674, 20, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-06.png'));
              this.sedimentPieces.push(new Sediment(1749, 110, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-02.png'));

              //artifacts
              this.artifacts.push(new Artifact(190, 950, 80, 145, './images/CHOP_DiggingUpDinos_object-30.png'));
              this.sedimentPieces.push(new Sediment(100, 850, 506, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(150, 910, 506, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(60, 900, 306, 200, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));


              this.artifacts.push(new Artifact(1820, 600, 52, 100, './images/CHOP_DiggingUpDinos_object-28.png'));
              this.sedimentPieces.push(new Sediment(1725, 550, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1675, 575, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(1750, 500, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(1780, 580, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.artifacts.push(new Artifact(990, 950, 66, 55, './images/CHOP_DiggingUpDinos_object-31.png'));
              this.sedimentPieces.push(new Sediment(890, 900, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(910, 900, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(950, 900, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));

          },

          setTrexRocks: function() {
              this.sedimentPieces.push(new Sediment(-40, 820, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(150, 820, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(50, 980, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(75, 840, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(35, 790, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));

              this.sedimentPieces.push(new Sediment(50, 80, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(75, 40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(35, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));

              this.sedimentPieces.push(new Sediment(0, -40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(0, -30, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));

              this.sedimentPieces.push(new Sediment(200, -40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(175, -30, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-02.png'));


              this.sedimentPieces.push(new Sediment(600, -40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(675, -30, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-02.png'));


              this.sedimentPieces.push(new Sediment(600, 30, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-06.png'));
              this.sedimentPieces.push(new Sediment(675, 20, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));

              this.sedimentPieces.push(new Sediment(300, 30, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(475, 20, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));

              this.sedimentPieces.push(new Sediment(925, 200, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));
              this.sedimentPieces.push(new Sediment(150, 100, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));

              this.sedimentPieces.push(new Sediment(840, -20, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(400, -30, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));

              this.sedimentPieces.push(new Sediment(500, 80, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(705, 40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(305, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(270, 80, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(405, 40, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(305, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));



              // Bottom Right
              this.sedimentPieces.push(new Sediment(1240, 820, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1350, 820, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1250, 980, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(1275, 840, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1235, 790, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(1340, 520, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1350, 725, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1250, 780, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(1275, 840, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1235, 690, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(1440, 620, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1350, 820, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1200, 610, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(1275, 840, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));

              this.sedimentPieces.push(new Sediment(1560, 740, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1150, 820, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1300, 480, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(1475, 540, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1375, 540, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1365, 500, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));

              // Top Right
              this.sedimentPieces.push(new Sediment(1402, 200, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));
              this.sedimentPieces.push(new Sediment(1350, 0, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1575, 50, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1500, 150, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(1602, 250, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-06.png'));
              this.sedimentPieces.push(new Sediment(1700, 300, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(1450, 125, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1574, 0, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-04.png'));
              this.sedimentPieces.push(new Sediment(1490, 70, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(1700, 90, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-02.png'));
              this.sedimentPieces.push(new Sediment(1800, 55, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(1674, 20, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-06.png'));
              this.sedimentPieces.push(new Sediment(1749, 110, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-02.png'));


              //artifacts
              this.artifacts.push(new Artifact(190, 950, 80, 145, './images/CHOP_DiggingUpDinos_object-30.png'));
              this.sedimentPieces.push(new Sediment(100, 850, 506, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(150, 910, 506, 400, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(60, 900, 306, 200, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));

              this.artifacts.push(new Artifact(590, 950, 66, 55, './images/CHOP_DiggingUpDinos_object-31.png'));
              this.sedimentPieces.push(new Sediment(490, 900, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(510, 900, 520, 800, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-01.png'));
              this.sedimentPieces.push(new Sediment(550, 900, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));

              this.artifacts.push(new Artifact(100, 600, 52, 100, './images/CHOP_DiggingUpDinos_object-28.png'));
              this.sedimentPieces.push(new Sediment(10, 550, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
              this.sedimentPieces.push(new Sediment(25, 575, 546, 315, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-05.png'));
              this.sedimentPieces.push(new Sediment(30, 500, 552, 324, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-07.png'));
              this.sedimentPieces.push(new Sediment(20, 580, 506, 472, this.sedimentCanvas, './images/CHOP_DiggingUpDinos_rock-03.png'));
          },
          _timer: 0,
          _lastFrameTime: 0,
          _totalSeconds: 0,
         
          backgroundCanvas: null,
          backgroundContext: null,

          touchCanvas: null,
          touchContext: null,

          dinoCanvas: null,
          dinoContext: null,

          

          sedimentCanvas: null,
          sedimentContext: null,

          dinoBackgroundCanvas: null,
          dinoBackgroundContext: null,

          dinoPieces: [],
          sedimentPieces: [],

          _leftHandArray: [],
          _rightHandArray: [],
          _activePlayerCount: 1,
          dinoNumber: 1,
          artifacts: [],
          showingAnimation: false,
          _instructionsCanvas: null,
          _instructionsContext: null,
          _instructions: new Instructions(),
          playerAdded: false,
          listenerAttached: false,
          hasStartedPlaying: false

          
      }
    );

    WinJS.Namespace.define('App', {
        ClimbCanvas: climbCanvas
    });

})();