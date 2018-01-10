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

              this.isMouseDown = false;
              this.mousePos = {
                  x: -1,
                  y: -1
              };

              //this.showInstructions();

              this.stage = new Stage(this.stageCanvas);

              this._hero1 = new Hero(this.hero1Canvas);
              this._hero2 = new Hero(this.hero2Canvas);
              this._hero3 = new Hero(this.hero3Canvas);

              //this.hero[0].isActive = false;
              //this.hero[2].isActive = false;

              //this.hero2Canvas.onmousedown = this.mouseDown;
              //this.hero2Canvas.onmouseup = this.mouseUp;
              //this.hero2Canvas.onmousemove = this.mouseMove;
          },

          setup: function () {
              console.log('setup () run');
          },

              

          //checkHands: function (index, player) {
          //    console.log(index + "," + mouseX + ',' + mouseY);
          //    var mouseX = player['pos']['x'] - this.hero[index].offset;
          //    var mouseY = player['pos']['y'];
              

          //    this.hero[index].arrows.forEach(function (item, index) {
          //        console.log(index + "," + item.x + "," + item.y);
          //        if (mouseX > item.x && mouseX < (item.x + item.width) && mouseY > item.y && mouseY < (item.y + item.height)) {
          //            console.log('hover');
          //            item.isHover = true;
          //            if (player['confidence'] == 1 && player['status'] == 'closed') {
                          
          //                item.changePart();
          //            }
          //        } else {
          //            item.isHover = false;
          //        }
          //    });

              
          //},

          detectActivated: function (player, Hero, index) {
              var that = this;
              var mX = player['pos']['x'] - ((640 * index)-10);
              var mY = player['pos']['y'];
              if (Hero) {
                  if (Hero.isActive == false) {
                      Hero.isActive = true;
                  }
                  Hero.arrows.forEach(function (item, index) {
                      //console.log(index + "," + item.x + "," + item.y);
                      if (mX > item.x && mX < (item.x + item.width) && mY > item.y && mY < (item.y + item.height) && item.changed == false) {
                          console.log('hover');
                          item.isHover = true;
                          if (player['confidence'] == 1 && player['status'] == 'closed') {
                              item.changed = true;
                              item.changePart();
                              setTimeout ( function() {
                                  item.changed = false;
                              }, 500);
                          }
                      } else {
                          item.isHover = false;
                      }
                  });
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

          playerAdded: false,
          randomNumber: []

      }
    );

    WinJS.Namespace.define('App', {
        ClimbCanvas: climbCanvas
    });

})();