var backgroundCanvas = document.getElementById('canvas');
var ballCanvas = document.getElementById('ball-canvas');
var enviromentCanvas = document.getElementById('enviroment-canvas');

var backgroundContext = backgroundCanvas.getContext('2d');
var ballContext = ballCanvas.getContext('2d');
var enviromentContext = enviromentCanvas.getContext('2d');


backgroundCanvas.width = window.innerWidth;
backgroundCanvas.height = window.innerHeight;

ballCanvas.width = window.innerWidth;
ballCanvas.height = window.innerHeight;

enviromentCanvas.width = window.innerWidth;
enviromentCanvas.height = window.innerHeight;

backgroundCanvas.style.backgroundImage = "url('./images/background@2x.png')";
