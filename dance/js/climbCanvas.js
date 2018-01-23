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

              this.leftHandArray[0] = [0, 0, 0, 0, false, 'rgba(224,68,55,1)'];
              this.leftHandArray[1] = [0, 0, 0, 0, false, 'rgba(61,100,168,1)'];
              this.leftHandArray[2] = [0, 0, 0, 0, false, 'rgba(253,240,81,1)'];
              this.leftHandArray[3] = [0, 0, 0, 0, false, 'rgba(116,170,91,1)'];
              this.leftHandArray[4] = [0, 0, 0, 0, false, 'rgba(144,42,135,1)'];
              this.leftHandArray[5] = [0, 0, 0, 0, false, 'rgba(226,125,48,1)'];


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

              this.otherPlayerHover = false;

              
              this.startButton = new Button('start', './images/btn-play', 1500, 638, 185, this.mainCanvas);
              this.clearButton = new Button('clear', './images/btn-undo', 1834, 86, 86, this.veilCanvas);
              this.hangThumbnails();
              this.veilOpacity = 0;
              this.bkgdOpacity = 0;
              this.mainTimerStarted = false;
              this.seconds = 15;
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

          paint: function (player, hand, index, color) {
              var painting = this.paintings[index];
              //console.log(index)


              if (hand == 'right' && player['status'] == 'closed' && player['confidence'] == 1) {
                  painting.context.strokeStyle = this.rightHandArray[index][5];
                  painting.context.beginPath();
                  painting.context.moveTo(this.rightHandArray[index][0], this.rightHandArray[index][1]);
                  painting.context.lineTo(this.rightHandArray[index][2], this.rightHandArray[index][3]);
                  painting.context.closePath();
                  painting.context.stroke();
                  painting.painted = true;
                  this.rightHandArray[index][4] = true;
              }
              else if (hand == 'right') {
                  this.rightHandArray[index][4] = false;
              }
              if (hand == 'left' && player['status'] == 'closed' && player['confidence'] == 1) {
                  console.log('lefthand');
                  painting.context.strokeStyle = this.leftHandArray[index][5];
                  painting.context.beginPath();
                  painting.context.moveTo(this.leftHandArray[index][0], this.leftHandArray[index][1]);
                  painting.context.lineTo(this.leftHandArray[index][2], this.leftHandArray[index][3]);
                  painting.context.closePath();
                  painting.context.stroke();
                  painting.painted = true;
                  this.leftHandArray[index][4] = true;
              }
              else if (hand == 'left') {
                  this.leftHandArray[index][4] = false;
              }
              

              
  
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
      if (this.ispainting == true) {
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

        for(var i = 0; i < this.paintings.length; i++) {
            if (this.paintings[i].painted == true) {
                //console.log('painting '+ i +'painted');
            }    
        };

        if (this.ispainting == true) {

            
            
            this.bkgdContext.clearRect(0, 0, 1920, 1080);
            this.bkgdContext.globalAlpha = this.bkgdOpacity / 100;
            this.bkgdContext.fillstyle = 'rgba(0,0,0,1)';
            this.bkgdContext.fillRect(0, 0, 1920, 1080);

            this.veilContext.clearRect(0, 0, 1920, 1080);
            this.veilContext.globalAlpha= this.veilOpacity/100;
            this.veilContext.fillstyle = 'rgba(0,0,0,1)';
            this.veilContext.fillRect(0, 0, 1920, 1080);
            this.veilContext.drawImage(this.timer[this.seconds], 0, 0);
            this.clearButton.draw();

            if (this.seconds == 15 && this.bkgdOpacity < 100) {
                this.bkgdOpacity += 2;
                if (this.veilOpacity < 90) {
                    this.veilOpacity += 2;
                }
            }
            else if (this.mainTimerStarted == false) {
                this.startPainting();
                this.mainTimerStarted = true;
            }
            if (this.seconds == 0 && this.veilOpacity > 0) {
                this.mainTimerStarted = false;
                this.veilOpacity -= 2;
                if (this.veilOpacity <= 5) {
                    this.bkgdOpacity = 0;
                }     
            }
            if (this.seconds == 0 && this.veilOpacity == 0) {
                this.stopPainting();
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

        

        if (this.ispainting == true && this.mainTimerStarted == true) {
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
                && mouseX < this.startButton.x + this.startButton.height
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
        if (mouseY > this.clearButton.y - this.clearButton.r
            && mouseY < this.clearButton.y + this.clearButton.r
            && mouseX > this.clearButton.x - this.clearButton.r
            && mouseX < this.clearButton.x + this.clearButton.r
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
        this.mainTimer = setInterval(function () {
            if (that.ispainting == true && that.seconds > 0) {

                that.seconds--;
                
            }
        }, 1000);
        },

    stopPainting: function () {
        clearInterval(this.mainTimer);
        this.seconds = 15;
        this.ispainting = false;
        //record painting data to thumbnail
        var that = this;

        var tcanvas = document.createElement('canvas'), /// create temp canvas
        tctx = tcanvas.getContext('2d');
        tcanvas.width = 1920; /// set width = region width
        tcanvas.height = 1080;

        this.paintings.forEach(function (painting) {
            if (painting.painted == true) {
            tctx.drawImage(painting.canvas, 0, 0);
            
        }
        });
        
        var thumbImgData = this.cropImageFromCanvas(tctx);

        if (thumbImgData) {
            console.log('painting to thumbnail');
            this.paintingToThumbnail(thumbImgData);
            this.newThumbnail = true;
        }
        //clear all canvases
        
        this.paintings.forEach(function (painting) {
            painting.clear();
        });
        this.bkgdContext.clearRect(0, 0, 1920, 1080);
        this.veilContext.clearRect(0, 0, 1920, 1080);

        //reset painting variables
        this.veilOpacity = 0;
        this.bkgdOpacity = 0;
        
        //start video
        console.log('video Started');
        this.videoStart();
        
    },

    raiseVeil: function(){

    },
    lowerVeil: function () {

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
      this.video.addEventListener('loadeddata', function() {
          self.video.play();
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