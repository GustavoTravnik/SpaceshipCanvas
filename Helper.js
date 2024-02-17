export class Point {
    x = 0;
    y = 0;
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    sum(point) {
        this.x += point.x;
        this.y += point.y;
    }
}

export class Size {
    width = 0;
    height = 0;
    
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

export class Rectangle {
    point = new Point(0, 0);
    size = new Size(0, 0);

    constructor(point, size) {
        this.point = point;
        this.size = size;
    }

    right() {
        return this.point.x + this.size.width;
    }

    bottom() {
        return this.point.y + this.size.height;
    }

    intersectRect(rectangle) {
        return !(rectangle.point.x > this.right() ||
            rectangle.right() < this.point.x ||
            rectangle.point.y > this.bottom() ||
            rectangle.bottom() < this.point.y);
    }

    static getRectangleByPointAndTexture(point, texture) {
        return new Rectangle(point, new Size(texture.width, texture.height));
    }
}

export const gameResolutionSize = new Size(800, 600);
export const gameResolutionRectangle = new Rectangle(new Point(0, 0), new Size(800, 600));