(function () {
    "use strict";

    var constants = {};

    var climbCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              var canvas_left = this.createLeftCanvas();
              var canvas_center = this.createCenterCanvas();
              var canvas_right = this.createRightCanvas();

              document.body.appendChild(canvas_left);
              document.body.appendChild(canvas_right);
              document.body.appendChild(canvas_center);

              var overlay_left = this.createLeftOverlayPanel();
              var overlay_center = this.createCenterOverlayPanel();
              var overlay_right = this.createRightOverlayPanel();
              	
              document.body.appendChild(overlay_left);
              document.body.appendChild(overlay_center);
              document.body.appendChild(overlay_right);
              
              setupPegs(overlay_left, overlay_center, overlay_right);

              this.loadSplatterImages();

              this._LeftPanel = new Panel(canvas_left, overlay_left, this._left_pegs);
              this._CenterPanel = new Panel(canvas_center, overlay_center, this._center_pegs);
              this._RightPanel = new Panel(canvas_right, overlay_right, this._right_pegs);

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

                this._LeftPanel.moveBG(this._totalSeconds, this._img, -5500);
                this._CenterPanel.moveBG(this._totalSeconds, this._img, -5700);
                this._RightPanel.moveBG(this._totalSeconds, this._img, -5200);
                
                this._LeftPanel.drawPegs(mousePos);
                this._CenterPanel.drawPegs(mousePos);
                this._RightPanel.drawPegs(mousePos);
          },
          detectActivated: function (player, pegs, panel) {
              var that = this;
              var mX = player['pos']['x'] - (640 * panel);
              var mY = player['pos']['y'];

              pegs.forEach(function (peg) {
                  if (mX >= peg.x && mX < peg.x + peg.width && mY >= peg.y && mY < peg.y + peg.height && player['status'] === 'closed') {
                      peg.counter++;

                      if (!peg.splatter_sprite && peg.counter > 30) {
                          peg.activated = true;
                          peg.splatter_sprite = that.randomSplat();
                      }
                  } else {
                      peg.counter = 0;
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

          },
          createLeftCanvas: function () {
              var canvas_left = document.createElement('canvas');
              canvas_left.id = "canvas_left";
              canvas_left.width = 635;
              canvas_left.height = window.innerHeight;
              return canvas_left;
          },
          createCenterCanvas: function () {
              var canvas_center = document.createElement('canvas');
              canvas_center.id = "canvas_center";
              canvas_center.width = 635;
              canvas_center.height = window.innerHeight;
              return canvas_center;
          },
          createRightCanvas: function () {
              var canvas_right = document.createElement('canvas');
              canvas_right.id = "canvas_right";
              canvas_right.width = 635;
              canvas_right.height = window.innerHeight;
              return canvas_right;
          },

          createLeftOverlayPanel: function () {
              var overlay_left = document.createElement('canvas');
              overlay_left.id = "overlay_left";
              overlay_left.width = 635;
              overlay_left.height = window.innerHeight;
              return overlay_left;
          },
          createCenterOverlayPanel: function () {
              var overlay_center = document.createElement('canvas');
              overlay_center.id = "overlay_center";
              overlay_center.width = 635;
              overlay_center.height = window.innerHeight;
              return overlay_center;
          },
          createRightOverlayPanel: function () {
              var overlay_right = document.createElement('canvas');
              overlay_right.id = "overlay_right";
              overlay_right.width = 635;
              overlay_right.height = window.innerHeight;
              return overlay_right;
          },

          setupPegs: function (overlay_left, overlay_center, overlay_right) {
              for(var i = 0; i < window.innerHeight; i += (window.innerHeight / 8)) {
                  var x = this.randomValue(90, this._width - 100);
                  var y = this.randomValue(i, i += (window.innerHeight / 15));
		
                  var peg = this.getPeg(overlay_left, x, y);
                  this._left_pegs.push(peg);
              }

              for(var j = 0; j < window.innerHeight; j += (window.innerHeight / 8)) {
                  var x = this.randomValue(90, this._width - 100);
                  var y = this.randomValue(j, j += (window.innerHeight / 15));
		
                  var peg = this.getPeg(overlay_center, x, y);
                  this._center_pegs.push(peg);
              }

              for(var k = 0; k < window.innerHeight; k += (window.innerHeight / 8)) {
                  var x = this.randomValue(90, this._width - 100);
                  var y = this.randomValue(k, k += (window.innerHeight / 15));
		
                  var peg = this.getPeg(overlay_right, x, y);
                  this._right_pegs.push(peg);
              }
          },
          getPeg: function (c, x , y) {
              var pegndex = parseInt(this.randomValue(0, 9));
              var filepath = "images/pegs/PX/PX_" + pegndex + '.png';
              var specialfile = "images/pegs/PS/PS_" + pegndex + '.png';
              var peg = new Peg(x, y, c, filepath, pegndex, specialfile);

              return peg;
          },

          randomValue: function (min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          },

          _LeftPanel: null,
          _CenterPanel: null,
          _RightPanel: null,

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