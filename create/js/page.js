function Page(name, regions, canvas){

    this.regions = [];
    
  for(var i = 0; i < regions.length; i++){
    this.regions.push(new Region(regions[i][0] ,regions[i][1], regions[i][2], canvas));
  }

    //make heatmap of pixeldata
  this.regionMap = [];
  var tcanvas = document.createElement('canvas'); /// create temp canvas
  var tctx = tcanvas.getContext('2d');
  tcanvas.width = 1920;
  tcanvas.height = 1080;
    //provide default valuse of -1
  //for (var i = 0; i < (tcanvas.width * tcanvas.height) ; i++) {
  //    console.log('generating regiondata');
  //    this.regionMap.push(-1);
  //};
  //for (var i = 0; i < this.regions.length; i++) {
  //    //console.log('generating regiondata');
  //    var region = this.regions[i];

  //    tctx.drawImage(region.img, region.x, region.y);
  //    var pixels = tctx.getImageData(0, 0, tcanvas.width, tcanvas.height);
  //    var data = pixels.data;
  //    for (var j = 0; j < data.length; j += 4) {
  //        if (data[j + 3] > 0) {

  //            this.regionMap[j] = i;
  //        }
  //    };
  //    tctx.clearRect(0, 0, tcanvas.width, tcanvas.height);
  //};

  
  console.log(this.regionMap);

  this.name = name;
}
