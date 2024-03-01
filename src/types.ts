import Vector2D from './vector2D';

export type tCanvasRenderingContext2D =
  | CanvasRenderingContext2D
  | undefined
  | null;

export class Point {
  p: Vector2D;

  public getPoint(): Vector2D {
    return this.p;
  }
  public setPoint(v: Vector2D) {
    this.p = v;
  }

  public x(): number {
    return this.p.x;
  }
  public y(): number {
    return this.p.y;
  }

  constructor(x: number, y: number) {
    this.p = new Vector2D(x, y);
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
