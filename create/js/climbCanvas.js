(function () {
    //"use strict";

    var constants = {};

    var climbCanvas = WinJS.Class.define(
      function () {
      },
      {
          init: function () {
              this.linesCanvas = document.getElementById('lines-canvas');
              this.linesContext = this.linesCanvas.getContext('2d');
              this.linesCanvas.width = 1920;
              this.linesCanvas.height = 1080;

              this.uiCanvas = document.getElementById('ui-canvas');
              this.uiContext = this.uiCanvas.getContext("2d");

              this._instructionsCanvas = document.getElementById('instructionsCanvas');
              this._instructionsContext = this._instructionsCanvas.getContext('2d');

              //this.setLiteBrites();

              this.showInstructions();
              this.createPalette();
              this.createUiRegion();
              this.createPager();
              this.createClear();
              this.createPages();
              this.createLines();
              for (var i = 0; i < this.colorData.length; i++) {
                  this.droplets[i] = new Image();
                  this.droplets[i].src = './images/color-drop-' + i + '.png';
              };
              this.pages[0].heatMap = this.createHeatmap(this.pages[0]);
              this.pages[1].heatMap = this.createHeatmap(this.pages[1]);
              this.regions = this.pages[this.currentPage].regions;
              //console.log(this.pages);
              this.changed = false;

              
              
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
    
          createPalette: function () {
              for(var i = 0; i < this.colorData.length; i++) {
                  var colorName = this.colorData[i][0];
                  var colorRGBA = [this.colorData[i][1], this.colorData[i][2], this.colorData[i][3], this.colorData[i][4]];
                  var colorFile = 'images/btn-' + colorName ;
                  var posX = this.palettePosX + (this.paletteSpacing*i);
                  var posY = this.palettePosY;
                  this.paletteColors.push(new PaletteColor(colorName, colorRGBA, colorFile, posX, posY, this.paletteRadius, this.uiCanvas));

              }

          },

          createUiRegion: function() {
              this.uiRegion = new Region('ui-bar', 0, 956, this.uiCanvas);
          },

          createPager: function () {
              this.pageLeft = new Button('arrow-left', './images/icon-arrow-left', 35, 970, this.uiCanvas);
              this.pageRight = new Button('arrow-right', './images/icon-arrow-right', 104, 972, this.uiCanvas);
              //console.log(this.pageLeft);
          },

          createClear: function () {
              this.pageClear = new Button('clear','./images/icon-clear', 1810, 979, this.uiCanvas);
          },

          createPages: function createPages() {
              for(var i = 0; i < this.pageData.length; i++) {
                  this.pages.push(new Page(this.pageData[i][0], this.pageData[i][1], this.uiCanvas));
                  //console.log(this.pageData.length);
  
              }

          },

          createLines: function () {

              for(var i = 0; i < this.pageData.length; i++) {
                  this.lines[i] = new Image();
                  //    this.lines[i].onload = function() {
                  //    this.linesCanvas.width = 1920 //lines[i].naturalWidth;
                  //    this.linesCanvas.height =1080 //lines[i].naturalHeight;
                  //}
                  this.lines[i].src = './images/lines-'+this.pageData[i][0]+'.png';
              }
          },
          clearScreen: function (context) {
              var context = context;
              context.clearRect(0, 0, 1920, 1080);
          },

          isOverCircle: function (mX, mY, circle) {
              return Math.sqrt((mX-circle.x)*(mX-circle.x) + (mY-circle.y)*(mY-circle.y)) < circle.r;
          },

          isOverHelpIcon: function (mX, mY) {
              return (mX >= this._instructions.x && mX < this._instructions.x + 200 && mY >= this._instructions.y && mY < this._instructions.y + 200);
          },

          createHeatmap: function (page){
              //make heatmap of pixeldata
              var regionMap = [];
              var tcanvas = document.createElement('canvas'); /// create temp canvas
              var tctx = tcanvas.getContext('2d');
              tcanvas.width = 1920;
              tcanvas.height = 1080;
              var arrayLength = 1920 * 1080;
              for (var i = 0; i < arrayLength; i++) {
                  regionMap.push(-1);
              };
              //provide default valuse of -1
              for (var i = 0; i < page.regions.length; i++) {
              //console.log('generating regiondata');
              var region = page.regions[i];

              tctx.drawImage(region.img, region.x, region.y);
              var pixels = tctx.getImageData(0, 0, tcanvas.width, tcanvas.height);
              var data = pixels.data;
              for (var j = 0; j < data.length; j += 4) {
                  if (data[j + 3] > 0) {
                      var alphaIndex = (j / 4);
                    regionMap[alphaIndex] = i;
                }
              };
              tctx.clearRect(0, 0, tcanvas.width, tcanvas.height);
              
              };
              console.log(regionMap);
              return regionMap;
},

         getPixelAlpha: function (img, mX, mY) {
            var width = img.width;
            var height = img.height;
            var tcanvas = document.createElement('canvas'), /// create temp canvas
            tctx = tcanvas.getContext('2d');
            tcanvas.width = img.naturalWidth; /// set width = region width
            tcanvas.height = img.naturalHeight;
            tctx.drawImage(img, 0, 0);
            var pixel = tctx.getImageData(mX, mY, 1, 1);
            var data = pixel.data;
            var rgba = 'rgba(' + data[0] + ', ' + data[1] +
                   ', ' + data[2] + ', ' + (data[3] / 255) + ')';
            return (data[3] / 255);
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

    changeColor: function (img, colorIndex){
        var newImage;
        var width = img.width;
        var height = img.height;
        var tcanvas = document.createElement('canvas'), /// create temp canvas
        tctx = tcanvas.getContext('2d');
        tcanvas.width = img.naturalWidth;
        tcanvas.height = img.naturalHeight;
        tctx.drawImage(img, 0, 0);
        var imageData = tctx.getImageData(0, 0, width, height);
        var data = imageData.data;
        var colorRGBA = [this.colorData[colorIndex][1], this.colorData[colorIndex][2], this.colorData[colorIndex][3], this.colorData[colorIndex][4]];
        var newColor = colorRGBA;
        for (var i = 0; i < data.length; i += 4) {
            if (data[i + 3] > 0){
                data[i]     = newColor[0];     // red
                data[i + 1] = newColor[1]; // green
                data[i + 2] = newColor[2]; // blue
            }
            else{
                data[i]     = 0;     // red
                data[i + 1] = 0; // green
                data[i + 2] = 0; // blue
                data[i + 3] = 0;
            }
        }
        imageData.data = data;
        var image = this.imagedata_to_image(imageData);
        // console.log(imageData);
        return image;
    },

          sleep: function() {
              var e = new Date().getTime() + (150);
              while (new Date().getTime() <= e) {}
          },

    checkRegions: function (index, player, lastPlayer, hand) {
        var mouseX = Math.floor(player['pos']['x']);
        var mouseY = Math.floor(player['pos']['y']);
        //draw droplets for each hand
        //assign white if nothing picked
        if (hand == "right") {
            if (this.rightHandArray[index] == null) {
                this.rightHandArray[index] = 10;
            };
            this.uiContext.drawImage(this.droplets[this.rightHandArray[index]], mouseX +50, mouseY);
        }
        //if (hand == "left") {
        //    if (this.leftHandArray[index] == null) {
        //        this.leftHandArray[index] = 10;
        //    }
        //    this.uiContext.drawImage(this.droplets[this.leftHandArray[index]], mouseX - 50, mouseY);
        //}
        if (this.isOverHelpIcon(mouseX, mouseY)) {
            this._instructions.paused = false;
        }
        if (mouseY < this.uiRegion.y) {
            var heatMap = this.pages[this.currentPage].heatMap
            var mapIndex = mouseX + (mouseY * 1920);
            var regionIndex = heatMap[mapIndex];
            console.log(regionIndex);

            if (regionIndex > 0 && hand == 'right' && (mouseY < this.pageAreaY) && player['confidence'] == 1 && player['status'] == 'closed') {

                var newImage = this.changeColor(this.regions[regionIndex].img, this.rightHandArray[index]);
                this.regions[regionIndex].img = newImage;
            }
            //if (regionIndex > 0 && hand == 'left' && (mouseY < this.pageAreaY) && player['confidence'] == 1 && player['status'] == 'closed') {
            //    if (this.leftHandArray[index] == null) {
            //        this.leftHandArray[index] = [this.colorData[10][1], this.colorData[10][2], this.colorData[10][3], this.colorData[10][4]];
            //    };
            //    var newImage = this.changeColor(this.regions[regionIndex].img, this.leftHandArray[index]);
            //    this.regions[regionIndex].img = newImage;
            //    console.log(regionIndex + ' region , color ' + this.leftHandArray[index]);
            //}
        };

        //uiregion hover states
        if (mouseY > this.uiRegion.y) {
            for (var i = 0; i < this.paletteColors.length; i++) {
                var paletteColor = this.paletteColors[i];
                if (this.isOverCircle(mouseX, mouseY, paletteColor)) {
                    paletteColor.isHover = true;
                    if (player['status'] == 'closed' && player['confidence'] == 1) {
                        if (hand == 'right') {
                            this.rightHandArray[index] = [i];
                        }
                    }

                } else {
                    paletteColor.isHover = false;
                }
            }


            if (this.pageRight) {
                if (mouseX > this.pageRight.x && mouseX < (this.pageRight.x + this.pageRight.width) && mouseY > this.pageRight.y && mouseY < (this.pageRight.y + this.pageRight.height)) {
                    this.pageRight.isHover = true;
                    if (player['confidence'] == 1 && player['status'] == 'closed') {
                        console.log('changed page');
                        this.changed = true;
                        this.changePageRight();

                        setTimeout(function () {
                            this.changed = false;
                        }, 500);
                    }
                } else {
                    this.pageRight.isHover = false;
                }
            }

            if (this.pageLeft) {
                if (mouseX > this.pageLeft.x && mouseX < (this.pageLeft.x + this.pageLeft.width) && mouseY > this.pageLeft.y && mouseY < (this.pageLeft.y + this.pageLeft.height)) {
                    this.pageLeft.isHover = true;
                    if (this.changed == false && player['confidence'] == 1 && player['status'] == 'closed') {
                        console.log('changed page');
                        this.changed = true;
                        this.changePageLeft();

                        setTimeout(function () {
                            this.changed = false;
                        }, 500);
                    }
                } else {
                    this.pageLeft.isHover = false;
                }
            }


            if (this.pageClear) {

                if (this.isOverCircle(mouseX, mouseY, this.pageClear)) {
                    this.pageClear.isHover = true;
                    
                    if (player['status'] == 'closed' && player['confidence'] == 1) {
                        console.log('clear image data');
                        for (var i = 0; i < this.regions.length; i++) {
                            var newImage = this.changeColor(this.regions[i].img, 10);
                            this.regions[i].img = newImage;
                        }
                    }
                }
                else {
                    this.pageClear.isHover = false;
                }
            }
        }
        


    },

    imagedata_to_image: function(imagedata) {
    var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = imagedata.width;
        canvas.height = imagedata.height;
        ctx.putImageData(imagedata, 0, 0);

        var image = new Image();
        image.src = canvas.toDataURL();
        return image;
    },

    changePageLeft: function () {
        this.currentPage = 0;
        this.regions = this.pages[this.currentPage].regions;
        
    },

    changePageRight: function () {
        this.currentPage = 1;

        this.regions = this.pages[this.currentPage].regions;
    },
          
          

          update: function() {

          },

          drawLines: function (lines) {
                  this.linesContext.clearRect(0, 0, 1920, 1080);
                  this.linesContext.drawImage(lines,0,0);
          },
            

          draw: function () {
              var self = this;
              this.clearScreen(this.uiContext);

                  this.drawLines(this.lines[this.currentPage]);
                  
                  

                  this.regions.forEach(function (region) {
                      region.draw();

                      //if (region.imgData){
                      //    self.uiContext.drawImage(region.regionContext, region.x, region.y);
                      //}
                      //else{
                      //    region.draw();
                      //}
                  });

                  this.uiRegion.draw();
                  this.paletteColors.forEach(function(color){
                      color.draw();
                  });

                  this.pageRight.draw();
                  this.pageLeft.draw();
                  this.pageClear.draw();

          },

          randomValue: function (min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          },

          paletteColors: [],
          droplets: [],
      pages: [],
      regions: [],
      lines: [],
      palettePosX: 403,
      palettePosY: 1022,
      paletteSpacing: 100,
      paletteRadius: 45,
      pageAreaY: 956,
      currentColor: [],
      currentPage: 1,

      colorData: [
        ['blue-lt', 20, 178, 218, 1.00],
        ['blue', 53, 53, 168, 1.00],
        ['purple', 148, 40, 138, 1.00],
        ['pink', 238, 26, 119, 1.00],
        ['red', 255, 0, 26, 1.00],
        ['orange', 247, 146, 60, 1.00],
        ['yellow', 254, 254, 86, 1.00],
        ['green-lt', 139, 198, 87, 1.00],
        ['green', 0, 104, 34, 1.00],
        ['black', 0, 0, 0, 1.00],
        ['white', 255, 255, 255, 1.00],
        ['brown', 89, 49, 22, 1.00]
      ],

      pageData: [
      ['dogs',
      [
      ['dogs-1', 12, 466],
      ['dogs-2', 99, 800],
      ['dogs-3', 177, 627],
      ['dogs-4', 293, 494],
      ['dogs-5', 229, 894],
      ['dogs-6', 1240, 18],
      ['dogs-7', 22, 28],
      ['dogs-8', 43, 86],
      ['dogs-9', 163, 302],
      ['dogs-10', 9, 826],
      ['dogs-11', 511, 997],
      ['dogs-12', 482, 760],
      ['dogs-13', 417, 355],
      ['dogs-14', 232, 40],
      ['dogs-15', 776, 378],
      ['dogs-16', 856, 182],
      ['dogs-17', 721, 24],
      ['dogs-18', 1134, 599],
      ['dogs-19', 1202, 574],
      ['dogs-20', 846, 392],
      ['dogs-21', 1234, 856],
      ['dogs-22', 1545, 39],
      ['dogs-23', 1742, 170],
      ['dogs-24', 1171, 345],
      ['dogs-25', 1473, 316],
      ['dogs-26', 1498, 538],
      ['dogs-27', 1458, 798],
      ['dogs-28', 1637, 866],
      ['dogs-29', 1443, 316],
      ['dogs-30', 1558, 875],
      ['dogs-31', 367, 17]
      ]
      ],
      ['carousel',
        [
        ['carousel-1', 241, 369],
        ['carousel-2', 1717, 491],
        ['carousel-3', 496, 407],
        ['carousel-4', 614, 281],
        ['carousel-5', 1639, 847],
        ['carousel-6', 71, 13],
        ['carousel-7', 944, 34],
        ['carousel-8', 1658, 54],
        ['carousel-9', 205, 891],
        ['carousel-10', 11,154],
        ['carousel-11', 517, 637],
        ['carousel-12', 554, 649],
        ['carousel-13', 611, 514],
        ['carousel-14', 775, 583],
        ['carousel-15', 815, 596],
        ['carousel-16', 879, 516],
        ['carousel-17', 1021, 655],
        ['carousel-18', 1062, 666],
        ['carousel-19', 1127, 516],
        ['carousel-20', 1263, 577],
        ['carousel-21', 1303, 589],
        ['carousel-22', 1355, 516],
        ['carousel-23', 734, 540],
        ['carousel-24', 454, 516],
        ['carousel-25', 1461, 272],
        ['carousel-26', 572, 6],
        ['carousel-27', 558, 261],
        ['carousel-28', 352, 545],
        ['carousel-29', 1191, 245],
        ['carousel-30', 1511, 649],
        ['carousel-31', 107, 42],
        ['carousel-32', 18, 77],
        ['carousel-33', 506, 453],
        ['carousel-34', 535, 462]
        ]
      ]
      ],
          
          rightHandArray: [],
          leftHandArray: [],

          _instructionsCanvas: null,
          _instructionsContext: null,
          _instructions: new Instructions(),
          playerAdded: false,
          randomNumber: [],

      }
    );

    WinJS.Namespace.define('App', {
        ClimbCanvas: climbCanvas
    });

})();