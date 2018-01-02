(function () {
    //"use strict";

    var constants = {};

    var climbCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              this.mainCanvas = document.getElementById('main-canvas');
              this.mainContext = this.mainCanvas.getContext("2d");


              this.mainCanvas.width = 1920;
              this.mainCanvas.height = 1080;

              this.bkgdCanvas = document.getElementById('bkgd-canvas');
              this.bkgdContext = this.bkgdCanvas.getContext("2d");


              this.bkgdCanvas.width = 1920;
              this.bkgdCanvas.height = 1080;

              this.paintCanvas = document.getElementById('paint-canvas');
              this.paintContext = this.paintCanvas.getContext("2d");

              this.paintCanvas.width = 1920;
              this.paintCanvas.height = 1080;

              this._instructionsCanvas = document.getElementById('instructionsCanvas');
              this._instructionsContext = this._instructionsCanvas.getContext('2d');

              this.veilCanvas = document.getElementById('veil-canvas');
              this.veilContext = this.veilCanvas.getContext("2d");

              this.veilCanvas.width = 1920;
              this.veilCanvas.height = 1080;
              this.veilOpacity = 90;
              this.wasNotClosed = false;
              this.currentCanvas = this.mainCanvas

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

              this.numUsers = 1;

              this.paintings = [];
              this.newThumbnail = true;

              this.timer = [];
              this.seconds = 10;

              for (var i = 0; i < this.seconds + 1; i++) {
                  this.timer[i] = new Image();
                  this.timer[i].src = './images/timer' + i + '.png';
              }

              
              this.startButton = new Button('start', './images/btn-play.png', 1500, 638, 185, this.mainCanvas);
              this.clearButton = new Button('clear', './images/btn-undo.png', 1834, 86, 86, this.veilCanvas);
              this.createPaintings();
              this.hangThumbnails();
              this.veilOpacity = 90;
              this.seconds = 10;
              this.timer1 = 60;
              this.timer2 = this.seconds * 60;
              this.paintings[0].painted = false;
              this.paintings[0].op = 0;
              this.videoStart();
          },

          createPaintings: function() {
                  for (var i = 0; i < this.numUsers; i++) {
                      this.paintings[i] = new Painting(this.paintCanvas, 0, 0, this.paintCanvas.width, this.paintCanvas.height, 20);
                  }
          },

          paint: function (player,hand) {

              if (hand == 'right' && player['status'] == 'closed' && player['confidence'] == 1) {
                  console.log(this.wasNotClosed);
                  this.paintContext.beginPath();
                  this.paintContext.moveTo(this.lastMouseX, this.lastMouseY);
                  this.paintContext.lineTo(this.mouseX, this.mouseY);
                  this.paintContext.closePath();
                  this.paintContext.stroke();
                  this.paintings[0].painted = true;
                  this.wasNotClosed = true;
              }
              else if (hand == 'right') {
                  this.wasNotClosed = false;
              }

              
  
  },

          makeDefaultImageData: function(){
              //test image data
              tempcanvas = document.createElement('canvas'); /// create temp canvas
              tempcanvas.width = 1000;
              tempcanvas.height = 1000;
              tempctx = tempcanvas.getContext('2d'); /// temp context

              tempctx.fillStyle = 'rgba(0,0,0,0)';
              tempctx.rect(0, 0, tempcanvas.width, tempcanvas.height);
              tempctx.fill();
              testImgData = tempctx.getImageData(0,0,tempcanvas.width, tempcanvas.height);
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
          x = (i*this.paintingSpacing) + this.marginX;
          y = this.marginY;
          this.thumbnails.push(new Thumbnail(this.mainCanvas, x, y, this.thumbnailWidth, this.thumbnailHeight, this.thumbnailBorder, Math.random(0, 1), this.makeDefaultImageData()));
      }
  },



  draw: function () {
      if (this.currentCanvas == this.paintCanvas) {
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
        if (this.paintings[0] && (this.currentCanvas == this.paintCanvas)) {

            


            this.veilContext.clearRect(0,0,1920,1080);
            this.veilContext.globalAlpha= this.veilOpacity/100;
            this.veilContext.fillstyle = 'rgba(0,0,0,1)';
            this.veilContext.fillRect(0, 0, 1920, 1080);
            this.veilContext.drawImage(this.timer[this.seconds], 0, 0);
            this.clearButton.draw();
            
            if (this.timer1 > 0) {
                this.paintings[0].op++;
                this.bkgdContext.fillStyle = 'rgba(0,0,0,' + (this.paintings[0].op / 60) + ')';
                this.bkgdContext.fillRect(0, 0, 1920, 1080);
                this.paintings[0].imgData = null;
                this.timer1--;
            }
            else if (this.timer2 > 0) {

                if (this.timer2 % 60 === 0) {
                    this.seconds--;
                }
                this.timer2--;
            }
            else if (this.veilOpacity > 0) {
                this.veilOpacity--;
            }
            else if (this.currentCanvas == this.paintCanvas) {
                this.switchCanvas(this.paintCanvas, this.mainCanvas);
                this.videoStart();
                if (this.paintings[0].painted == true) {
                    this.paintings[0].imgData = this.cropImageFromCanvas(this.paintContext, this.paintCanvas);
                }
                //clear all canvases
                this.bkgdContext.clearRect(0, 0, 1920, 1080);
                this.veilContext.clearRect(0, 0, 1920, 1080);
                this.paintContext.clearRect(0, 0, 1920, 1080);

                //reset painting variables
                this.veilOpacity = 90;
                this.seconds = 10;
                this.timer1 = 60;
                this.timer2 = this.seconds * 60;
                this.paintings[0].painted = false;
                this.paintings[0].op = 0;
            }
        }

        if (this.paintings[0].imgData) {
            this.paintingToThumbnail();
            this.newThumbnail = true;
        }
        this.paintings[0].imgData = null;
        this.videoLoop();

    },

    checkHand: function (index, player, lastPlayer, hand) {
        var mouseX = player['pos']['x'];
        var mouseY = player['pos']['y'];

        

        if(player['confidence'] == 1 && hand == 'right') {
            this.lastMouseX = this.mouseX;
            this.lastMouseY = this.mouseY;
            this.mouseX = mouseX;
            this.mouseY = mouseY;
        }

        if (this.isOverHelpIcon(mouseX, mouseY)) {
            this._instructions.paused = false;
        }

        if (this.paintings[0] && (this.currentCanvas == this.paintCanvas)) {
            this.paint(player, hand);
        }

        for(var i = 0; i < this.thumbnails.length; i++) {
                    var thumbnail = this.thumbnails[i];
                    if (mouseY > this.thumbnails[i].trashPosY - this.thumbnails[i].trashRadius && mouseY < this.thumbnails[i].trashPosY + this.thumbnails[i].trashRadius && mouseX > this.thumbnails[i].trashPosX - this.thumbnails[i].trashRadius && mouseX < this.thumbnails[i].trashPosX + this.thumbnails[i].trashRadius && player['status'] == 'closed' && player['confidence'] == 1) {
                        this.trashThumbnail(i);
                    }
                }

        if (this.currentCanvas == this.mainCanvas && mouseY > this.startButton.y - this.startButton.r && mouseY < this.startButton.y + this.startButton.r && mouseX > this.startButton.x - this.startButton.r && mouseX < this.startButton.x + this.startButton.r && player['status'] == 'closed' && player['confidence'] == 1 && hand == 'right') {
                    this.switchCanvas(this.mainCanvas, this.paintCanvas);
                    if (this.video){
                        this.videoStop();
                    }

                }
        //clear button detect
        if (mouseY > this.clearButton.y - this.clearButton.r
                  && mouseY < this.clearButton.y + this.clearButton.r
                  && mouseX > this.clearButton.x - this.clearButton.r
                  && mouseX < this.clearButton.x + this.clearButton.r
                   && player['status'] == 'closed' && player['confidence'] == 1) {
                    this.paintContext.clearRect(0,0,this.paintCanvas.width,this.paintCanvas.height);
                    this.paintings[0].painted = false;
        }

        


      //this.cursorCanvas(this.currentCanvas);
      
      //this.painting[0].update();

      
  },

    trashThumbnail: function (index){
        this.thumbnails.splice(index,1);
  },

    paintingToThumbnail: function () {
        //shift thumbnails

        for (var i = 0; i < this.thumbnails.length; i++) {
            this.thumbnails[i].x = this.thumbnails[i].x + this.paintingSpacing;
            this.thumbnails[i].update();
        }
        this.thumbnails.unshift(new Thumbnail(this.mainCanvas, this.marginX, this.marginY, this.thumbnailWidth, this.thumbnailHeight, this.thumbnailBorder, Math.random(0, 1), this.paintings[0].imgData));
        //delete last thumbnail
        this.thumbnails.splice(5, 1);
        this.newThumbnail = false;
  },

    cropImageFromCanvas: function (ctx, canvas) {

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
      //var cut = ctx.getImageData(pix.x[0], pix.y[0], w, h);

      return imageData;
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
     self = this;
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

          currentCanvas: this.mainCanvas,

          thumbnails: [],
          numPaintings: 5,
          thumbnailWidth: 200,
          thumbnailHeight: 225,
          thumbnailBorder: [8,8,50,8],
          marginX: 30,
          marginY: 65,
          paintingSpacing: 410,
          
          rightHandArray: [],
          leftHandArray: [],

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