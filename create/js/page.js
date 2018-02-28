function Page(name, regions, canvas){

    this.regions = [];

  for(var i = 0; i < regions.length; i++){
      this.regions.push(new Region(regions[i][0], regions[i][1], regions[i][2], canvas));
 }

  this.regionsLoaded = function () {
      //var checkRegions = new Array(this.regions.length);
      for (var i = 0; i < this.regions.length; i++) {
          //check if all regions are loaded
          if (!this.regions[i].loaded) {
              
              this.loaded = false;
              break;
          }
          else {
              this.loaded = true;
              //console.log('regionLoaded')
          }

      }
  }
  this.name = name;
}
