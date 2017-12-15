var stage;
var stageCanvas = document.getElementById('stage');

var hero1;
var hero1Canvas = document.getElementById('hero1');

var hero2;
var hero2Canvas = document.getElementById('hero2');

var hero3;
var hero3Canvas = document.getElementById('hero3');

var mousePos = {
      x: -1,
      y: -1
};


function init() {
    stage = new Stage(stageCanvas);

    hero1 = new Hero(hero1Canvas);
    hero2 = new Hero(hero2Canvas);
    hero3 = new Hero(hero3Canvas);

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
hero2Canvas.addEventListener('mousemove', function(evt) {
    mousePos = getMousePos(hero1Canvas, evt);
    console.log(mousePos);
}, false);


init();
main();