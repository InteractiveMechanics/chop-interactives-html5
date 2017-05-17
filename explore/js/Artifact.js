function Artifact(x, y, width, height, file) {

    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.name = name;

    this.sprite = new Sprite(name, new ImagePainter(file));
    this.isHit = false;
    this.pickedUp = false;
    this.playerHoldingPiece = -1;
    this.playerHand = '';

    this.draw = function () {

        var context = document.getElementById('dino-bones').getContext('2d');
        context.save();
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.left = this.x - (this.width / 2);
        this.sprite.top = this.y - (this.height / 2);
        this.sprite.paint(context);
        context.restore();

    }
}