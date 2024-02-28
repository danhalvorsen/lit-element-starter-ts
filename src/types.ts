import {vec3} from '/src/lib/tsm/dist/tsm.js';

export type tCanvasRenderingContext2D =
  | CanvasRenderingContext2D
  | undefined
  | null;

export class Point {
  p: vec3;

  public getPoint(): vec3 {
    return this.p;
  }
  public setPoint(v: vec3) {
    this.p = v;
  }

  public x(): vec3 {
    return this.p[0];
  }
  public y(): vec3 {
    return this.p[1];
  }
  public z(): vec3 {
    return this.p[2];
  }

  constructor(x: number, y: number, z: number) {
    this.p = new vec3([x, y, z]);
  }
}

export class Line {
  p0: Point;
  p1: Point;
  /**
   *
   */
  constructor(p0: Point, p1: Point) {
    this.p0 = p0;
    this.p1 = p1;
  }
}
