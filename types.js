import { vec3 } from '/src/lib/tsm/dist/tsm.js';
export class Point {
    getPoint() {
        return this.p;
    }
    setPoint(v) {
        this.p = v;
    }
    x() {
        return this.p[0];
    }
    y() {
        return this.p[1];
    }
    z() {
        return this.p[2];
    }
    constructor(x, y, z) {
        this.p = new vec3([x, y, z]);
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