
var plane = new Plane();
var canvas = document.getElementById('cloudFG');
var context = canvas.getContext('2d');
var isDragging = false;
var isMouseDown = false;
var mouseX, mouseY;
var mousePos;
var gravity = 5;

var startX, startY;
var thrownAtX, thrownAtY;

function mouseDown(e) {
	isMouseDown = true;
	startX = mousePos.x;
	startY = mousePos.y;
	plane.p.x = mousePos.x;
	plane.p.y = mousePos.y;
	plane.isActive = false;
}

function mouseUp(e) {
	isMouseDown = false;
	thrownAtX = mousePos.x;
	thrownAtY = mousePos.y;
	var scale = .2;
	plane.p.x = mousePos.x;
	plane.p.y = mousePos.y;
    plane.v.x = (thrownAtX-startX)*scale;
    plane.v.y = (thrownAtY-startY)*scale;
    plane.isActive = true;
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    mousePos = {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    }
    return mousePos;
}

function mouseMove(e) {
	var mousePos = getMousePos(canvas, e);
	
	if(plane.isActive) {
		plane.update(mousePos.x, mousePos.y);
	}
}

function main() {
	plane.update();
	plane.draw();
	plane.move();
}


canvas.onmousedown = mouseDown;
canvas.onmouseup = mouseUp;
canvas.onmousemove = mouseMove

setInterval(main, 1000/60);
