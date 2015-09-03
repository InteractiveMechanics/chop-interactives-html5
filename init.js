var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var sky_canvas = document.getElementById('sky-canvas');
var sky_context = sky_canvas.getContext("2d");
sky_canvas.width = window.innerWidth;
sky_canvas.height = window.innerHeight;

var cloudBG = document.getElementById('cloudBG');
cloudBG.width = window.innerWidth;
cloudBG.height = window.innerHeight;

var cloudMG = document.getElementById('cloudMG');
cloudMG.width = window.innerWidth;
cloudMG.height = window.innerHeight;

var cloudFG = document.getElementById('cloudFG');
cloudFG.width = window.innerWidth;
cloudFG.height = window.innerHeight;


sky_canvas.style.backgroundImage = "url('background.png')";
cloudBG.style.backgroundImage = "url('clouds_background.png')";
cloudMG.style.backgroundImage = "url('clouds_midground.png')";
cloudFG.style.backgroundImage = "url('clouds_foreground.png')";
