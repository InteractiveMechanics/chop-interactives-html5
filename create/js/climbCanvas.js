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

              this.showInstructions();
              this.createPalette();
              this.createPager();
              this.createClear();
              this.createPages();
              this.createLines();
              for (var i = 0; i < this.colorData.length; i++) {
                  this.droplets[i] = new Image();
                  this.droplets[i].src = './images/color-drop-outline-' + i + '.png';
              };
              
              
              
              //console.log(this.pages);
              this.changed = false;

              
              
          },
          showInstructions: function () {
              this._instructions.x = 1555;
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

          drawUiRegion: function () {
              this.uiContext.fillStyle = "rgba(0,0,0, 0.2)";
              this.uiContext.fillRect(0, 0, this.uiRegionWidth, 1080);
              this.uiContext.fillRect(1920- this.uiRegionWidth, 0, 1920, 1080);
          },
    
          createPalette: function () {
              if (this.paletteColors == 0) {
                  //half on left
                  for (var i = 0; i < this.colorData.length/2; i++) {
                      var colorName = this.colorData[i][0];
                      var colorRGBA = [this.colorData[i][1], this.colorData[i][2], this.colorData[i][3], this.colorData[i][4]];
                      var colorFile = 'images/btn-' + colorName;
                      var posX = this.palettePosLeftX ;
                      var posY = this.palettePosLeftY + (this.paletteSpacing * (i));
                      this.paletteColors.push(new PaletteColor(colorName, colorRGBA, colorFile, posX, posY, this.paletteRadius, this.uiCanvas));

                  }
                  //half on right
                  for (var i = this.colorData.length / 2; i < this.colorData.length; i++) {
                      var colorName = this.colorData[i][0];
                      var colorRGBA = [this.colorData[i][1], this.colorData[i][2], this.colorData[i][3], this.colorData[i][4]];
                      var colorFile = 'images/btn-' + colorName;
                      var posX = this.palettePosRightX ;
                      var posY = this.palettePosRightY + (this.paletteSpacing * (i - (this.colorData.length / 2)));
                      this.paletteColors.push(new PaletteColor(colorName, colorRGBA, colorFile, posX, posY, this.paletteRadius, this.uiCanvas));

                  }

              }
          },

         
          createPager: function () {
              this.pageLeft = new Button('arrow-left', './images/icon-arrow-left', 35, 930, 107, 92, this.uiCanvas);
              this.pageRight = new Button('arrow-right', './images/icon-arrow-right', 115, 932, 98, 97, this.uiCanvas);
              this.pagerBkgr = new Image();
              this.pagerBkgr.src = './images/icon-arrow-bkgr.png';
              console.log(this.pageLeft);
          },

          createClear: function () {
              this.pageClear = new Button('clear','./images/icon-clear', 1800, 930, 80, 80, this.uiCanvas);
          },

          createPages: function createPages() {
              console.log(this.pages.length);

              for (var i = 0; i < this.pages.length; i++) {
                  if(this.pages[i].loaded){
                      this.pagesLoadedArray[i] = true;
                  }
                  else {
                      this.pagesLoadedArray[i] = false;
                  }
              }
              
              if (this.pagesLoadedArray.indexOf('false') ==-1) {
                  if (this.pages.length == 0) {
                      for (var i = 0; i < this.pageData.length; i++) {
                          this.pages.push(new Page(this.pageData[i][0], this.pageData[i][1], this.uiCanvas));
                      }
                  }
                  

                  that = this;
                  for (var i = 0; i < that.pages.length; i++) {

                      if (!that.pages[i].heatMap) {
                          that.pages[i].regionsLoaded();
                          console.log(that.pages[i].loaded);
                          if (that.pages[i].loaded) {
                              //console.log(that.pages[i].name);
                              that.pages[i].heatMap = that.createHeatmap(that.pages[i]);
                              //create color version of each region -- improves performance but oh god  -- loading now resolved with individual color images for each region
                              //for (var j = 0; j < that.pages[i].regions.length; j++) {
                              //    for (var k = 0; k < that.colorData.length; k++) {
                              //        //console.log(that.pages[i].regions[j].name + " " + that.colorData[k][0] + " image added");
                              //        that.pages[i].regions[j].color[k] = that.changeColor(that.pages[i].regions[j].img, k);
                              //        //console.log(that.pages[i].regions[j].color[k]);
                              //};
                              //}
                                  
                              //console.log(that.pages[i].heatMap);
                          }

                      }
                  }
                  this.regions = this.pages[this.currentPage].regions;
              }
          },

          createLines: function () {
              if (this.lines == 0) {
                  for (var i = 0; i < this.pageData.length; i++) {
                      this.lines[i] = new Image();
                      this.lines[i].src = './images/lines-' + this.pageData[i][0] + '.png';
                  }
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

          createHeatmap: function (page) {
              //make heatmap of pixeldata
              var regionMap = new Array(1920 * 1080);
              for (var i = 0; i < page.regions.length; i++) {
                  console.log('generating regiondata');
                  var region = page.regions[i];
                  
                  var data = region.imgData;
                  for (var j = 0; j < data.length; j += 4) {
                      if (data[j + 3] > 0) {
                          var alphaIndex = (j / 4);
                          regionMap[alphaIndex] = i;
                      }
                  };

              };


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
              var that = this;
              //var properX = player['pos']['x'];
              //var properY = player['pos']['y'];
        var mouseX = Math.floor(player['pos']['x']);
        var mouseY = Math.floor(player['pos']['y']);
        var heatMap = this.pages[this.currentPage].heatMap;
       
        //draw droplets for each hand
        //assign white if nothing picked
        if (hand == "right") {
            if (this.rightHandArray[index] == null) {
                this.rightHandArray[index] = 10;
            };
            if (this.rightHandTimerArray1[index] == null) {
                this.rightHandTimerArray1[index] = -1;
            };
            if (this.rightHandTimerArray2[index] == null) {
                this.rightHandTimerArray2[index] = -1;
            };
            this.uiContext.drawImage(this.droplets[this.rightHandArray[index]], mouseX +50, mouseY);
        }
        if (hand == "left") {
            if (this.leftHandArray[index] == null) {
                this.leftHandArray[index] = 10;
            };
            if (this.leftHandTimerArray1[index] == null) {
                this.leftHandTimerArray1[index] = -1;
            };
            if (this.leftHandTimerArray2[index] == null) {
                this.leftHandTimerArray2[index] = -1;
            };
            this.uiContext.drawImage(this.droplets[this.leftHandArray[index]], mouseX - 50 - 36, mouseY); //offset by drop width.
        }
        if (this.isOverHelpIcon(mouseX, mouseY)) {
            this._instructions.paused = false;
        }
        if (mouseX > this.uiRegionWidth+40 && mouseX < 1920-this.uiRegionWidth && heatMap) {
            
            
            var mapIndex = mouseX + (mouseY * 1920);
            var regionIndex = heatMap[mapIndex];
            console.log(regionIndex);

            

            if (regionIndex > -1 && hand == 'right' && (mouseY < this.pageAreaY) && player['confidence'] == 1 && player['status'] == 'open') {
                setTimeout(function () {
                    that.rightHandTimerArray1[index] = regionIndex;

                }, 500, regionIndex, index);
                setTimeout(function () {
                    that.rightHandTimerArray2[index] = regionIndex;
                    
                }, 1000, regionIndex, index);
                console.log(this.rightHandTimerArray1[index]+ ' , ' + regionIndex);
                if (this.rightHandTimerArray1[index] == regionIndex && this.rightHandTimerArray2[index] == regionIndex) {
                    console.log('timed-hover-event')
                    this.regions[regionIndex].img = this.regions[regionIndex].color[this.rightHandArray[index]];
                }
                
            }
            if (regionIndex > -1 && hand == 'left' && (mouseY < this.pageAreaY) && player['confidence'] == 1 && player['status'] == 'open') {
                setTimeout(function () {
                    that.leftHandTimerArray1[index] = regionIndex;

                }, 500, regionIndex, index);
                setTimeout(function () {
                    that.leftHandTimerArray2[index] = regionIndex;

                }, 1000, regionIndex, index);
                console.log(this.leftHandTimerArray1[index] + ' , ' + regionIndex);
                if (this.leftHandTimerArray1[index] == regionIndex && this.leftHandTimerArray2[index] == regionIndex) {
                    console.log('timed-hover-event');
                    this.regions[regionIndex].img = this.regions[regionIndex].color[this.leftHandArray[index]];
                }

            }

            
        };

        //uiregion hover states
    if (mouseX < this.uiRegionWidth+40 || mouseX > 1920 - this.uiRegionWidth) {
        if (hand == 'right'){
            this.rightHandTimerArray1[index] = -1;
            this.rightHandTimerArray2[index] = -1;
        }
        if (hand == 'left'){
            this.leftHandTimerArray1[index] = -1;
            this.leftHandTimerArray2[index] = -1;
        }
            for (var i = 0; i < this.paletteColors.length; i++) {
                var paletteColor = this.paletteColors[i];
                
                if (this.isOverCircle(mouseX, mouseY, paletteColor)) {
                    paletteColor.isHover = true;
                    if (player['status'] == 'closed' && player['confidence'] == 1) {
                        if (hand == 'right') {
                            this.rightHandArray[index] = [i];
                            console.log(paletteColor);
                        }
                    }
                    if (player['status'] == 'closed' && player['confidence'] == 1) {
                        if (hand == 'left') {
                            this.leftHandArray[index] = [i];
                            console.log(paletteColor);
                        }
                    }

                } else {
                    paletteColor.isHover = false;
                }
            }


            if (this.pageRight) {
                if (mouseX > this.pageRight.x && mouseX < (this.pageRight.x + this.pageRight.width) && mouseY > this.pageRight.y && mouseY < (this.pageRight.y + this.pageRight.height)) {
                    this.pageRight.isHover = true;
                    if (!this.changed && player['confidence'] == 1 && player['status'] == 'closed') {
                        console.log('changed page');
                        this.changePageRight();
                        this.changed = true;

                        setTimeout(function () {
                            that.changed = false;
                        }, 500);
                    }
                } else {
                    this.pageRight.isHover = false;
                }
            }

            if (this.pageLeft) {
                if (mouseX > this.pageLeft.x && mouseX < (this.pageLeft.x + this.pageLeft.width) && mouseY > this.pageLeft.y && mouseY < (this.pageLeft.y + this.pageLeft.height)) {
                    this.pageLeft.isHover = true;
                    if (!this.changed && player['confidence'] == 1 && player['status'] == 'closed') {
                        console.log('changed page');
                        this.changePageLeft();
                        this.changed = true;

                        setTimeout(function () {
                            that.changed = false;
                        }, 500);
                    }
                } else {
                    this.pageLeft.isHover = false;
                }
            }


            if (this.pageClear) {

                if (mouseX > this.pageClear.x && mouseX < (this.pageClear.x + this.pageClear.width) && mouseY > this.pageClear.y && mouseY < (this.pageClear.y + this.pageClear.height)) {
                    this.pageClear.isHover = true;
                    
                    if (player['status'] == 'closed' && player['confidence'] == 1) {
                        console.log('clear image data');
                        for (var i = 0; i < this.regions.length; i++) {
                            this.regions[i].img = this.regions[i].color[10];
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
        if (this.currentPage > 0) {
            this.currentPage--;
        }
        else {
            this.currentPage = this.pages.length-1;
        }
        this.regions = this.pages[this.currentPage].regions;
        
    },

    changePageRight: function () {
        if (this.currentPage < this.pages.length-1) {
            this.currentPage ++;
        }
        else {
            this.currentPage = 0;
        }
        

        this.regions = this.pages[this.currentPage].regions;
    },
          
          

          update: function() {

          },

          drawLines: function (lines) {
                  this.uiContext.drawImage(lines,0,0);
          },
            

          draw: function () {
              var self = this;
              this.clearScreen(this.uiContext);

                  
                  
                  

                  this.regions.forEach(function (region) {
                      region.draw();

                      //if (region.imgData){
                      //    self.uiContext.drawImage(region.regionContext, region.x, region.y);
                      //}
                      //else{
                      //    region.draw();
                      //}
                  });
                  this.drawLines(this.lines[this.currentPage]);
                  this.drawUiRegion();
                  this.paletteColors.forEach(function(color){
                      color.draw();
                  });

                  

                  this.uiContext.drawImage(this.pagerBkgr, 28, 925);
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
      paletteRadius: 45,
      palettePosLeftX: 80,
      palettePosLeftY: 300,
      palettePosRightX: 1840,
      palettePosRightY: 300,
      paletteSpacing: 100,
      pageAreaY: 956,
      currentColor: [],
      currentPage: 0,
      pagesLoadedArray: [],

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
      ['ocean',
      [
      ['ocean-1', 0, 113],
      ['ocean-2', 1623, 46],
      ['ocean-3', 1722, 395],
      ['ocean-4', 1638, 562],
      ['ocean-5', 1517, 768],
      ['ocean-6', 469, 40],
      ['ocean-7', 1348, 186],
      ['ocean-8', 1150, 7],
      ['ocean-9', 867, 314],
      ['ocean-10', 1108, 551],
      ['ocean-11', 633, 772],
      ['ocean-12', 750, 439],
      ['ocean-13', 120, 718],
      ['ocean-15', 483, 235],
      ['ocean-16', 397, 553],
      ['ocean-17', 48, 542],
      ['ocean-18', 26, 191],
      ['ocean-19', -1, -12],
      ['ocean-20', 738, 9],
      ]
      ],
      ['space',
      [
      ['space-1', 0, 0],
      ['space-2', 1432, 57],
      ['space-3', 1524, 129],
      ['space-4', 0, 367],
      ['space-5', 842, 339],
      ['space-6', 680, 628],
      ['space-7', 60, 44],
      ['space-8', 991, 375],
      ['space-9', 0, 64],
      ['space-10', 1573, 30],
      ['space-11', 635, 136],
      ['space-12', 645, 92],
      ['space-13', 114, 253],
      ['space-14', 89, 356],
      ['space-15', 341, 90],
      ['space-16', 740, 24],
      
      ]
      ],
      //['music',
      //[
      //['music-1', -90, 208],
      //['music-2', 1485, 424],
      //['music-3', 561, 761],
      //['music-4', -10, 439],
      //['music-5', 538, 595],
      //['music-6', 1551, -123],
      //['music-7', 1481, 659],
      //['music-8', 1533, 659],
      //['music-9', 1348, 509],
      //['music-10', 1744, 861],
      //['music-11', 1323, 849],
      //['music-12', 1240, 857],
      //['music-13', 1075, 845],
      //['music-14', 1221, 697],
      //['music-15', 1235, 444],
      //['music-16', 1346, 417],
      //['music-17', 1425, 277],
      //['music-18', 1539, 111],
      //['music-19', 1712, -113],
      //['music-20', 1327, 31],
      //['music-21', 1206, 207],
      //['music-22', 973, 335],
      //['music-23', 824, 661],
      //['music-24', -11, 439],
      //['music-25', 288, 592],
      //['music-26', 47, 695],
      //['music-27', 19, 501],
      //['music-28', 41, 217],
      //['music-29', 46, 14],
      //['music-30', 253, 25],
      //['music-31', 327, 189],
      //['music-32', 390, 241],
      //['music-33', 549, 54],
      //['music-34', 648, 189],
      //['music-35', 809, 59],
      //['music-36', 883, 575],
      //['music-37', 587, 339],
      //['music-38', 843, 269],
      //['music-39', 973, 149],
      //['music-40', 1119, 87],
      //['music-41', 1111, 39],
      //['music-42', 843, -103],
      //['music-43', 601, -266],
      //]
      //],
      //['flowers',
      //[
      //['flowers-1', 72, 15],
      //['flowers-2', 0, 31],
      //['flowers-3', 64, 91],
      //['flowers-4', 42, 561],
      //['flowers-5', 98, 563],
      //['flowers-6', 33, 690],
      //['flowers-7', 333, 706],
      //['flowers-8', 544, 791],
      //['flowers-9', 624, 354],
      //['flowers-10', 539, 467],
      //['flowers-11', 729, 42],
      //['flowers-12', 907, 434],
      //['flowers-13', 907, 133],
      //['flowers-14', 945, 500],
      //['flowers-15', 1038, 783],
      //['flowers-16', 1156, 301],
      //['flowers-17', 1265, 43],
      //['flowers-18', 1537, 67],
      //['flowers-19', 1780, 74],
      //['flowers-20', 1633, 179],
      //['flowers-21', 1568, 777]
      //]
      //],
      //['micro',
      //[
      //['micro-1', 167, 18],
      //['micro-2', 103, 101],
      //['micro-3', 145, 174],
      //['micro-5', 106, 195],
      //['micro-6', 222, 242],
      //['micro-7', 203, 271],
      //['micro-8', 201, 307],
      //['micro-9', 250, 353],
      //['micro-10', 328, 416],
      //['micro-11', 298, 322],
      //['micro-12', 203, 411],
      //['micro-13', 352, 480],
      //['micro-14', 13, 396],
      //['micro-15', 100, 341],
      //['micro-16', 427, 143],
      //['micro-17', 515, 28],
      //['micro-18', 875, 117],
      //['micro-19', 777, 297],
      //['micro-20', 1275, 88],
      //['micro-21', 1232, 54],
      //['micro-22', 1405, 112],
      //['micro-23', 1355, 61],
      //['micro-24', 603, 571],
      //['micro-25', 566, 622],
      //['micro-26', 452, 859],
      //['micro-27', 377, 806],
      //['micro-28', 49, 652],
      //['micro-29', 942, 837],
      //['micro-30', 1290, 860],
      //['micro-31', 1239, 821],
      //['micro-32', 1367, 771],
      //['micro-33', 1334, 740],
      //['micro-34', 1549, 713],
      //['micro-35', 1699, 806],
      //['micro-36', 1747, 847],
      //['micro-37', 902, 238],
      //['micro-38', 1025, 626],
      //['micro-39', 1318, 315],
      //['micro-40', 1054, 150],
      //['micro-41', 819, 385],
      //['micro-42', 865, 488],
      //['micro-43', 907, 231],
      //['micro-44', 1260, 656],
      //['micro-45', 1059, 243],
      //['micro-46', 103, 101],
      //['micro-47', 145, 174],
      //['micro-48', 1446, 368],
      //['micro-49', 1564, 274],
      //['micro-50', 1647, -37],
      //['micro-51', 1567, -58],
      //['micro-52', 1684, 535],
      //['micro-53', 1571, 575],
      //['micro-54', 1663, 422],
      //['micro-55', 1602, 331],
      //['micro-56', 1576, 252],
      //['micro-57', 1620, 196],
      //['micro-58', 1695, 147],
      //['micro-59', 1672, 22],
      //['micro-60', 1661, -54]
      //]
      //],
      //['neuro',
      //[
      //['neuro-1', -25, 1069],
      //['neuro-2', 8, 1018],
      //['neuro-3', 79, 965],
      //['neuro-4', 44, 893],
      //['neuro-5', -18, 840],
      //['neuro-6', -51, 789],
      //['neuro-7', -31, 738],
      //['neuro-8', 13, 685],
      //['neuro-9', -30, 610],
      //['neuro-10', -51, 558],
      //['neuro-11', -31, 507],
      //['neuro-12', 10, 456],
      //['neuro-13', 82, 403],
      //['neuro-14', 44, 332],
      //['neuro-15', -18, 281],
      //['neuro-16', -51, 229],
      //['neuro-17', -31, 178],
      //['neuro-18', 12, 125],
      //['neuro-19', -30, 46],
      //['neuro-20', -54, 0],
      //['neuro-21', -54, 0],
      //['neuro-22', -53, 10],
      //['neuro-23', -54, 252],
      //['neuro-24', -53, 249],
      //['neuro-25', -53, 577],
      //['neuro-27', -53, 484],
      //['neuro-28', -53, 809],
      //['neuro-29', -54, 812],
      //['neuro-30', 237, 0],
      //['neuro-1', 339, 1069],
      //['neuro-2', 372, 1018],
      //['neuro-3', 443, 965],
      //['neuro-4', 408, 893],
      //['neuro-5', 346, 840],
      //['neuro-6', 313, 789],
      //['neuro-7', 333, 738],
      //['neuro-8', 377, 685],
      //['neuro-9', 334, 610],
      //['neuro-10', 313, 558],
      //['neuro-11', 333, 507],
      //['neuro-12', 375, 456],
      //['neuro-13', 446, 403],
      //['neuro-14', 408, 332],
      //['neuro-15', 346, 281],
      //['neuro-16', 313, 229],
      //['neuro-17', 333, 178],
      //['neuro-18', 376, 125],
      //['neuro-19', 334, 46],
      //['neuro-20', 311, 0],
      //['neuro-21', 310, 0],
      //['neuro-22', 311, 10],
      //['neuro-23', 310, 252],
      //['neuro-24', 310, 249],
      //['neuro-25', 310, 577],
      //['neuro-27', 310, 484],
      //['neuro-28', 310, 809],
      //['neuro-29', 310, 812],
      //['neuro-30', 605, 0],
      //['neuro-1', 702, 1069],
      //['neuro-2', 734, 1018],
      //['neuro-3', 805, 965],
      //['neuro-4', 770, 893],
      //['neuro-5', 708, 840],
      //['neuro-6', 675, 789],
      //['neuro-7', 696, 738],
      //['neuro-8', 739, 685],
      //['neuro-9', 696, 610],
      //['neuro-10', 675, 558],
      //['neuro-11', 696, 507],
      //['neuro-12', 737, 456],
      //['neuro-13', 809, 403],
      //['neuro-14', 771, 332],
      //['neuro-15', 708, 281],
      //['neuro-16', 675, 229],
      //['neuro-17', 696, 178],
      //['neuro-18', 739, 125],
      //['neuro-19', 696, 46],
      //['neuro-20', 674, 0],
      //['neuro-21', 672, 0],
      //['neuro-22', 673, 10],
      //['neuro-23', 672, 252],
      //['neuro-24', 672, 249],
      //['neuro-25', 672, 577],
      //['neuro-27', 672, 484],
      //['neuro-28', 672, 809],
      //['neuro-29', 672, 812],
      //['neuro-30', 964, 0],
      //['neuro-1', 1063, 1069],
      //['neuro-2', 1097, 1018],
      //['neuro-3', 1167, 965],
      //['neuro-4', 1132, 893],
      //['neuro-5', 1069, 840],
      //['neuro-6', 1038, 789],
      //['neuro-7', 1058, 738],
      //['neuro-8', 1101, 685],
      //['neuro-9', 1058, 610],
      //['neuro-10', 1038, 558],
      //['neuro-11', 1057, 507],
      //['neuro-12', 1099, 456],
      //['neuro-13', 1170, 403],
      //['neuro-14', 1132, 332],
      //['neuro-15', 1070, 281],
      //['neuro-16', 1037, 229],
      //['neuro-17', 1058, 178],
      //['neuro-18', 1100, 125],
      //['neuro-19', 1058, 46],
      //['neuro-20', 1036, 0],
      //['neuro-21', 1035, 0],
      //['neuro-22', 1036, 10],
      //['neuro-23', 1034, 252],
      //['neuro-24', 1034, 249],
      //['neuro-25', 1034, 577],
      //['neuro-27', 1034, 484],
      //['neuro-28', 1034, 809],
      //['neuro-29', 1034, 812],
      //['neuro-30', 1319, 0],
      //['neuro-1', 1426, 1069],
      //['neuro-2', 1458, 1018],
      //['neuro-3', 1529, 965],
      //['neuro-4', 1493, 893],
      //['neuro-5', 1432, 840],
      //['neuro-6', 1399, 789],
      //['neuro-7', 1419, 738],
      //['neuro-8', 1463, 685],
      //['neuro-9', 1420, 610],
      //['neuro-10', 1399, 558],
      //['neuro-11', 1419, 507],
      //['neuro-12', 1461, 456],
      //['neuro-13', 1532, 403],
      //['neuro-14', 1494, 332],
      //['neuro-15', 1432, 281],
      //['neuro-16', 1399, 229],
      //['neuro-17', 1419, 178],
      //['neuro-18', 1462, 125],
      //['neuro-19', 1419, 46],
      //['neuro-20', 1397, 0],
      //['neuro-21', 1396, 0],
      //['neuro-22', 1396, 10],
      //['neuro-23', 1396, 252],
      //['neuro-24', 1396, 249],
      //['neuro-25', 1396, 577],
      //['neuro-27', 1396, 484],
      //['neuro-28', 1396, 809],
      //['neuro-29', 1396, 812],
      //['neuro-30', 1670, 0],
      //['neuro-1', 1787, 1069],
      //['neuro-2', 1820, 1018],
      //['neuro-3', 1890, 965],
      //['neuro-4', 1855, 893],
      //['neuro-5', 1793, 840],
      //['neuro-6', 1761, 789],
      //['neuro-7', 1781, 738],
      //['neuro-8', 1824, 685],
      //['neuro-9', 1781, 610],
      //['neuro-10', 1761, 558],
      //['neuro-11', 1781, 507],
      //['neuro-12', 1822, 456],
      //['neuro-13', 1894, 403],
      //['neuro-14', 1855, 332],
      //['neuro-15', 1793, 281],
      //['neuro-16', 1761, 229],
      //['neuro-17', 1781, 178],
      //['neuro-18', 1824, 125],
      //['neuro-19', 1781, 46],
      //['neuro-20', 1759, 0],
      //['neuro-21', 1759, 0],
      //['neuro-22', 1759, 10],
      //['neuro-23', 1759, 252],
      //['neuro-24', 1759, 249],
      //['neuro-25', 1759, 577],
      //['neuro-27', 1759, 484],
      //['neuro-28', 1759, 809],
      //['neuro-29', 1759, 812],
      //['neuro-31', 1729, 935],
      //['neuro-32', 1716, 840],
      //['neuro-33', 1350, 789],
      //['neuro-34', 1425, 348],
      //['neuro-35', 1243, 607],
      //['neuro-36', 852, 596],
      //['neuro-37', 1022, 975],
      //['neuro-38', 1022, 322],
      //['neuro-39', 840, 94],
      //['neuro-40', 674, 371],
      //['neuro-41', 808, 856],
      //['neuro-42', 665, 910],
      //['neuro-43', 359, 804],
      //['neuro-44', 416, 177],
      //['neuro-45', 491, 42],
      //['neuro-46', 148, 637],
      //['neuro-47', 44, 740],
      //['neuro-48', 22, 220],
      //['neuro-49', 117, 113],
      //['neuro-50', 913, 77],
      //['neuro-51', 1638, 157]
      //]
      //],
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
      uiRegionWidth: 160,
          pagesLoaded: false,
          rightHandArray: [],
          leftHandArray: [],
          rightHandTimerArray1: [],
          leftHandTimerArray1: [],
          rightHandTimerArray2: [],
          leftHandTimerArray2: [],

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