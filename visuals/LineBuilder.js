import { Point } from '../types';
export class LineBuilder {
    constructor() {
        this.p0 = new Point(0, 0);
        this.p1 = new Point(0, 0);
    }
    WithP0(p0) {
        this.p0 = p0;
        return this;
    }
    WithP1(p1) {
        this.p1 = p1;
        return this;
    }
}
//# sourceMappingURL=LineBuilder.js.map