(function () {
    "use strict";

    var constants = {};

    var climbCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              this.createLeftCanvas();
              this.createCenterCanvas();
              this.createRightCanvas();

              document.body.appendChild(this._canvas_left);
              document.body.appendChild(this._canvas_right);
              document.body.appendChild(this._canvas_center);

              this.createCanvasOverlays();
              this.setupPegs();

              this.loadSplatterImages();

              this._img = new Image();
              this._img.src = 'images/background_slice@2x.jpg';
          },
          clearScreen: function (context) {
              var context = context;
              context.clearRect(0, 0, 1920, 1080);
          },

          draw: function () {
                var that = this;

                var now = Date.now();
                var delta = (now - this._lastFrameTime) / 1000;
                this._lastFrameTime = now;
                this._totalSeconds += delta;

                var vx = 15; // the background scrolls with a speed of 100 pixels/sec
                var numImages = Math.ceil(this._canvas_left.height / this._img.height) + 1;
                var xpos = this._totalSeconds * vx % this._img.height;
    
                this._canvas_left.getContext('2d').save();
                this._canvas_left.getContext('2d').translate(0, xpos);
                for (var i = 0; i < numImages; i++) {
                    this._canvas_left.getContext('2d').drawImage(this._img, 0, -6500);
                }
                this._canvas_left.getContext('2d').restore();

                this._canvas_center.getContext('2d').save();
                this._canvas_center.getContext('2d').translate(0, xpos);
                for (var i = 0; i < numImages; i++) {
                    this._canvas_center.getContext('2d').drawImage(this._img, 0, -6700);
                }
                this._canvas_center.getContext('2d').restore();

                this._canvas_right.getContext('2d').save();
                this._canvas_right.getContext('2d').translate(0, xpos);
                for (var i = 0; i < numImages; i++) {
                    this._canvas_right.getContext('2d').drawImage(this._img, 0, -6300);
                }
                this._canvas_right.getContext('2d').restore();


                this._overlay_left.getContext("2d").clearRect(0, 0, this._overlay_left.width, this._overlay_left.height);
                this._left_pegs.forEach(function (peg) {
                    peg.draw();
                    peg.y += .25;

                    if (peg.y > window.innerHeight) {  //Repeat the raindrop when it falls out of view
                        peg.y = -100 //Account for the image size
                        peg.x = that.randomValue(90, that._width - 110);
                        peg.activated = false;   
                        peg.splatter_sprite = null;
                    }
                });

                this._overlay_center.getContext("2d").clearRect(0, 0, this._overlay_left.width, this._overlay_left.height);
                this._center_pegs.forEach(function (peg) {
                    peg.draw();
                    peg.y += .25;

                    if (peg.y > window.innerHeight) {  //Repeat the raindrop when it falls out of view
                        peg.y = -100 //Account for the image size
                        peg.x = that.randomValue(90, that._width - 110);
                        peg.activated = false;   
                        peg.splatter_sprite = null;
                    }
                });

                this._overlay_right.getContext("2d").clearRect(0, 0, this._overlay_left.width, this._overlay_left.height);
                this._right_pegs.forEach(function (peg) {
                    peg.draw();
                    peg.y += .25;

                    if (peg.y > window.innerHeight) {  //Repeat the raindrop when it falls out of view
                        peg.y = -100 //Account for the image size
                        peg.x = that.randomValue(90, that._width - 110);
                        peg.activated = false;
                        peg.splatter_sprite = null;
                    }
                });
          },
          detectActivated: function (player, pegs, panel) {
              var that = this;
              var mX = player['pos']['x'] - (640 * panel);
              var mY = player['pos']['y'];

              pegs.forEach(function (peg) {
                  if (mX >= peg.x && mX < peg.x + peg.width && mY >= peg.y && mY < peg.y + peg.height && player['status'] === 'closed') {
                      peg.activated = true;

                      if (!peg.splatter_sprite) {
                          peg.splatter_sprite = that.randomSplat();
                      }
                  }
              });
          },

          loadSplatterImages: function () {
	        for(var i = 0; i < 60; i++) {
	            var filename = "images/paint-splatters/splatter_" + i + '.png';
	            this._paint_splatters.push(new Sprite('splatter', new ImagePainter(filename)));
	        }
          },
          randomSplat: function () {
              return this._paint_splatters[Math.floor(Math.random() * this._paint_splatters.length)];
          },

          createCanvasOverlays: function () {	
              this.createLeftOverlayPanel();
              this.createCenterOverlayPanel();
              this.createRightOverlayPanel();

              document.body.appendChild(this._overlay_left);
              document.body.appendChild(this._overlay_center);
              document.body.appendChild(this._overlay_right);
          },
          createLeftCanvas: function () {
              this._canvas_left = document.createElement('canvas');
              this._canvas_left.id = "canvas_left";
              this._canvas_left.width = 635;
              this._canvas_left.height = window.innerHeight;
          },
          createCenterCanvas: function () {
              this._canvas_center = document.createElement('canvas');
              this._canvas_center.id = "canvas_center";
              this._canvas_center.width = 635;
              this._canvas_center.height = window.innerHeight;
          },
          createRightCanvas: function () {
              this._canvas_right = document.createElement('canvas');
              this._canvas_right.id = "canvas_right";
              this._canvas_right.width = 635;
              this._canvas_right.height = window.innerHeight;
          },

          createLeftOverlayPanel: function () {
              this._overlay_left = document.createElement('canvas');
              this._overlay_left.id = "overlay_left";
              this._overlay_left.width = 635;
              this._overlay_left.height = window.innerHeight;
          },
          createCenterOverlayPanel: function () {
              this._overlay_center = document.createElement('canvas');
              this._overlay_center.id = "overlay_center";
              this._overlay_center.width = 635;
              this._overlay_center.height = window.innerHeight;
          },
          createRightOverlayPanel: function () {
              this._overlay_right = document.createElement('canvas');
              this._overlay_right.id = "overlay_right";
              this._overlay_right.width = 635;
              this._overlay_right.height = window.innerHeight;
          },

          setupPegs: function () {
              for(var i = 0; i < window.innerHeight; i += (window.innerHeight / 8)) {
                  var x = this.randomValue(90, this._width - 100);
                  var y = this.randomValue(i, i += (window.innerHeight / 15));
		
                  var peg = this.getPeg(this._overlay_left, x, y);
                  this._left_pegs.push(peg);
              }

              for(var j = 0; j < window.innerHeight; j += (window.innerHeight / 8)) {
                  var x = this.randomValue(90, this._width - 100);
                  var y = this.randomValue(j, j += (window.innerHeight / 15));
		
                  var peg = this.getPeg(this._overlay_center, x, y);
                  this._center_pegs.push(peg);
              }

              for(var k = 0; k < window.innerHeight; k += (window.innerHeight / 8)) {
                  var x = this.randomValue(90, this._width - 100);
                  var y = this.randomValue(k, k += (window.innerHeight / 15));
		
                  var peg = this.getPeg(this._overlay_right, x, y);
                  this._right_pegs.push(peg);
              }
          },
          getPeg: function (c, x , y) {
              var pegndex = parseInt(this.randomValue(0, 8));
              var filepath = "images/pegs/PX/PX_" + pegndex + '.png';
              var specialfile = "images/pegs/PS/PS_" + pegndex + '.png';
              var peg = new Peg(x, y, c, filepath, pegndex, specialfile);

              return peg;
          },

          randomValue: function (min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          },

          _canvas_left: null,
          _canvas_right: null,
          _canvas_center: null,
          _overlay_left: null,
          _overlay_center: null,
          _overlay_right: null,

          _timer: 0,
          _lastFrameTime: 0,
          _totalSeconds: 0,
      
          _left_pegs: [],
          _right_pegs: [],
          _center_pegs: [],

          _paint_splatters: [],

          _img: null,
          _width: 635
      }
    );

    WinJS.Namespace.define('App', {
        ClimbCanvas: climbCanvas
    });

})();