function Page(name, regions, canvas){

  this.regions = [];
  //make these region objects
  for(var i = 0; i < regions.length; i++){
    this.regions.push(new Region(regions[i][0] ,regions[i][1], regions[i][2], canvas));
  }

  //this.regions.forEach(function(region){

  this.name = name;
}
