import Vector2D from './vector2D';

export type tCanvasRenderingContext2D =
  | CanvasRenderingContext2D
  | undefined
  | null;

export class Point {
  p: Vector2D;

  public getPoint(): Vector2D {
    if (this.p !== null) {
      return this.p;
    }
    throw new Error('');
  }
  public setPoint(v: Vector2D) {
    this.p = v;
  }

  private _value = 0;
  public get value(): number {
    return this._value;
  }
  public set value(v: number) {
    this._value = v;
  }

  public x(): number {
    if (this?.p?.x !== null || this?.p?.x !== undefined) {
      return this.p.x;
    }
    throw new Error('null error');
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
