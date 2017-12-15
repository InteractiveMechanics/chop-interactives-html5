var stage;
var stageCanvas = document.getElementById('stage');

var hero1;
var hero1Canvas = document.getElementById('hero1');

var hero2;
var hero2Canvas = document.getElementById('hero2');

var hero3;
var hero3Canvas = document.getElementById('hero3');

var isMouseDown = false;
var mousePos = {
      x: -1,
      y: -1
};


function init() {
    stage = new Stage(stageCanvas);

    hero1 = new Hero(hero1Canvas);
    hero2 = new Hero(hero2Canvas);
    hero3 = new Hero(hero3Canvas);

    hero1.isActive = false;
    hero3.isActive = false;
}

function draw() {
    clear(hero1Canvas);
    clear(hero2Canvas);
    clear(hero3Canvas);

    stage.draw();
    hero1.draw();
    hero2.draw();
    hero3.draw();
}

function update() {
    hero2.arrows.forEach(function(item, index) {
        if (mousePos.x > item.x && mousePos.x < (item.x + item.width) && mousePos.y > item.y && mousePos.y < (item.y + item.height)) {
            item.isHover = true;
            if (isMouseDown) {
                item.changePart();
            }
        } else {
            item.isHover = false;
        }
    });

    hero1.update();
    hero2.update();
    hero3.update();
}

function loop() {
    draw();
	update();
}

function main() {
    setInterval(loop, 1000/60);
}

function clear(canvas) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, 1920, 1080);
}

function getMousePos(_canvas, evt) {
    var rect = _canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

hero2Canvas.onmousedown = mouseDown;
hero2Canvas.onmouseup = mouseUp;
hero2Canvas.onmousemove = mouseMove;

function mouseMove(e) {
	mousePos = getMousePos(hero2Canvas, e);
}

function mouseDown(e) {
	isMouseDown = true;
}

function mouseUp(e) {
	isMouseDown = false;
}

init();
main();
