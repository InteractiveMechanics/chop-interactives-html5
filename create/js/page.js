function Page(name, regions, canvas){

    this.regions = [];
    
  for(var i = 0; i < regions.length; i++){
    this.regions.push(new Region(regions[i][0] ,regions[i][1], regions[i][2], canvas));
  }

  this.name = name;
}
