var canvas = document.getElementById('cloud-canvas').getContext("2d");
var _canvas = document.getElementById('cloud-canvas');

var airballonContext = document.getElementById('airballon-canvas').getContext("2d");
var airballonCanvas = document.getElementById('airballon-canvas');

var fadeContext = document.getElementById('faded-ballons-canvas').getContext("2d");
var fadedCanvas = document.getElementById('faded-ballons-canvas');

var sandbag_canvas = document.getElementById('sandbag-canvas');
var sandBagContext = document.getElementById('sandbag-canvas').getContext("2d");


var _canvas2 = document.getElementById('canvas2');
var canvas2 = document.getElementById('canvas2').getContext("2d");

var pond_canvas = document.getElementById('pond-canvas');
var sky_canvas = document.getElementById('sky-canvas');
var penny_canvas = document.getElementById('penny-canvas');

fadedCanvas.width = window.innerWidth;
fadedCanvas.height = window.innerHeight;

airballonCanvas.width = window.innerWidth;
airballonCanvas.height = window.innerHeight;

sandbag_canvas.width = window.innerWidth;
sandbag_canvas.height = window.innerHeight;

_canvas.width = window.innerWidth;
_canvas.height = window.innerHeight;

_canvas2.width = window.innerWidth;
_canvas2.height = window.innerHeight;

pond_canvas.width = window.innerWidth;
pond_canvas.height = window.innerHeight;

sky_canvas.width = window.innerWidth;
sky_canvas.height = window.innerHeight;

penny_canvas.width = window.innerWidth;
penny_canvas.height = window.innerHeight;

pond_canvas.style.backgroundImage = "url('./assets/city-bg.png')";
sky_canvas.style.backgroundImage = "url('./assets/sky-bg.png')";

function randomInRange() {
  var r = Math.random();
  return Math.floor(r * (0 - window.innerWidth) + window.innerWidth);
}

function randomValue (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
