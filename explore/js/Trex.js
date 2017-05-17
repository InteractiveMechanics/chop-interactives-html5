function Trex(canvas) {
    var I = I || {};

    I.width = 1618;
    I.height = 514;
    I.canvas = canvas;
    I.context = canvas.getContext('2d');

    I.bottom_image = new Sprite('default', new ImagePainter('./images/CHOP_DiggingUpDinos_trex-outline_btm-darken.png'));
    I.middle_image = new Sprite('default', new ImagePainter('./images/CHOP_DiggingUpDinos_trex-outline_middle-multiply.png'));
    I.top_image = new Sprite('default', new ImagePainter('./images/CHOP_DiggingUpDinos_trex-outline_top.png'));

    I.init = function () {
        this.context.save();

        //Bottom
        this.bottom_image.width = this.width;
        this.bottom_image.height = this.height;
        this.bottom_image.left = this.canvas.width / 2 - this.width / 2;
        this.bottom_image.top = this.canvas.height / 2 - this.height / 2;

        //Middle
        this.middle_image.width = this.width;
        this.middle_image.height = this.height;
        this.middle_image.left = this.canvas.width / 2 - this.width / 2;
        this.middle_image.top = this.canvas.height / 2 - this.height / 2;

        //Top
        this.top_image.width = this.width;
        this.top_image.height = this.height;
        this.top_image.left = this.canvas.width / 2 - this.width / 2;
        this.top_image.top = this.canvas.height / 2 - this.height / 2;

        this.bottom_image.paint(this.context);
        this.middle_image.paint(this.context);
        this.top_image.paint(this.context);

        this.context.restore();
    }

    return I;

}