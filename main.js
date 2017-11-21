var lilypads = [];
var pennies = [];
var player = {
	color: '#0000ff',
	x: 5,
	y: 5,
	width: 40,
	height: 124,
	draw: function() {
		canvas.fillStyle = this.color;
		canvas.fillRect(this.x, this.y, this.width, this.height);
	}
}

var mousePos = {
	x: 5,
	y: 5
}

_canvas.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(_canvas, evt);
}, false);



function getMousePos(_canvas, evt) {
    var rect = _canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}


function update() {
	moveBoat();

  var i;
  for (i = 0; i < pennies.length; ++i) {
    if (pennies[i].isActive) {
        pennies.splice(i--, 1);
    } else {
      pennies[i].update();
    }
  }

	lilypads.forEach(function(lilypad) {
      lilypad.update();
  });

  if(pennies.length < 12) {
    pennies.push(new Penny());
  }
}

function moveBoat() {
	var xDistance = mousePos.x - player.x;
  var yDistance = mousePos.y - player.y;
  var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
    
  if (distance > 1) {
    player.x += xDistance * .025;
    player.y += yDistance * .025;
  }
}


function draw() {
  canvas.clearRect(0, 0, window.innerWidth, window.innerHeight);
  canvas2.clearRect(0, 0, window.innerWidth, window.innerHeight);
  penny_canvas.getContext("2d").clearRect(0, 0, window.innerWidth, window.innerHeight);
  player.draw();

  lilypads.forEach(function(lilypad) {
    lilypad.draw();
  });

  pennies.forEach(function(penny) {
    penny.draw();
  });

  pennies.forEach(function(penny) {
    if ( collides(player, penny) ) {
      penny.hasBeenHit = true;
    }
  });

  CollidingCircles();

  lilypads.forEach(function(lilypad) {
    if ( LilyPadvPlayerCollides(player, lilypad) ) {
        console.log('hit');
    }
  });

}

function CollidingCircles() {

  var length = lilypads.length;

  for (var i = 0; i < length; i++) {

    var circle1 = lilypads[i];
    for (var j= i + 1; j< length; j++) {

      var circle2 = lilypads[j];

      if ( Math.sqrt( ( circle1.x-circle2.x ) * ( circle1.x-circle2.x )  + ( circle1.y-circle2.y ) * ( circle1.y-circle2.y ) ) < 97) 
      {
          circle1.dx = (circle1.weight / 10) * ((circle1.x-(circle2.x+circle2.width/2))/circle2.width);
          circle1.dy = -circle1.dy;

          circle2.dx = (circle2.weight/10) * ((circle2.x-(circle1.x+circle1.width/2))/circle1.width);
          circle2.dy = -circle2.dy;
      }
    }
  };
}

function populateCircleArray() {
  for(var i = 0; i < 25; i++) {
    var weight = Math.floor(Math.random() * 10);

    if((weight > 0) && (weight <= 3)) {
      lilypads.push(new Flower());
    }

    if((weight > 3) && (weight <= 6)) {
      lilypads.push(new LilyPad());
    }

    if((weight > 6) && (weight <= 9)) {
      lilypads.push(new HeavyLilyPad());
    }
    
  }

  for(var i = 0; i < 12; i++) {
    pennies.push(new Penny());
  }
}

function collides(a, b) {
  return a.x < b.x + (b.width) &&
    a.x + (a.width * .25) > b.x &&
    a.y < b.y + (b.height) &&
    a.y + (a.height * .25) > b.y;
}

function LilyPadvPlayerCollides(object1, object2) {
  //return player.x < lilypad.x + (lilypad.width) && player.x + (player.width * .25) > lilypad.x && player.y < lilypad.y + (lilypad.heigh) && player.y + (player.height * .25) > lilypad.y;
  if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
    object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
    console.log('hit');
  }

  return false;
}

player.sprite = Sprite("boat");

player.draw = function() {

  var distanceX = mousePos.x - (this.x - ((this.width*.25)));
  var distanceY = mousePos.y - (this.y - ((this.height*.25)));

  if(distanceX !== 0 && distanceY !== 0) {
    var angle =  Math.atan2(distanceX, distanceY) / Math.PI;//Math.atan2(distanceX, distanceY*-1) * 180/Math.PI; 
    canvas.save();  
    // set origin point for rotation  
    canvas.translate(this.x-((this.width*.25)),this.y-((this.height*.25)));  
    // rotate  
    canvas.rotate(angle);
  }
	this.sprite.draw(canvas, -((this.width*.25)), -((this.height*.25)), null, null, this.width, this.height);
  canvas.restore();
};

populateCircleArray();
var FPS = 30;
setInterval(function() {
  update();
  draw();

}, 1000/FPS);