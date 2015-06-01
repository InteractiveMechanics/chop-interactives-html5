// Canvas Variables
var canvas          = document.getElementById('canvas');
var context         = canvas.getContext('2d');
var width           = canvas.width;
var height          = canvas.height;

var startTime       = 0;
var gameTime        = 0;
var lastTime        = 0;
var fps             = 0;

// Fixed animation/physics variables
var BOAT_VELOCITY   = 20;
var BOAT_WIDTH      = 50;
var BOAT_HEIGHT     = 163;
var BOAT_ROTATION   = 0;

// Images and Resources
var background      = new Image();
var bubbles         = new Image();
var water           = new Image();
var flower          = new Image();
var lilypad_1       = new Image();
var lilypad_2       = new Image();

var PLAYERS         = 1;
var P1_boat         = new Sprite('P1_boat', new ImagePainter('images/P1/boat.svg'));
var P2_boat         = new Sprite('P2_boat', new ImagePainter('images/P2/boat.svg'));


// Clears the context completely
function clearScreen() {
    context.clearRect(0, 0, width, height);
}

// Draws the background scene
function drawBackground() {
    context.save();
    context.drawImage(background, 0, 0, width, height);
    context.drawImage(bubbles, 0, 0, width, height);
    context.restore();
}

// Draws the foreground obstacles
function drawObstacles() {
    context.save();
    context.drawImage(water, -20, -20, width + 40, height + 40);
    context.drawImage(flower, 1200, 500);
    context.drawImage(flower, 200, 200, flower.width * 0.85, flower.height * 0.85);
    context.drawImage(lilypad_1, 300, 420, lilypad_1.width * 0.75, lilypad_1.height * 0.75);
    context.restore();
}

// Draws the player boats
// TODO: Iterate over number of players from Kinect sensor, max: 4
function drawBoats(now) {
    context.save();
    P1_boat.left = P1_boat.left + P1_boat.velocityX;
    P1_boat.top = P1_boat.top + P1_boat.velocityY;

    P1_boat.paint(context);
    
    context.restore();
}

// Calculates the framerate constantly
// NOTE: We might want a fixed framerate instead of a varaible one
function updateFps(time) {
    if (lastTime === 0) {
        fps = 60;
    } else {
        fps = 1000 / (time - lastTime);
    }
}

// Stores the "time", then sets the framrate and redraws the scene 
function animate(time) {
    if (time === undefined) {
        time = +new Date;
    }
    fps = updateFps(time);

    clearScreen();

    drawBackground();
    drawObstacles();
    drawBoats();

    requestNextAnimationFrame(animate);
}


document.addEventListener('keydown', function(e){
    if (e.keyCode == 38){
        P1_boat.velocityY--;
    } else if (e.keyCode == 40){
        P1_boat.velocityY++;
    } else if (e.keyCode == 37){
        P1_boat.velocityX--;
    } else if (e.keyCode == 39){
        P1_boat.velocityX++;
    }
});


// Set up all of our images and resources, then draw when loaded and start animation
// TO DO: Use a better loading function
background.src      = 'images/background@2x.png';
bubbles.src         = 'images/bubbles@2x.png';
water.src           = 'images/water@2x.png';
flower.src          = 'images/flower.svg';
lilypad_1.src       = 'images/lilypad_1.svg';
lilypad_2.src       = 'images/lilypad_2.svg';


P1_boat.width   = BOAT_WIDTH;
P1_boat.height  = BOAT_HEIGHT;

background.onload = function(e) {
    drawBackground();
    drawObstacles();
    drawBoats();
}
requestNextAnimationFrame(animate);