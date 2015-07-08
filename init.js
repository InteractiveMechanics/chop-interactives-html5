var canvas = document.getElementById('canvas').getContext("2d");
var _canvas = document.getElementById('canvas');
var _canvas2 = document.getElementById('canvas2');
var canvas2 = document.getElementById('canvas2').getContext("2d");

var pond_canvas = document.getElementById('pond-canvas');
var penny_canvas = document.getElementById('penny-canvas');

_canvas.width = window.innerWidth;
_canvas.height = window.innerHeight;

_canvas2.width = window.innerWidth;
_canvas2.height = window.innerHeight;

pond_canvas.width = window.innerWidth;
pond_canvas.height = window.innerHeight;

penny_canvas.width = window.innerWidth;
penny_canvas.height = window.innerHeight;

pond_canvas.style.backgroundImage = "url('water.png')";

function randomInRange() {
  var r = Math.random();
  return Math.floor(r * (0 - window.innerWidth) + window.innerWidth);
}

function random_dx_dy() {
    var min = -.1,
        max = .9,
        highlightedNumber = Math.random() * (max - min) + min;

    if(highlightedNumber == 0) {
    	return generateRandomNumber();
    }

    return highlightedNumber;
};
