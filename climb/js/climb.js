// Canvas Variables
var canvas          = document.getElementById('canvas');
var context         = canvas.getContext('2d');
var width           = canvas.width;
var height          = canvas.height;
var lastTime        = 0;
var fps             = 0;

// Fixed Physics and Animation Variables
var BG_VELOCITY     = 0;
var PLAYERS         = 2;

// Dynamic Animation Variables
var bgOffset        = 0;
var playerColors    = ['red', 'blue', 'yellow', 'green'];
var pointArray      = [
    { x: 60,    y: 0,       player: 0, peg: 0, active: false },
    { x: 1600,  y: 40,      player: 0, peg: 0, active: false },
    { x: 1100,  y: 280,     player: 0, peg: 0, active: false },
    { x: 850,   y: 230,     player: 0, peg: 0, active: false },
    { x: 500,   y: 260,     player: 0, peg: 0, active: false },
    { x: 300,   y: 340,     player: 0, peg: 0, active: false },
    { x: 220,   y: 520,     player: 0, peg: 0, active: false },
    { x: 600,   y: 490,     player: 0, peg: 0, active: false },
    { x: 1200,  y: 560,     player: 0, peg: 0, active: false },
    { x: 1500,  y: 440,     player: 0, peg: 0, active: false },
    { x: 1600,  y: 680,     player: 0, peg: 0, active: false }
];

// Images and Resources
var background      = new Image();


// Clears the context completely
function erase() {
    context.clearRect(0, 0, width, height);
}

// Gets a random player based on number of players
function setPegPlayer() {
    var player = 0;

    if (PLAYERS > 0){
        player = Math.floor(Math.random() * (PLAYERS + 1));
    }
    return player;
}

// Draw the peg points and set some info about them
function drawPoints() {
    context.save();

    for (i = 0; i < pointArray.length; i++){
        var pegImage = new Image();

        if (!pointArray[i].active){
            pointArray[i].peg = Math.floor(Math.random() * 10) + 1;
            pointArray[i].player = setPegPlayer();
            pointArray[i].active = true;
        }
        if (pointArray[i].player > 0){
            pegImage.src = 'images/P' + pointArray[i].player + '/P' + pointArray[i].player + '_' + pointArray[i].peg + '.svg';
            context.drawImage(pegImage, pointArray[i].x, pointArray[i].y);
        }
    }

    context.restore();
}

// Draws the canvas scene, which is looped through by the animate() function
function draw() {
    context.save();

    bgOffset = bgOffset < background.height ? bgOffset + BG_VELOCITY/fps : 0;

    context.save();
    context.translate(0, bgOffset);

    context.drawImage(background, 0, 0);
    context.drawImage(background, 0, -background.height);
    drawPoints();

    context.restore();
}

// Calculates the framerate constantly
// NOTE: We might want a fixed framerate instead of a varaible one
function calculateFps(now) {
   var fps = 1000 / (now - lastTime);
   lastTime = now;
   return fps; 
}

// Stores the "time", then sets the framrate and redraws the scene 
function animate(now) {
    if (now === undefined) {
        now = +new Date;
    }

    fps = calculateFps(now);

    erase();
    draw();
    requestNextAnimationFrame(animate);
}

// Set up all of our images and resources, then draw when loaded and start animation
// TO DO: Use a better loading function
background.src      = 'images/background@2x.jpg';
background.onload = function(e) {
    draw();
}
requestNextAnimationFrame(animate);