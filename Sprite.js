(function() {
  function LoaderProxy() {
    return {
      draw: $.noop,
      fill: $.noop,
      frame: $.noop,
      update: $.noop,
      width: null,
      height: null,
      scaledWidth: null,
      scaledHeight: null
    };
  }
  
  function Sprite(image, sourceX, sourceY, width, height, scaledWidth, scaledHeight) {
    sourceX = sourceX || 0;
    sourceY = sourceY || 0;
    width = width || image.width;
    height = height || image.height;
    scaledWidth =  scaledWidth;
    scaledHeight = scaledHeight;
    
    return {
      draw: function(canvas, x, y, angle) {

        if(!angle) {
          canvas.drawImage(
            image,
            sourceX,
            sourceY,
            width,
            height,
            x,
            y,
            width * .25,
            height * .25
          );
        } else {
    
          canvas.save();

          // move to the center of the canvas
          canvas.translate(x,y);

          // rotate the canvas to the specified degrees
          canvas.rotate(angle);

          canvas.drawImage(
            image,
            sourceX / 2,
            sourceY / 2,
            width,
            height,
            x,
            y,
            width * .25,
            height * .25
          );


          // we’re done with the rotating so restore the unrotated context
          context.restore();
        }
      },
      
      fill: function(canvas, x, y, width, height, repeat) {
        repeat = repeat || "repeat";
        var pattern = canvas.createPattern(image, repeat);
        canvas.fillColor(pattern);
        canvas.fillRect(x, y, width, height);
      },
      
      width: width,
      height: height
    };
  };
  
  Sprite.load = function(url, loadedCallback) {
    var img = new Image();
    var proxy = LoaderProxy();
    
    img.onload = function() {
      var tile = Sprite(this);
      
      $.extend(proxy, tile);
      
      if(loadedCallback) {
        loadedCallback(proxy);
      }
    };
    
    img.src = url;
    
    return proxy;
  };
 
  var spriteImagePath = "";

  window.Sprite = function(name, callback) {
    return Sprite.load(spriteImagePath + name + ".png", callback);
  };
  window.Sprite.EMPTY = LoaderProxy();
  window.Sprite.load = Sprite.load;
}());