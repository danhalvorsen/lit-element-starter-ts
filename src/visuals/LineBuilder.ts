import {Point} from '../types';

export class LineBuilder {
  p0: Point = new Point(0, 0);
  p1: Point = new Point(0, 0);
  WithP0(p0: Point): this {
    this.p0 = p0;
    return this;
  }
  WithP1(p1: Point): this {
    this.p1 = p1;
    return this;
  }
}
