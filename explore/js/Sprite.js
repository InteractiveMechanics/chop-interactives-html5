/*
 * Copyright (C) 2012 David Geary. This code is from the book
 * Core HTML5 Canvas, published by Prentice-Hall in 2012.
 *
 * License:
 *
 * Permission is hereby granted, free of charge, to any person 
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * The Software may not be used to create training material of any sort,
 * including courses, books, instructional videos, presentations, etc.
 * without the express written consent of David Geary.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
*/

// Painters...................................................................

// Painters paint sprites with a paint(sprite, context) method. ImagePainters
// paint an image for their sprite.

var ImagePainter = function (imageUrl) {
    this.image = new Image;
    this.image.src = imageUrl;
};

ImagePainter.prototype = {
    image: undefined,

    paint: function (sprite, context) {
        if (this.image !== undefined) {
            if (!this.image.complete) {
                this.image.onload = function (e) {
                    sprite.width = this.width;
                    sprite.height = this.height;

                    context.drawImage(this,  // this is image
                       sprite.left, sprite.top,
                       sprite.width, sprite.height);
                };
            }
            else {
                context.drawImage(this.image, sprite.left, sprite.top,
                                  sprite.width, sprite.height);
            }
        }
    }
};

var SpriteSheetPainter = function (imageUrl, cells) {
    this.image = new Image;
    this.image.src = imageUrl;
    this.cells = cells;
};

SpriteSheetPainter.prototype = {
    cells: [],
    cellIndex: 0,
    image: undefined,

    advance: function () {
        if (this.cellIndex == this.cells.length - 1) {
            this.cellIndex = 0;
        }
        else {
            this.cellIndex++;
        }
    },

    paint: function (sprite, context) {
        var cell = this.cells[this.cellIndex];
        context.drawImage(this.image, cell.left * 2, cell.top * 2,
                                      cell.width * 2, cell.height * 2,
                                      sprite.left, sprite.top,
                                      cell.width, cell.height);
    }
};

// Sprite Animators...........................................................

// Sprite animators have an array of painters that they succesively apply
// to a sprite over a period of time. Animators can be started with 
// start(sprite, durationInMillis, restoreSprite)

var SpriteAnimator = function (painters, elapsedCallback) {
    this.painters = painters;
    if (elapsedCallback) {
        this.elapsedCallback = elapsedCallback;
    }
};

SpriteAnimator.prototype = {
    painters: [],
    duration: 1000,
    startTime: 0,
    index: 0,
    elapsedCallback: undefined,

    end: function (sprite, originalPainter) {
        sprite.animating = false;

        if (this.elapsedCallback) {
            this.elapsedCallback(sprite);
        }
        else {
            sprite.painter = originalPainter;
        }
    },

    start: function (sprite, duration) {
        var endTime = +new Date() + duration,
            period = duration / (this.painters.length),
            interval = undefined,
            animator = this, // for setInterval() function
            originalPainter = sprite.painter;

        this.index = 0;
        sprite.animating = true;
        sprite.painter = this.painters[this.index];

        interval = setInterval(function () {
            if (+new Date() < endTime) {
                sprite.painter = animator.painters[++animator.index];
            }
            else {
                animator.end(sprite, originalPainter);
                clearInterval(interval);
            }
        }, period);
    },
};

// Sprites....................................................................

// Sprites have a name, a painter, and an array of behaviors. Sprites can
// be updated, and painted.
//
// A sprite's painter paints the sprite: paint(sprite, context)
// A sprite's behavior executes: execute(sprite, context, time)

var Sprite = function (name, painter, behaviors) {
    if (name !== undefined) this.name = name;
    if (painter !== undefined) this.painter = painter;
    if (behaviors !== undefined) this.behaviors = behaviors;

    return this;
};

Sprite.prototype = {
    left: 0,
    top: 0,
    width: 10,
    height: 10,
    velocityX: 0,
    velocityY: 0,
    visible: true,
    animating: false,
    painter: undefined, // object with paint(sprite, context)
    behaviors: [], // objects with execute(sprite, context, time)

    paint: function (context, index) {
        if (this.painter !== undefined && this.visible) {
            this.painter.paint(this, context, index);
        }
    },

    update: function (context, time) {
        for (var i = this.behaviors.length; i > 0; --i) {
            this.behaviors[i - 1].execute(this, context, time);
        }
    },

    overlap: function (r) {
        return (this.left < r.left + r.width && this.left + this.width > r.left && this.top < r.top + r.height && this.top + this.height > r.top);
    },

    pixelOverlap: function (r, first, other) {
        // we need to avoid using floats, as we're doing array lookups
        var x = Math.round(this.left),
            y = Math.round(this.top),
            x2 = Math.round(r.left),
            y2 = Math.round(r.top);

        var w = this.width,
            h = this.height,
            w2 = r.width,
            h2 = r.height;

        // find the top left and bottom right corners of overlapping area
        var xMin = Math.max(x, x2),
            yMin = Math.max(y, y2),
            xMax = Math.min(x + w, x2 + w2),
            yMax = Math.min(y + h, y2 + h2);

        // Sanity collision check, we ensure that the top-left corner is both
        // above and to the left of the bottom-right corner.
        if (xMin >= xMax || yMin >= yMax) {
            return false;
        }

        var xDiff = xMax - xMin,
            yDiff = yMax - yMin;

        // get the pixels out from the images
        var pixels = first.getImageData(),
            pixels2 = other.getImageData();

        // if the area is really small,
        // then just perform a normal image collision check
        if (xDiff < 4 && yDiff < 4) {
            for (var pixelX = xMin; pixelX < xMax; pixelX++) {
                for (var pixelY = yMin; pixelY < yMax; pixelY++) {
                    if (
                            (pixels[((pixelX - x) + (pixelY - y) * w) * 4 + 3] !== 0) &&
                            (pixels2[((pixelX - x2) + (pixelY - y2) * w2) * 4 + 3] !== 0)
                    ) {
                        return true;
                    }
                }
            }
        } else {
            /* What is this doing?
             * It is iterating over the overlapping area,
             * across the x then y the,
             * checking if the pixels are on top of this.
             *
             * What is special is that it increments by incX or incY,
             * allowing it to quickly jump across the image in large increments
             * rather then slowly going pixel by pixel.
             *
             * This makes it more likely to find a colliding pixel early.
             */

            // Work out the increments,
            // it's a third, but ensure we don't get a tiny
            // slither of an area for the last iteration (using fast ceil).
            var incX = xDiff / 3.0,
                incY = yDiff / 3.0;
            incX = (~~incX === incX) ? incX : (incX + 1 | 0);
            incY = (~~incY === incY) ? incY : (incY + 1 | 0);

            for (var offsetY = 0; offsetY < incY; offsetY++) {
                for (var offsetX = 0; offsetX < incX; offsetX++) {
                    for (var pixelY = yMin + offsetY; pixelY < yMax; pixelY += incY) {
                        for (var pixelX = xMin + offsetX; pixelX < xMax; pixelX += incX) {
                            if (
                                    (pixels[((pixelX - x) + (pixelY - y) * w) * 4 + 3] !== 0) &&
                                    (pixels2[((pixelX - x2) + (pixelY - y2) * w2) * 4 + 3] !== 0)
                            ) {
                                return true;
                            }
                        }
                    }
                }
            }
        }

        return false;
    },

    intersect: function (r) {
        if (this.overlap(r)) {
            var x, y, w, h;
            x = Math.max(this.left, r.left);
            y = Math.max(this.top, r.top);
            w = Math.min(this.left + this.width, r.width + r.height) - x;
            h = Math.min(this.top + this.height, r.top + r.height) - y;
            return [x, y, w, h];
        }
        else return [0, 0, 0, 0];

    }
};