(function () {
    "use strict";

    var constants = {};

    var climbCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              this.rightHandArray[0] = [0, 0, 0, 0, false, 'rgba(224,68,55,1)'];
              this.rightHandArray[1] = [0, 0, 0, 0, false, 'rgba(61,100,168,1)'];
              this.rightHandArray[2] = [0, 0, 0, 0, false, 'rgba(253,240,81,1)'];
              this.rightHandArray[3] = [0, 0, 0, 0, false, 'rgba(116,170,91,1)'];
              this.rightHandArray[4] = [0, 0, 0, 0, false, 'rgba(144,42,135,1)'];
              this.rightHandArray[5] = [0, 0, 0, 0, false, 'rgba(226,125,48,1)'];

              this.rightCursorArray[0] = [0, 0, 0, 0, false, 'rgba(224,68,55,1)'];
              this.rightCursorArray[1] = [0, 0, 0, 0, false, 'rgba(61,100,168,1)'];
              this.rightCursorArray[2] = [0, 0, 0, 0, false, 'rgba(253,240,81,1)'];
              this.rightCursorArray[3] = [0, 0, 0, 0, false, 'rgba(116,170,91,1)'];
              this.rightCursorArray[4] = [0, 0, 0, 0, false, 'rgba(144,42,135,1)'];
              this.rightCursorArray[5] = [0, 0, 0, 0, false, 'rgba(226,125,48,1)'];

              this.leftHandArray[0] = [0, 0, 0, 0, false, 'rgba(224,68,55,1)'];
              this.leftHandArray[1] = [0, 0, 0, 0, false, 'rgba(61,100,168,1)'];
              this.leftHandArray[2] = [0, 0, 0, 0, false, 'rgba(253,240,81,1)'];
              this.leftHandArray[3] = [0, 0, 0, 0, false, 'rgba(116,170,91,1)'];
              this.leftHandArray[4] = [0, 0, 0, 0, false, 'rgba(144,42,135,1)'];
              this.leftHandArray[5] = [0, 0, 0, 0, false, 'rgba(226,125,48,1)'];

              this.leftCursorArray[0] = [0, 0, 0, 0, false, 'rgba(224,68,55,1)'];
              this.leftCursorArray[1] = [0, 0, 0, 0, false, 'rgba(61,100,168,1)'];
              this.leftCursorArray[2] = [0, 0, 0, 0, false, 'rgba(253,240,81,1)'];
              this.leftCursorArray[3] = [0, 0, 0, 0, false, 'rgba(116,170,91,1)'];
              this.leftCursorArray[4] = [0, 0, 0, 0, false, 'rgba(144,42,135,1)'];
              this.leftCursorArray[5] = [0, 0, 0, 0, false, 'rgba(226,125,48,1)'];


              this.ispainting = false;
              this.paintCanvas = [];
              this.paintContext = [];

              this.mainCanvas = document.getElementById('main-canvas');
              this.mainContext = this.mainCanvas.getContext("2d");


              this.mainCanvas.width = 1920;
              this.mainCanvas.height = 1080;

              this.bkgdCanvas = document.getElementById('bkgd-canvas');
              this.bkgdContext = this.bkgdCanvas.getContext("2d");


              this.bkgdCanvas.width = 1920;
              this.bkgdCanvas.height = 1080;

              this.paintCanvas[0] = document.getElementById('paint-canvas-1');
              this.paintContext[0] = this.paintCanvas[0].getContext("2d");

              this.paintCanvas[0].width = 1920;
              this.paintCanvas[0].height = 1080;

              this.paintCanvas[1] = document.getElementById('paint-canvas-2');
              this.paintContext[1] = this.paintCanvas[1].getContext("2d");

              this.paintCanvas[1].width = 1920;
              this.paintCanvas[1].height = 1080;

              this.paintCanvas[2] = document.getElementById('paint-canvas-3');
              this.paintContext[2] = this.paintCanvas[2].getContext("2d");

              this.paintCanvas[2].width = 1920;
              this.paintCanvas[2].height = 1080;

              this.paintCanvas[3] = document.getElementById('paint-canvas-4');
              this.paintContext[3] = this.paintCanvas[3].getContext("2d");

              this.paintCanvas[3].width = 1920;
              this.paintCanvas[3].height = 1080;

              this.paintCanvas[4] = document.getElementById('paint-canvas-5');
              this.paintContext[4] = this.paintCanvas[4].getContext("2d");

              this.paintCanvas[4].width = 1920;
              this.paintCanvas[4].height = 1080;

              this.paintCanvas[5] = document.getElementById('paint-canvas-6');
              this.paintContext[5] = this.paintCanvas[5].getContext("2d");

              this.effectsCanvas = document.getElementById('effects-canvas');
              this.effectsContext = this.effectsCanvas.getContext("2d");

              this.uiCanvas = document.getElementById('paint-ui-canvas');
              this.uiContext = this.uiCanvas.getContext("2d");

              this.paintCanvas[5].width = 1920;
              this.paintCanvas[5].height = 1080;
              

              this._instructionsCanvas = document.getElementById('instructionsCanvas');
              this._instructionsContext = this._instructionsCanvas.getContext('2d');

              this.veilCanvas = document.getElementById('veil-canvas');
              this.veilContext = this.veilCanvas.getContext("2d");

              this.veilCanvas.width = 1920;
              this.veilCanvas.height = 1080;
              

              this.mainContext.fillStyle = '#ffffff';

              this.isMouseDown = false;
              this.mousePos = {
                  x: -1,
                  y: -1
              };
              this.mouseX = this.mousePos.x;
              this.mouseY = this.mousePos.y;
              this.lastMouseX;
              this.lastMouseY;

              this.numUsers = 6;

              this.paintings = [];
              this.newThumbnail = true;
              this.createPaintings();

              this.timer = [];
              this.seconds = 15;

              for (var i = 0; i < this.seconds +1; i++) {
                  this.timer[i] = new Image();
                  this.timer[i].src = './images/timer' + i + '.png';
              }

              this.light = new Object();

              this.light.outline = new Image();
              this.light.outline.src = './images/intro-light-outline.png';

              this.light.red = new Image();
              this.light.red.src = './images/intro-red.png';
              this.light.yellow = new Image();
              this.light.yellow.src = './images/intro-yellow.png';
              this.light.green = new Image();
              this.light.green.src = './images/intro-green.png';

              this.otherPlayerHover = false;

              
              this.startButton = new Button('start', './images/btn-play', 1300, 438, 185, this.mainCanvas);
              this.clearButton = new Button('clear', './images/btn-undo', 1750, 86, 86, this.uiCanvas);
              this.hangThumbnails();
              this.veilOpacity = 0;
              this.bkgdOpacity = 0;
              this.mainTimerStarted = false;
              this.lightTimerStarted = false;
              this.lightOp = 0;
              this.redOp = 0;
              this.yellowOp = 0;
              this.greenOp = 0;
              this.paintStart = false;
              this.ispainting = false;
              this.paintingStopped = false;
              this.seconds = 15;
              this.lightSeconds = 0;
              this.timer1 = 60;
              this.timer2 = this.seconds * 60;
              this.videoStart();
              
              
          },

          createPaintings: function() {
                  for (var i = 0; i < this.numUsers; i++) {
                      this.paintings[i] = new Painting(this.paintCanvas[i], 0, 0, this.paintCanvas[i].width, this.paintCanvas[i].height, 20, this.rightHandArray[i][5]);
                      //console.log('painting created');
                  }
          },


          paint: function (player, hand, index) {
              console.log(this.seconds);
              var painting = this.paintings[index];
              var properX = player['pos']['x'];
              var properY = player['pos']['y'];
              var isOpen = true;

              if (player['status'] == 'closed') {
                  isOpen = false;
              }

              //move cursors closer to hands
              if (hand == 'right') {
                  if (this.rightCursorArray[index][2] == 0 && this.rightCursorArray[index][3] == 0) {
                      this.rightCursorArray[index][2] = properX;
                      this.rightCursorArray[index][3] = properY;
                  }

                  var xDistance = properX - this.rightCursorArray[index][2];
                  var yDistance = properY - this.rightCursorArray[index][3];
                  var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

                  this.rightCursorArray[index][0] = this.rightCursorArray[index][2];
                  this.rightCursorArray[index][1] = this.rightCursorArray[index][3];

                  if (distance > 1) {
                      this.rightCursorArray[index][2] += xDistance * .2;
                      this.rightCursorArray[index][3] += yDistance * .2;
                  }
                  console.log(this.rightCursorArray[index][0], this.rightCursorArray[index][1], this.rightCursorArray[index][2], this.rightCursorArray[index][3])
              }

              if (hand == 'left') {
                  if (this.leftCursorArray[index][2] == 0 && this.leftCursorArray[index][3] == 0) {
                      this.leftCursorArray[index][2] = properX;
                      this.leftCursorArray[index][3] = properY;
                  }

                  var xDistance = properX - this.leftCursorArray[index][2];
                  var yDistance = properY - this.leftCursorArray[index][3];
                  var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

                  this.leftCursorArray[index][0] = this.leftCursorArray[index][2];
                  this.leftCursorArray[index][1] = this.leftCursorArray[index][3];

                  if (distance > 1) {
                      this.leftCursorArray[index][2] += xDistance * .2;
                      this.leftCursorArray[index][3] += yDistance * .2;
                  }
                  console.log(this.leftCursorArray[index][0], this.leftCursorArray[index][1], this.leftCursorArray[index][2], this.leftCursorArray[index][3])
              }
              


              if (hand == 'right' && isOpen) {
                  
                  
                  //effects for painting;
                  //this.effectsContext.beginPath();
                  //this.effectsContext.arc(this.rightCursorArray[index][2], this.rightCursorArray[index][3], 10, 0, 2 * Math.PI);
                  //this.effectsContext.closePath();
                  //this.effectsContext.fillStyle = this.rightHandArray[index][5];
                  //this.effectsContext.fill();
                  this.effectsContext.lineWidth = 20;
                  this.effectsContext.lineJoin = 'round';
                  this.effectsContext.lineCap = 'round';
                  this.effectsContext.strokeStyle = this.rightHandArray[index][5];
                  this.effectsContext.beginPath();
                  this.effectsContext.moveTo(this.rightCursorArray[index][0], this.rightCursorArray[index][1]);
                  this.effectsContext.lineTo(this.rightCursorArray[index][2], this.rightCursorArray[index][3]);
                  this.effectsContext.closePath();
                  this.effectsContext.stroke();
                  
                  
                  

                  //actual painting
                  painting.context.strokeStyle = this.rightHandArray[index][5];
                  painting.context.beginPath();
                  painting.context.moveTo(this.rightCursorArray[index][0], this.rightCursorArray[index][1]);
                  painting.context.lineTo(this.rightCursorArray[index][2], this.rightCursorArray[index][3]);
                  painting.context.closePath();
                  painting.context.stroke();
                  painting.painted = true;
                  this.rightHandArray[index][4] = true;
              }
              else if (hand == 'right') {
                  this.rightHandArray[index][4] = false;
              }
              if (hand == 'left' && isOpen) {


                  //effects for painting;
                  //this.effectsContext.beginPath();
                  //this.effectsContext.arc(this.leftCursorArray[index][2], this.leftCursorArray[index][3], 10, 0, 2 * Math.PI);
                  //this.effectsContext.closePath();
                  //this.effectsContext.fillStyle = this.leftHandArray[index][5];
                  //this.effectsContext.fill();
                  this.effectsContext.lineWidth = 20;
                  this.effectsContext.lineJoin = 'round';
                  this.effectsContext.lineCap = 'round';
                  this.effectsContext.strokeStyle = this.leftHandArray[index][5];
                  this.effectsContext.beginPath();
                  this.effectsContext.moveTo(this.leftCursorArray[index][0], this.leftCursorArray[index][1]);
                  this.effectsContext.lineTo(this.leftCursorArray[index][2], this.leftCursorArray[index][3]);
                  this.effectsContext.closePath();
                  this.effectsContext.stroke();




                  //actual painting
                  painting.context.strokeStyle = this.leftHandArray[index][5];
                  painting.context.beginPath();
                  painting.context.moveTo(this.leftCursorArray[index][0], this.leftCursorArray[index][1]);
                  painting.context.lineTo(this.leftCursorArray[index][2], this.leftCursorArray[index][3]);
                  painting.context.closePath();
                  painting.context.stroke();
                  painting.painted = true;
                  this.leftHandArray[index][4] = true;
              }
              else if (hand == 'left') {
                  this.leftHandArray[index][4] = false;
              }
              //this.effectsContext.fillStyle = "rgba(0,0,0,0.2)";
              //this.effectsContext.fillRect(0, 0, 1920, 1080);
              

              
  
  },

          makeDefaultImageData: function(){
              //test image data
              var tempcanvas = document.createElement('canvas'); /// create temp canvas
              tempcanvas.width = 1000;
              tempcanvas.height = 1000;
              var tempctx = tempcanvas.getContext('2d'); /// temp context

              tempctx.fillStyle = 'rgba(0,0,0,0)';
              tempctx.rect(0, 0, tempcanvas.width, tempcanvas.height);
              tempctx.fill();
              var testImgData = tempctx.getImageData(0,0,tempcanvas.width, tempcanvas.height);
              return testImgData;

              
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

          isOverHelpIcon: function (mX, mY) {
              return (mX >= this._instructions.x && mX < this._instructions.x + 200 && mY >= this._instructions.y && mY < this._instructions.y + 200);
          },

          randomValue: function (min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          },

          isOverButton: function (mX, mY, circle) {
            return Math.sqrt((mX-circle.x)*(mX-circle.x) + (mY-circle.y)*(mY-circle.y)) < circle.r;
            },


          hangThumbnails: function () {
              this.string = new Image();
              this.string.src = './images/attrack-sc_string.png';

    
      
      for(var i = 0; i < this.numPaintings; i++) {
          var x = (i*this.paintingSpacing) + this.marginX;
          var y = this.marginY;
          this.thumbnails.push(new Thumbnail(this.mainCanvas, x, y, this.thumbnailWidth, this.thumbnailHeight, this.thumbnailBorder, Math.random(0, 1), this.makeDefaultImageData()));
      }
  },



  draw: function () {
      if (this.ispainting == true && !this.paintingStopped) {
          //paint();
      }
      else {
          if (this.newThumbnail == true) {
              this.mainContext.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);
          }
          this.mainContext.drawImage(this.string, 0, 60);

          for(var i = 0; i < this.thumbnails.length; i++)  {
              this.thumbnails[i].draw(this.mainContext);
          };
          this.drawVideo();
          this.startButton.draw();
      }

        
  },

    getRandomArbitrary: function (min, max) {
      return Math.random() * (max - min) + min;
    },


    update: function () {
        var that = this;

        //for(var i = 0; i < this.paintings.length; i++) {
        //    if (this.paintings[i].painted == true) {
        //        //console.log('painting '+ i +'painted');
        //    }    
        //};

        if (this.ispainting == true && !this.paintingStopped) {
            this.effectsCanvas.classList.remove('hide-effects');
            
            this.uiContext.clearRect(0, 0, 1920, 1080);

            this.bkgdContext.clearRect(0, 0, 1920, 1080);
            this.bkgdContext.globalAlpha = this.bkgdOpacity / 100;
            this.bkgdContext.fillstyle = 'rgba(0,0,0,1)';
            this.bkgdContext.fillRect(0, 0, 1920, 1080);

            this.veilContext.clearRect(0, 0, 1920, 1080);
            this.veilContext.globalAlpha= this.veilOpacity/100;
            this.veilContext.fillstyle = 'rgba(0,0,0,1)';
            this.veilContext.fillRect(0, 0, 1920, 1080);

            this.effectsContext.fillStyle = 'rgba(0,0,0,0.2)';
            this.effectsContext.fillRect(0, 0, 1920, 1080);

            //this.effectsContext.clearRect(0, 0, 1920, 1080);
            //this.effectsContext.globalAlpha = this.veilOpacity / 100;
            
            
            

            if (!this.mainTimerStarted && this.bkgdOpacity < 100) {
                this.bkgdOpacity += 3;
                if (this.veilOpacity < 70) {
                    this.veilOpacity += 3;
                }
                
            }
            else if (!this.lightTimerStarted && !this.mainTimerStarted) {
                this.startLightTimer();
                this.lightTimerStarted = true;
            }


            if (this.lightTimerStarted) {
                this.uiContext.globalAlpha = this.lightOp/100;
                this.uiContext.drawImage(this.light.outline, 780, 50);
                if (this.lightOp < 100) {
                    this.lightOp += 10;
                }
            
                
                if (this.lightSeconds > 0) {
                    this.uiContext.globalAlpha = this.redOp/100;
                    this.uiContext.drawImage(this.light.red, 775, 50);
                    if (this.redOp < 100) {
                        this.redOp += 10;
                    }
                }
                if (this.lightSeconds > 1) {
                    this.uiContext.globalAlpha = this.yellowOp/100;
                    this.uiContext.drawImage(this.light.yellow, 775, 235);
                    if (this.yellowOp < 100) {
                        this.yellowOp += 10;
                    }
                }
                if (this.lightSeconds > 2) {
                    this.uiContext.globalAlpha = this.greenOp/100;
                    this.uiContext.drawImage(this.light.green, 775, 420);
                    if (this.greenOp < 100) {
                        this.greenOp += 10;
                    }
                }
                if (this.lightSeconds > 3) {
                    this.uiContext.globalAlpha = 1;
                    this.lightTimerStarted = false;

                    this.paintStart = true;
                }

            } 

            if (this.paintStart) {
                this.mainTimerStarted = true;
                this.paintStart = false;
                this.startPainting();
            }

            if (this.seconds < 15 && this.seconds >= 0) {
                this.uiContext.drawImage(this.timer[this.seconds], 0, 0);
                this.clearButton.draw();
            }

            if (this.seconds == 0 && this.veilOpacity > 0) {
                console.log(this.veilOpacity);
                
                this.veilOpacity -= 5;   
            }
            else if (this.seconds == 0) {
                this.paintingStopped = true;
                this.effectsCanvas.classList.add('hide-effects');
                setTimeout(function () {
                    that.stopPainting();
                }, 2000);
                
            }

            
        }

        this.videoLoop();

    },

    
    checkHand: function (index, player, lastPlayer, hand) {
        var mouseX = player['pos']['x'];
        var mouseY = player['pos']['y'];

        

        if(player['confidence'] == 1 && hand == 'right') {
            this.rightHandArray[index][0] = this.rightHandArray[index][2];
            this.rightHandArray[index][1] = this.rightHandArray[index][3];
            this.rightHandArray[index][2] = mouseX;
            this.rightHandArray[index][3] = mouseY;
        }
        if (player['confidence'] == 1 && hand == 'left') {
            this.leftHandArray[index][0] = this.leftHandArray[index][2];
            this.leftHandArray[index][1] = this.leftHandArray[index][3];
            this.leftHandArray[index][2] = mouseX;
            this.leftHandArray[index][3] = mouseY;
        }

        

        if (this.ispainting == true && this.mainTimerStarted == true && !this.paintingStopped) {
            this.paint(player, hand, index);
        }
        else {
            
            for(var i = 0; i < this.thumbnails.length; i++) {
                var thumbnail = this.thumbnails[i];
                if (mouseY > this.thumbnails[i].trashPosY - this.thumbnails[i].trashRadius
                    && mouseY < this.thumbnails[i].trashPosY + this.thumbnails[i].trashRadius
                    && mouseX > this.thumbnails[i].trashPosX - this.thumbnails[i].trashRadius
                    && mouseX < this.thumbnails[i].trashPosX + this.thumbnails[i].trashRadius
                    ) {
                    if (hand == 'right') {
                        thumbnail.trash.rightHoverArray[index] = true;
                    }
                    if (hand == 'left') {
                        thumbnail.trash.leftHoverArray[index] = true;

                    }
                    if (player['status'] == 'closed' && player['confidence'] == 1) {
                        this.trashThumbnail(i);
                    }
                    
                } else {
                    if (hand == 'right') {
                        thumbnail.trash.rightHoverArray[index] = false;
                    }
                    if (hand == 'left') {
                        thumbnail.trash.leftHoverArray[index] = false;
                    }

                }
            }

            if (this.isOverHelpIcon(mouseX, mouseY)) {
                this._instructions.paused = false;
            }

            if (mouseY > this.startButton.y
                && mouseY < this.startButton.y + this.startButton.height
                && mouseX > this.startButton.x
                && mouseX < this.startButton.x + this.startButton.width
                ) {

                if (hand == 'right') {
                    this.startButton.rightHoverArray[index] = true;
                }
                if (hand == 'left') {
                    this.startButton.leftHoverArray[index] = true;
                 
                }
                
                if(player['status'] == 'closed'
                && player['confidence'] == 1
                ) {
                    this.ispainting = true;
                    if (this.video){
                        this.videoStop();
                    }
                }
              
            } else {
                if (hand == 'right') {
                    this.startButton.rightHoverArray[index] = false;
                }
                if (hand == 'left') {
                    this.startButton.leftHoverArray[index] = false;
                }
                
            }
        }
        
        //clear button detect
        if (mouseY > this.clearButton.y - this.clearButton.height
            && mouseY < this.clearButton.y + this.clearButton.height
            && mouseX > this.clearButton.x - this.clearButton.width
            && mouseX < this.clearButton.x + this.clearButton.width
            ) {
            if (hand == 'right') {
                this.clearButton.rightHoverArray[index] = true;
            }
            if (hand == 'left') {
                this.clearButton.leftHoverArray[index] = true;

            }
            if (player['status'] == 'closed' && player['confidence'] == 1) {
                this.paintings.forEach(function (painting) {
                    painting.clear();
                });
            }
        } else {
            if (hand == 'right') {
                this.clearButton.rightHoverArray[index] = false;
            }
            if (hand == 'left') {
                this.clearButton.leftHoverArray[index] = false;
            }
        }

        
    },

    startPainting: function () {
        var that = this;
        console.log('timerStarted');
        this.mainTimer = setInterval(function () {
            if (that.ispainting == true && that.seconds > 0) {

                that.seconds--;
                
            }
        }, 1000);
    },

    startLightTimer: function () {
        var that = this;
        this.lightTimer = setInterval(function () {
            if (that.lightSeconds < 4) {

                that.lightSeconds++;

            }
        }, 1000);
    },

    stopPainting: function () {
        //reset timers
        this.ispainting = false;
        this.paintingStopped = false;

        clearInterval(this.mainTimer);
        this.mainTimerStarted = false;
        this.seconds = 15;
        clearInterval(this.lightTimer);
        this.lightTimerStarted = false;
        this.lightSeconds = 0;

        this.lightOp = 0;
        this.redOp = 0;
        this.yellowOp = 0;
        this.greenOp = 0;

        this.ispainting = false;
        this.paintStart = false;
        //record painting data to thumbnail
        var that = this;

        var tcanvas = document.createElement('canvas'), /// create temp canvas
        tctx = tcanvas.getContext('2d');
        tcanvas.width = 1920; /// set width = region width
        tcanvas.height = 1080;

        this.paintings.forEach(function (painting) {
            if (painting.painted == true) {
                console.log(painting+"painted");
                tctx.drawImage(painting.canvas, 0, 0);
                painting.painted = false;
            
        }
        });
        
        var thumbImgData = this.cropImageFromCanvas(tctx);

        if (thumbImgData) {
            console.log('painting to thumbnail');
            this.paintingToThumbnail(thumbImgData);
            this.newThumbnail = true;
            this.paintings.forEach(function (painting) {
            painting.clear();
        });
        }
        //clear all canvases
        
        
        this.uiContext.clearRect(0, 0, 1920, 1080);
        this.effectsContext.clearRect(0, 0, 1920, 1080);
        this.bkgdContext.clearRect(0, 0, 1920, 1080);
        this.veilContext.clearRect(0, 0, 1920, 1080);

        //reset painting variables
        this.veilOpacity = 0;
        this.bkgdOpacity = 0;
        
        //start video
        console.log('video Started');
        this.videoStart();
        
    },

    trashThumbnail: function (index){
        this.thumbnails.splice(index,1);
  },

    paintingToThumbnail: function (imgData) {
        //shift thumbnails

        for (var i = 0; i < this.thumbnails.length; i++) {
            this.thumbnails[i].x = this.thumbnails[i].x + this.paintingSpacing;
            this.thumbnails[i].update();
        }
        this.thumbnails.unshift(new Thumbnail(this.mainCanvas, this.marginX, this.marginY, this.thumbnailWidth, this.thumbnailHeight, this.thumbnailBorder, Math.random(0, 1), imgData));
        //delete last thumbnail
        this.thumbnails.splice(5, 1);
        this.newThumbnail = false;
  },

    cropImageFromCanvas: function (ctx) {

        var w = 1920;
        var h = 1080;
        var pix = {x:[], y:[]};
        var imageData = ctx.getImageData(0,0,1920,1080);
        var x;
        var y;
        var index;

      for (y = 0; y < h; y++) {
          for (x = 0; x < w; x++) {
              index = (y * w + x) * 4;
              if (imageData.data[index+3] > 0) {

                  pix.x.push(x);
                  pix.y.push(y);

              }
          }
      }
      pix.x.sort(function(a,b){return a-b});
      pix.y.sort(function(a,b){return a-b});
      var n = pix.x.length-1;

      w = pix.x[n] - pix.x[0];
      h = pix.y[n] - pix.y[0];
      console.log("get image data for " +pix.x[0] + ", " + pix.y[0] + ", " + w + ", " + h);
      var cut = ctx.getImageData(pix.x[0], pix.y[0], w, h);

      return cut;
  },


 drawVideo: function () {
     if (this.video && !this.video.paused && !this.video.ended) {
         this.mainContext.drawImage(this.video, 50, 490, 960, 540);
      }
  },

 videoStop: function () {
     if (this.video) {
         this.video.pause();
         this.video = null;
         this.mainContext.clearRect(50, 490, 960, 540);
      }
  },

 videoLoop: function () {
     if (this.video && this.video.ended) {
         this.videoStop();
          setTimeout(this.videoStart(), 3000);;
      }
  },

 videoStart: function () {
     var self = this;
      this.video = document.createElement("video");
      this.video.addEventListener('loadeddata', function () {
          if (self.video) {
              self.video.play();
          }
          
      });
      this.video.src = "./2017-03-20_Dance_demo-screen-ani_v01.mp4";
  },



 switchCanvas: function (o,n) {
     o.classList.remove('active-canvas');
     n.classList.remove('inactive-canvas');
     o.classList.add('inactive-canvas');
     n.classList.add('active-canvas');
     console.log('changed canvas');
     this.currentCanvas = n;
 },


    getPixels: function (img){
      var width = img.width;
      var height = img.height;
      var tcanvas = document.createElement('canvas'), /// create temp canvas
      tctx = tcanvas.getContext('2d');
      tcanvas.width = img.naturalWidth; /// set width = region width
      tcanvas.height = img.naturalHeight;
      tctx.drawImage(img, 0, 0);
      var pixels = tctx.getImageData(0, 0, width, height);
      return pixels;
  },

          //currentCanvas: this.mainCanvas,
          rightHandArray: [],
          leftHandArray: [],
          rightCursorArray: [],
          leftCursorArray: [],
          thumbnails: [],
          numPaintings: 5,
          thumbnailWidth: 200,
          thumbnailHeight: 225,
          thumbnailBorder: [8,8,50,8],
          marginX: 30,
          marginY: 65,
          paintingSpacing: 410,
         

          _instructionscanvas: null,
          _instructionscontext: null,
          _instructions: new Instructions(),
          playerAdded: false,
          randomNumber: [],

      }
    );
    WinJS.Namespace.define('App', {
        ClimbCanvas: climbCanvas
    });

})();