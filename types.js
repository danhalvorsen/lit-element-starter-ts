import Vector2D from './vector2D';
export class Point {
    getPoint() {
        return this.p;
    }
    setPoint(v) {
        this.p = v;
    }
    x() {
        return this.p.x;
    }
    y() {
        return this.p.y;
    }
    constructor(x, y) {
        this.p = new Vector2D(x, y);
    }
}
export class Line {
    /**
     *
     */
    constructor(p0, p1) {
        this.p0 = p0;
        this.p1 = p1;
    }
}
//# sourceMappingURL=types.js.map