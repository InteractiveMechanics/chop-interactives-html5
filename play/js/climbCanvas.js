(function () {
    "use strict";

    var constants = {};

    var climbCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              this._backgroundCanvas = document.getElementById('background');
              this.liteBrightCanvas = document.getElementById('litebrite');
              this.hightlightCanvas = document.getElementById('highlight');

              this._instructionsCanvas = document.getElementById('instructionsCanvas');
              this._instructionsContext = this._instructionsCanvas.getContext('2d');

              this._backgroundContext = this._backgroundCanvas.getContext('2d');

              this._backgroundContext.rect(743, 0, 410, 56);
              this._backgroundContext.fillStyle = "black";
              this._backgroundContext.fill();

              this.liteBrightWidth = ((1920 - (2 * this.liteBrigthSpacing)) / this.numberOfColumns) - this.liteBrigthSpacing;
              this.liteBrightHeight = ((1080 - (2 * this.liteBrigthSpacing)) / this.numberOfRows) - this.liteBrigthSpacing;

              this.setLiteBrites();
              var removeIconDetail = this.liteBrights[22];
              this.liteBrights[22] = new RemoveIcon(removeIconDetail.x, removeIconDetail.y, removeIconDetail.canvas);

              this.rightHandArray = [this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite()];
              this.leftHandArray = [this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite()];

              this.liteBrights[9].sprite = new Sprite('default', new ImagePainter('./images/litebrites/LB_blue.png'));
              this.liteBrights[10].sprite = new Sprite('default', new ImagePainter('./images/litebrites/LB_green.png'));
              this.liteBrights[11].sprite = new Sprite('default', new ImagePainter('./images/litebrites/LB_orange.png'));
              this.liteBrights[12].sprite = new Sprite('default', new ImagePainter('./images/litebrites/LB_pink.png'));
              this.liteBrights[13].sprite = new Sprite('default', new ImagePainter('./images/litebrites/LB_yellow.png'));

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
          setLiteBrites: function () {
              var dotDiameter, xMargin, yMargin = 0;

              if (this.liteBrightWidth > this.liteBrightHeight) {
                  dotDiameter = this.liteBrightHeight;
                  xMargin = (1920 - ((2 * this.liteBrigthSpacing) + (this.numberOfColumns * dotDiameter))) / this.numberOfColumns;
                  yMargin = this.liteBrigthSpacing;
              } else {
                  dotDiameter = this.liteBrightWidth;
                  xMargin = this.liteBrigthSpacing;
                  yMargin = (1080 - ((2 * this.liteBrigthSpacing) + (this.numberOfRows * dotDiameter))) / this.numberOfRows;
              }

              var dotRadius = dotDiameter * 0.5;
              for (var i = 0; i < this.numberOfRows; i++) {
                  for (var j = 0; j < this.numberOfColumns; j++) {
                      var x = (j * (dotDiameter + xMargin)) + this.liteBrigthSpacing + (xMargin / 2) + dotRadius;
                      var y = (i * (dotDiameter + yMargin)) + this.liteBrigthSpacing + (yMargin / 2) + dotRadius;
                      this.createLiteBrights(x, y);
                  }
              }

             
          },
          createLiteBrights: function(x, y) {
              var liteBrite = new LiteBrite(x, y, this.liteBrightCanvas);
              liteBrite.loadLiteBrites();
	
              this.liteBrights.push(liteBrite);
              this.highlights.push(new Highlight(x, y, this.hightlightCanvas));
          },
          clearScreen: function (context) {
              var context = context;
              context.clearRect(0, 0, 1920, 1080);
          },

          isOverLiteBrite: function(mX, mY, liteBright) {
              return (mX >= liteBright.x && mX < liteBright.x + liteBright.width && mY >= liteBright.y && mY < liteBright.y + liteBright.height);
          },

          isOverHelpIcon: function (mX, mY) {
              return (mX >= this._instructions.x && mX < this._instructions.x + 200 && mY >= this._instructions.y && mY < this._instructions.y + 200);
          },

          sleep: function() {
              var e = new Date().getTime() + (150);
              while (new Date().getTime() <= e) {}
          },
          attractLoop: function () {
              this.randomNumberArray = [this.randomValue(60, 250), this.randomValue(60, 250), this.randomValue(60, 250), this.randomValue(60, 250), this.randomValue(60, 370), this.randomValue(60, 370), this.randomValue(60, 370), this.randomValue(60, 370), this.randomValue(60, 370), this.randomValue(60, 370), this.randomValue(60, 370), this.randomValue(60, 370)]
              var that = this;
              this.liteBrights[this.randomNumberArray[0]].sprite = this.randomSprite();
              this.liteBrights[this.randomNumberArray[1]].sprite = this.randomSprite();
              this.liteBrights[this.randomNumberArray[2]].sprite = this.randomSprite();
              this.liteBrights[this.randomNumberArray[3]].sprite = this.randomSprite();
              this.liteBrights[this.randomNumberArray[4]].sprite = this.randomSprite();
              this.liteBrights[this.randomNumberArray[5]].sprite = this.randomSprite();
              this.liteBrights[this.randomNumberArray[6]].sprite = this.randomSprite();
              this.liteBrights[this.randomNumberArray[7]].sprite = this.randomSprite();
              this.liteBrights[this.randomNumberArray[8]].sprite = this.randomSprite();
              this.liteBrights[this.randomNumberArray[9]].sprite = this.randomSprite();
              this.liteBrights[this.randomNumberArray[10]].sprite = this.randomSprite();
              this.liteBrights[this.randomNumberArray[11]].sprite = this.randomSprite();
             
              setTimeout(function () {
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
                  that.liteBrights[that.randomValue(60, 250)].sprite = new Sprite('default', new ImagePainter('./images/LB_gray.png'));
              }, 1500);
              //}
          },

          randomSprite: function(){
              var rand = this.randomValue(0, 5);

              if(rand == 0) {
                  return new Sprite('default', new ImagePainter('./images/litebrites/LB_blue.png'));
              } else if(rand == 1) {
                  return new Sprite('default', new ImagePainter('./images/litebrites/LB_green.png'));
              } else if(rand == 2) {
                  return new Sprite('default', new ImagePainter('./images/litebrites/LB_orange.png'));
              } else if(rand == 3) {
                  return new Sprite('default', new ImagePainter('./images/litebrites/LB_pink.png'));
              } else if(rand == 4) {
                  return new Sprite('default', new ImagePainter('./images/litebrites/LB_yellow.png'));
              } else {
                  return new Sprite('default', new ImagePainter('./images/litebrites/LB_orange.png'));
              }
          },

          checkLiteBrites: function (index, player, lastPlayer, hand) {
              var that = this;
              var mouseX = player['pos']['x'];
              var mouseY = player['pos']['y'];

              if (this.isOverHelpIcon(mouseX, mouseY)) {
                  this._instructions.paused = false;
              }

              for (var i = 0; i < this.highlights.length; i++) {

                  if (i == 9 || i == 10 || i == 11 || i == 12 || i == 13) {
                      var highlight = this.highlights[i];

                      if (this.isOverLiteBrite(mouseX, mouseY, highlight) && player['confidence'] == 1) {
                          if (hand == 'right') {
                              this.rightHandArray[index] = this.liteBrights[i].sprite;
                          }

                          if (hand == 'left') {
                              this.leftHandArray[index] = this.liteBrights[i].sprite;;
                          }
                      }

                  }
                  
                  if (this.checkIndex(i)) {
                      var liteBright = this.liteBrights[i];
                      var highlight = this.highlights[i];

                      if (this.isOverLiteBrite(mouseX, mouseY, highlight) && player['status'] == 'closed' && player['confidence'] == 1) {
                          liteBright.sprite = liteBright.gray
                      }


                      if (this.isOverLiteBrite(mouseX, mouseY, highlight) && player['status'] == 'open' && player['confidence'] == 1) {

                          if (hand == 'right' && this.rightHandArray[index])  {
                              liteBright.sprite = this.rightHandArray[index];
                          }

                          if (hand == 'left' && this.leftHandArray[index]) {
                              liteBright.sprite = this.leftHandArray[index];
                          }
                          
                      }
                  }

                  if (i == 22) {

                      var liteBright = this.liteBrights[i];
                      var highlight = this.highlights[i];

                      if (this.isOverLiteBrite(mouseX, mouseY, highlight) && player['status'] == 'closed' && player['confidence'] == 1) {
                          this.turnAllGray();

                          if(index > -1) {
                            this.rightHandArray[index] = null
                            this.leftHandArray[index] = null;
                          }

                          this.rightHandArray = [this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite()];
                          this.leftHandArray = [this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite(), this.randomSprite()];

                      }
                  }

              }    
          },


          turnAllGray: function () {
              var that = this;
              this.liteBrights.forEach(function (lite, index) {
                  if (lite != undefined && that.checkIndex(index)) {
                      lite.makeGray();
                  }
              });
          },

          update: function() {

          },

          draw: function () {
              var that = this;

              if (this.playerAdded) {
                  this._instructions.draw(this._instructionsContext);
              }
              

              this.liteBrights.forEach(function (lite, index) {
                  if (lite) {
                      lite.draw();
                  }
              });

              this.highlights.forEach(function (highlight, index) {
                  if (highlight) {
                      highlight.draw();
                  }
              });

          },

          checkIndex: function(index) {
              return index != 22 && index != 9 && index != 10 && index != 11 && index != 12 && index != 13;
          },

          randomValue: function (min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          },

          _timer: 0,
          _lastFrameTime: 0,
          _totalSeconds: 0,
          _backgroundCanvas: null,
          _backgroundContext: null,
          liteBrightCanvas: null,
          hightlightCanvas: null,

          liteBrigthSpacing: -42,
          numberOfRows: 17, 
          numberOfColumns: 24,

          liteBrights: [],
          highlights: [],
          
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