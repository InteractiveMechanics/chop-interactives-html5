(function () {
    "use strict";

    var constants = {};

    var climbCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {

              //this.hero = [];

              this.stage;
              this.stageCanvas = document.getElementById('stage');

              this._hero1;
              this.hero1Canvas = document.getElementById('hero1');

              this._hero2;
              this.hero2Canvas = document.getElementById('hero2');

              this._hero3;
              this.hero3Canvas = document.getElementById('hero3');

              this._instructionsCanvas = document.getElementById('instructionsCanvas');
              this._instructionsContext = this._instructionsCanvas.getContext('2d');

              this.isMouseDown = false;
              this.mousePos = {
                  x: -1,
                  y: -1
              };

              this.showInstructions();

              this.stage = new Stage(this.stageCanvas);

              this._hero1 = new Hero(this.hero1Canvas);
              this._hero2 = new Hero(this.hero2Canvas);
              this._hero3 = new Hero(this.hero3Canvas);

          },

          setup: function () {
              console.log('setup () run');
          },


          detectActivated: function (player, Hero, index, hand) {
              var that = this;
              var mX = player['pos']['x'] - ((640 * index)-10);
              var mY = player['pos']['y'];
              if (Hero) {
                  if (Hero.isActive == false) {
                      Hero.isActive = true;
                  }
                  if (hand == 'right') {
                      Hero.arrows.forEach(function (item, index) {
                          //console.log(index + "," + item.x + "," + item.y);
                          if (mX > item.x && mX < (item.x + item.width) && mY > item.y && mY < (item.y + item.height)) {
                              item.rightIsHover = true;
                              if (item.changed == false && player['confidence'] == 1) {
                                  item.changed = true;
                                  item.changePart();

                                  setTimeout(function () {
                                      item.changed = false;
                                  }, 1000);
                              }
                          } else {
                              item.rightIsHover = false;
                          }
                      });
                  }
                  if (hand == 'left') {
                      Hero.arrows.forEach(function (item, index) {
                          //console.log(index + "," + item.x + "," + item.y);
                          if (mX > item.x && mX < (item.x + item.width) && mY > item.y && mY < (item.y + item.height)) {
                              item.leftIsHover = true;
                              if (item.changed == false && player['confidence'] == 1 ) {
                                  item.changed = true;
                                  item.changePart();

                                  setTimeout(function () {
                                      item.changed = false;
                                  }, 1000);
                              }
                          } else {
                              item.leftIsHover = false;
                          }
                      });
                  }
                  
              }
          },



          update: function() {
              this._hero1.update();
              this._hero2.update();
              this._hero3.update();
          },

          draw: function () {
              this.clear(this.hero1Canvas);
              this.clear(this.hero2Canvas);
              this.clear(this.hero3Canvas);

              this.stage.draw();
              this._hero1.draw();
              this._hero2.draw();
              this._hero3.draw();
          },

          clear: function (canvas) {
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, 1920, 1080);
          },

          

          newPlayerAdded: function() {
              this.playerAdded = true;
          },
          newPlayerRemoved: function () {
              this.playerAdded = false;
              this._instructions.paused = true;
          },

          showInstructions: function () {
              this._instructions.x = 1715;
              this._instructions.y = 775;
              this._instructions.draw(this._instructionsContext);
          },

          getMousePos: function (_canvas, evt) {
      var rect = _canvas.getBoundingClientRect();
      return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
      };
  },

  

  mouseMove: function (e) {
      mousePos = getMousePos(this.hero2Canvas, e);
  },

  mouseDown: function (e) {
      isMouseDown = true;
  },

    mouseUp: function (e) {
      isMouseDown = false;
    },

    

          rightHandArray: [],
          leftHandArray: [],
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