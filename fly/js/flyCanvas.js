(function () {
    "use strict";

    var constants = {};

    var flyCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              var that = this;

              this._planeCanvas = document.getElementById('planeCanvas');
              this._pathCanvas = document.getElementById('pathCanvas');
              this._skyCanvas = document.getElementById('skyCanvas');
              this._cloudFGCanvas = document.getElementById('cloudFGCanvas');
              this._cloudMGCanvas = document.getElementById('cloudMGCanvas');
              this._cloudBGCanvas = document.getElementById('cloudBGCanvas');

              this._planeContext = this._planeCanvas.getContext('2d');
              this._pathContext = this._pathCanvas.getContext('2d');
              this._skyContext = this._skyCanvas.getContext('2d');
              this._cloudFGContext = this._cloudFGCanvas.getContext('2d');
              this._cloudMGContext = this._cloudMGCanvas.getContext('2d');
              this._cloudBGContext = this._cloudBGCanvas.getContext('2d');

              var cloudFG = new Image();
              cloudFG.src = 'images/backgrounds/clouds_foreground.png';
              this._cloudFGContext.drawImage(cloudFG, 0, 640, 1920, 640);

              var cloudMG = new Image();
              cloudMG.src = 'images/backgrounds/clouds_midground.png';
              this._cloudMGContext.drawImage(cloudMG, 0, 640, 1920, 640);

              var cloudBG = new Image();
              cloudBG.src = 'images/backgrounds/clouds_background.png';
              this._cloudBGContext.drawImage(cloudBG, 0, 640, 1920, 640);

              var background = new Image();
              background.src = 'images/backgrounds/background.png';
              this._skyContext.drawImage(background, 0, 0, 1920, 1080);
          },
          clearScreen: function (context) {
              var context = context;
              context.clearRect(0, 0, 1920, 1080);
          },
          draw: function () {
              if (this.plane) {
                  this.plane.draw();
              }
          },
          update: function () {
              if (this.plane) {
                  this.plane.move();
                  this.plane.update();
              }
          },
          calculateAngleDistance: function (deltaX, deltaY) {
              var angle = Math.atan2(deltaY, deltaX) * Math.PI;
              var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
              return [angle, distance];
          },
          checkPlanes: function (player, lastPlayer) {

              if (player['status'] === 'closed' && lastPlayer['status'] === 'closed') {
                  this.plane.p.x = player['pos']['x'];
                  this.plane.p.y = player['pos']['y'];
              }

              if (player['status'] === 'closed' && lastPlayer['status'] === 'open') {
                  this.plane = new Plane(this._planeCanvas, player['pos']['x'], player['pos']['y']);
              }

              if (player['status'] === 'open' && lastPlayer['status'] === 'closed') {
                  //throw logic
                  var thrownAtX = player['pos']['x'];
                  var thrownAtY = player['pos']['y'];

                  var scale = .2;
                  this.plane.p.x = player['pos']['x'];
                  this.plane.p.y = player['pos']['y'];
                  this.plane.v.x = (thrownAtX - this.plane.startX) * scale;
                  this.plane.v.y = (thrownAtY - this.plane.startY) * scale;
                  this.plane.isActive = true;
              }
          },
          getMousePos: function(canvas, evt) {
              var rect = canvas.getBoundingClientRect();
              this.mousePos = {
                  x: evt.clientX - rect.left,
                  y: evt.clientY - rect.top
              }
              return this.mousePos;
          },

          _planeCanvas: null,
          _skyCanvas: null,
          _pathCanvas: null,
          _cloudFGCanvas: null,
          _cloudMGCanvas: null,
          _cloudBGCanvas: null,

          _planeContext: null,
          _skyContext: null,
          _pathContext: null,
          _cloudFGContext: null,
          _cloudMGContext: null,
          _cloBGContext: null,

          plane: null,
          isDragging: false,
          isMouseDown: false,
          mouseX: null,
          mouseY: null,
          mousePos: null,
          gravity: 5,
          startX: null,
          startY: null,
          _planes: []
       }
    );

    WinJS.Namespace.define('App', {
        FlyCanvas: flyCanvas
    });

})();