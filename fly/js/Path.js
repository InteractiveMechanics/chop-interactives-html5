function Path(startX, startY, planeX, planeY, color, lineWidth, lineDash) {
    this.lastX = startX;
    this.lastY = startY;
    this.planeX = planeX;
    this.planeY = planeY;
    this.color = color;

    this.lineWidth = lineWidth;
    this.lineDash = lineDash;


    this.move = function () {

    };

    this.update = function () {
        
    };

    this.draw = function () {
        var _pathCanvas = document.getElementById('pathCanvas');
        var _pathContext = _pathCanvas.getContext("2d");
        //if (this.isActive && Math.abs(this.planeX - this.lastX) < 150 && Math.abs(this.planeY - this.lastY) < 150) {
            _pathContext.save();
            _pathContext.setLineDash(this.lineDash);
            _pathContext.beginPath();
            _pathContext.lineTo(this.lastX, this.lastY);
            _pathContext.lineTo(this.planeX, this.planeY);
            _pathContext.lineWidth = this.lineWidth;
            _pathContext.lineJoin = 'round';
            _pathContext.lineCap = 'round';
            _pathContext.strokeStyle = this.color;
            _pathContext.stroke();
            _pathContext.restore();
        //}
    }
}