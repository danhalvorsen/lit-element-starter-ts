import Vector2D from './vector2D';
export class Point {
    getPoint() {
        if (this.p !== null) {
            return this.p;
        }
        throw new Error('');
    }
    setPoint(v) {
        this.p = v;
    }
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
    }
    x() {
        if (this?.p?.x !== null || this?.p?.x !== undefined) {
            return this.p.x;
        }
        throw new Error('null error');
    }
    y() {
        return this.p.y;
    }
    constructor(x, y) {
        this._value = 0;
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