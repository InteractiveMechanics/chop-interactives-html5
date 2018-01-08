(function () {
    "use strict";

    var constants = {};

    var climbCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              this.rightHandArray[0] = [0, 0, 0, 0, false, 'rgba(255,255,255,1)'];
              this.rightHandArray[1] = [0, 0, 0, 0, false, 'rgba(220,220,220,1)'];
              this.rightHandArray[2] = [0, 0, 0, 0, false, 'rgba(200,200,200,1)'];
              this.rightHandArray[3] = [0, 0, 0, 0, false, 'rgba(180,180,180,1)'];
              this.rightHandArray[4] = [0, 0, 0, 0, false, 'rgba(160,160,160,1)'];
              this.rightHandArray[5] = [0, 0, 0, 0, false, 'rgba(140,140,140,1)'];


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
              this.veilOpacity = 90;

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
              this.seconds = 10;

              for (var i = 0; i < this.seconds + 1; i++) {
                  this.timer[i] = new Image();
                  this.timer[i].src = './images/timer' + i + '.png';
              }

              
              this.startButton = new Button('start', './images/btn-play.png', 1500, 638, 185, this.mainCanvas);
              this.clearButton = new Button('clear', './images/btn-undo.png', 1834, 86, 86, this.veilCanvas);
              this.hangThumbnails();
              this.veilOpacity = 90;
              this.seconds = 10;
              this.timer1 = 60;
              this.timer2 = this.seconds * 60;
              this.videoStart();
          },

          createPaintings: function() {
                  for (var i = 0; i < this.numUsers; i++) {
                      this.paintings[i] = new Painting(this.paintCanvas[i], 0, 0, this.paintCanvas[i].width, this.paintCanvas[i].height, 20, this.rightHandArray[i][5]);
                      console.log('painting created');
                  }
          },

          paint: function (player, hand, index) {
              var painting = this.paintings[index];
              console.log(index)


              if (hand == 'right' && player['status'] == 'closed' && player['confidence'] == 1) {
                  console.log(this.rightHandArray[index][4]);
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
                console.log('painting '+ i +'painted');
            }    
        };

        if (this.ispainting == true) {
            
            this.veilContext.clearRect(0, 0, 1920, 1080);
            this.veilContext.globalAlpha= this.veilOpacity/100;
            this.veilContext.fillstyle = 'rgba(0,0,0,1)';
            this.veilContext.fillRect(0, 0, 1920, 1080);
            this.veilContext.drawImage(this.timer[this.seconds], 0, 0);
            this.clearButton.draw();
            
            if (this.timer1 > 0) {
                //this.paintings[0].op++;
                //this.bkgdContext.fillStyle = 'rgba(0,0,0,1)';
                //this.bkgdContext.fillRect(0, 0, 1920, 1080);
                this.timer1--;
            }
            else if (this.timer2 > 0) {
                //console.log(this.timer2);
                //if (this.timer2 % 20 === 0) {
                //    this.seconds--;
                //    console.log(this.seconds);
                //}
                this.timer2--;
            }
            else if (this.veilOpacity > 0) {
                this.veilOpacity--;
            }
            else {
                this.stopPainting();
            }
        }

        

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

        

        if (this.ispainting == true) {
            this.paint(player, hand, index);
        }
        else {
            
            for(var i = 0; i < this.thumbnails.length; i++) {
                var thumbnail = this.thumbnails[i];
                if (mouseY > this.thumbnails[i].trashPosY - this.thumbnails[i].trashRadius
                    && mouseY < this.thumbnails[i].trashPosY + this.thumbnails[i].trashRadius
                    && mouseX > this.thumbnails[i].trashPosX - this.thumbnails[i].trashRadius
                    && mouseX < this.thumbnails[i].trashPosX + this.thumbnails[i].trashRadius
                    && player['status'] == 'closed'
                    && player['confidence'] == 1) {
                    this.trashThumbnail(i);
                }
            }

            if (this.isOverHelpIcon(mouseX, mouseY)) {
                this._instructions.paused = false;
            }

            if (mouseY > this.startButton.y - this.startButton.r
                && mouseY < this.startButton.y + this.startButton.r
                && mouseX > this.startButton.x - this.startButton.r
                && mouseX < this.startButton.x + this.startButton.r
                && player['status'] == 'closed'
                && player['confidence'] == 1
                && hand == 'right') {
                this.startPainting();
                this.ispainting = true;
                if (this.video){
                    this.videoStop();
                }

            }
        }
        
        //clear button detect
        if (mouseY > this.clearButton.y - this.clearButton.r
            && mouseY < this.clearButton.y + this.clearButton.r
            && mouseX > this.clearButton.x - this.clearButton.r
            && mouseX < this.clearButton.x + this.clearButton.r
            && player['status'] == 'closed'
            && player['confidence'] == 1) {
            this.paintings[index].clear();
        }

      
    },

    startPainting: function (){
        
        this.lowerVeil();
        },

    stopPainting: function () {
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
        this.veilOpacity = 90;
        this.seconds = 10;
        this.timer1 = 60;
        this.timer2 = this.seconds * 20;
        
        //start video
        console.log('video Started');
        this.videoStart();
        this.videoLoop();
        
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