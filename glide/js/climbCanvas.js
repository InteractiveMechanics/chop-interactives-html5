(function () {
    "use strict";

    var constants = {};

    var climbCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {

              this.ballon = [];
              this.sandBags = [];

              this.cloudCanvas = document.getElementById('cloud-canvas');
              this.fadedBallonCanvas = document.getElementById('faded-ballons-canvas');
              this.airBallonCanvas = document.getElementById('airballon-canvas');
              this.sandbagCanvas = document.getElementById('canvas2');

              this.cloudContext = this.cloudCanvas.getContext("2d");
              this.fadedBallonContext = this.fadedBallonCanvas.getContext("2d");
              this.airBallonContext = this.airBallonCanvas.getContext("2d");
              this.sandbagContext = this.sandbagCanvas.getContext("2d");

              this._instructionsCanvas = document.getElementById('instructionsCanvas');
              this._instructionsContext = this._instructionsCanvas.getContext('2d');

              this._balloon1 = new AirBallon(5, 5, 1, this.airBallonCanvas, 'blue');
              this._balloon2 = new AirBallon(5, 5, 1, this.airBallonCanvas, 'orange');
              this._balloon3 = new AirBallon(5, 5, 1, this.airBallonCanvas, 'pink');

              this.showInstructions();
          },

          setup: function() {

              var that = this;

              that.setupClouds();
              //Make Airbloon

              var fadedBallon = that.getFadedBallon();
              that.fadedBallons.push(
                  new FadedBallon(fadedBallon, that.fadedCanvas)
              );

              var fadedBallon = that.getFadedBallon();
              that.fadedBallons.push(
                  new FadedBallon(fadedBallon, that.fadedCanvas)
              );

              var fadedBallon = that.getFadedBallon();
              that.fadedBallons.push(
                  new FadedBallon(fadedBallon, that.fadedCanvas)
              );

              var fadedBallon = that.getFadedBallon();
              that.fadedBallons.push(
                  new FadedBallon(fadedBallon, that.fadedCanvas)
              );

              setInterval(function () {
                  var fadedBallon = that.getFadedBallon();

                  if (that.fadedBallons.length < 5) {
                      that.fadedBallons.push(
                          new FadedBallon(fadedBallon, that.fadedCanvas)
                      );
                  }
              }, 10000);

              

              setInterval(function () {
                  if (that.sandBags.length < 3) {
                      var cloud = that.getRandomCloud();
                      if (cloud) {
                          
                          var powerup = that.getPowerUp();
                          var bag = new SandBag(that.sandbagCanvas, powerup);
                          bag.x = cloud.x + (cloud.width / 2);
                          bag.y = cloud.y + (cloud.height / 2);
                          that.sandBags.push(bag);
                      }
                  }
              }, 3500);
          },

          getCloud: function () {

              var that = this;

              var randomNumber = that.randomValue(1, 9);

              if (randomNumber == 1) {
                  return new LargeCloud(1, that.cloudCanvas);
              }


              if (randomNumber == 2) {
                  console.log('newmedcloud');
                  return new MediumCloud(1, that.cloudCanvas);
              }

              if (randomNumber == 3) {
                  return new SmallCloud(1, that.cloudCanvas);
              }

              if (randomNumber == 7) {
                  return new LargeCloud(1, that.cloudCanvas);
              }


              if (randomNumber == 6) {
                  console.log('newmedcloud');
                  return new MediumCloud(1, that.cloudCanvas);
              }

              if (randomNumber == 8) {
                  return new SmallCloud(1, that.cloudCanvas);
              }

              if (randomNumber == 9) {
                  return new LargeCloud(1, that.cloudCanvas);
              }

              if (randomNumber == 10) {
                  console.log('newmedcloud');s
                  return new MediumCloud(1, that.cloudCanvas);
              }

              if (randomNumber == 4) {
                  return new SmallCloud(1, that.cloudCanvas);
              }

              if (randomNumber == 5) {
                  return new LargeCloud(1, that.cloudCanvas);
              }
          },

          setupClouds: function () {

              var that = this;
              setInterval(function () {
                  if (that.cloudArray.length < 7) {

                      var cloud = that.getCloud();
                      that.cloudArray.push(cloud);
                  }
              }, 7500);
          },

          getFadedBallon: function () {
              return {
                  x: this.randomValue(50, 1880),
                  y: this.randomValue(1180, 1380),
                  width: 77,
                  height: 109,
                  speed: this.randomValue(2, 8),
                  sprite: new Sprite('ballon-sm', new ImagePainter('./images/bkgr-balloon-sm.png'))
              }
          },

          getRandomCloud: function() {
              return this.cloudArray[Math.floor(Math.random() * this.cloudArray.length)];
          },

          randomValue: function (min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          },

          //createAirBallon: function (p) {
          //    if (!this.ballon[p]) {
          //        this.ballon[p] = new AirBallon(5, 5, 1, this.airBallonCanvas);
          //    }
          //    //this._boats[p].playerHasEntered(p);
          //},

          collides: function(a, b) {
              return a.x < b.x + (b.width) &&
                a.x + (a.width * .25) > b.x &&
                a.y < b.y + (b.height) &&
                a.y + (a.height * .25) > b.y;
          },

          getPowerUp: function () {
              var random = Math.floor(Math.random() * 10) + 1;

              if (random < 4) {
                  return 'basket';
              }

              if (random == 5 || random == 6) {
                  return 'fire';
              }

              if (random > 6) {
                  return 'ribbon';
              }

              return 'basket';
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
          clearScreen: function (context) {
              var context = context;
              context.clearRect(0, 0, 1920, 1080);
          },

          sleep: function() {
              var e = new Date().getTime() + (150);
              while (new Date().getTime() <= e) {}
          },
          attractLoop: function () {
              var that = this;
          },

          moveBallon: function (p, playerData, balloon) {
              var properX = playerData['right']['pos']['x'];
              var properY = playerData['right']['pos']['y'];
              if (balloon) {
                  if (balloon.isActive == false) {
                      balloon.isActive = true;
                  }
                      var xDistance = properX - balloon.x;
                      var yDistance = properY - balloon.y;
                      var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

                      if (distance > 1) {
                          balloon.x += xDistance * balloon.getSpeed();
                          balloon.y += yDistance * balloon.getSpeed();
                      }
              }
              
          },

          update: function () {
              for (var i = 0; i < this.fadedBallons.length; ++i) {
                  if (this.fadedBallons[i].outofbounds == true) {
                      this.fadedBallons.splice(i--, 1);
                  } else {
                      this.fadedBallons[i].update();
                  }
              }

              for (var i = 0; i < this.cloudArray.length; ++i) {
                  if (this.cloudArray[i].outofbounds == true) {
                      this.cloudArray.splice(i--, 1);
                  } else {
                      this.cloudArray[i].update();
                  }
              }

              for (var i = 0; i < this.sandBags.length; ++i) {
                  if (this.sandBags[i].outofbounds == true) {
                      this.sandBags.splice(i--, 1);
                  } else {
                      this.sandBags[i].update();
                  }
              }

              this._balloon1.update();
              this._balloon2.update();
              this._balloon3.update();
          },

          draw: function () {

              this.cloudContext.clearRect(0, 0, 1920, 1080);
              this.fadedBallonContext.clearRect(0, 0, 1920, 1080);
              this.airBallonContext.clearRect(0, 0, 1920, 1080);
              this.sandbagContext.clearRect(0, 0, 1920, 1080);

              var that = this;

              if (this.playerAdded) {
                  this._instructions.draw(this._instructionsContext);
              }
              
              that.cloudArray.forEach(function (c) {
                  c.draw();
              });

              that.fadedBallons.forEach(function (fb) {
                  fb.draw();
              });

              that.sandBags.forEach(function (sb) {
                  sb.draw();
              });

              if (this._balloon1.isActive == true) {
                  this._balloon1.draw();
                  that.sandBags.forEach(function (sb) {
                      if (that.collides(sb, that._balloon1)) {

                          sb.outofbounds = true;
                          switch (sb.powerUpType) {
                              case "fire":
                                  that._balloon1.setSpeedBoost();
                                  break;
                              case "basket":
                                  that._balloon1.changeBaskets();
                                  break;
                              case "ribbon":
                                  that._balloon1.addRibbon();
                                  break;
                          }


                      }
                  });
              };
              if (this._balloon2.isActive == true) {
                  this._balloon2.draw();
                  that.sandBags.forEach(function (sb) {
                      if (that.collides(sb, that._balloon2)) {

                          sb.outofbounds = true;
                          switch (sb.powerUpType) {
                              case "fire":
                                  that._balloon2.setSpeedBoost();
                                  break;
                              case "basket":
                                  that._balloon2.changeBaskets();
                                  break;
                              case "ribbon":
                                  that._balloon2.addRibbon();
                                  break;
                          }


                      }
                  });
              }

              if (this._balloon3.isActive == true) {
                  this._balloon3.draw();
                  that.sandBags.forEach(function (sb) {
                      if (that.collides(sb, that._balloon3)) {

                          sb.outofbounds = true;
                          switch (sb.powerUpType) {
                              case "fire":
                                  that._balloon3.setSpeedBoost();
                                  break;
                              case "basket":
                                  that._balloon3.changeBaskets();
                                  break;
                              case "ribbon":
                                  that._balloon3.addRibbon();
                                  break;
                          }


                      }
                  });
              }
              
              

              //that.ballon.forEach(function (ballon, index) {
              //    if (ballon != undefined) {
              //        ballon.draw();
              //    }
              //    that.sandBags.forEach(function(sb){
              //        if(that.collides(sb, ballon)) {

              //            sb.outofbounds = true;
              //            switch(sb.powerUpType) {
              //                case "fire":
              //                    ballon.setSpeedBoost();
              //                    break;
              //                case "basket":
              //                    ballon.changeBaskets();
              //                    break;
              //                case "ribbon":
              //                    ballon.addRibbon();
              //                    break;
              //            }
			
			
              //        }
              //    });
              //});

              
          },

          checkIndex: function(index) {
              return false;
          },

          _timer: 0,
          _lastFrameTime: 0,
          _totalSeconds: 0,
          _backgroundCanvas: null,
          _backgroundContext: null,
          liteBrightCanvas: null,
          hightlightCanvas: null,

          cloudCanvas: null,
          fadedBallonCanvas: null,
          airBallonCanvas: null,
          sandbagCanvas: null,

          cloudContext: null,
          fadedBallonContext: null,
          airBallonContext: null,
          sandbagContext: null,

          cloudArray: [],
          fadedBallons: [],
          sandBags: [],
          ballons: [],
          
          rightHandArray: [],
          leftHandArray: [],

          liteBrightWidth: 0,
          liteBrightHeigh: 0,
          _instructionsCanvas: null,
          _instructionsContext: null,
          _instructions: new Instructions(),
          playerAdded: false,
          randomNumber: []

      }
    );

    WinJS.Namespace.define('App', {
        ClimbCanvas: climbCanvas
    });

})();