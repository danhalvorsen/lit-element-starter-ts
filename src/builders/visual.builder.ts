import {Point} from '../types';
import {property} from 'lit/decorators.js';



export class TwoPoints {
  public p0?: Point;

  public p1?: Point;

  public ctx?: CanvasRenderingContext2D;

  @property({type: Function})
  public func:
    | ((
        p0: Point,
        p1: Point,
        f: (ctx: CanvasRenderingContext2D, p0: Point, p1: Point) => void
      ) => void)
    | undefined;

  constructor() {
    // Explicitly set default values
    this.p0 = new Point(0, 0);
    this.p1 = new Point(0, 0);
  }

  public get _ctx(): CanvasRenderingContext2D {
    return this._ctx;
  }
  public set value(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }
}

export const VisualLine = (line: TwoPoints) => {
  if (line !== null && line !== undefined) {
    line?.ctx?.beginPath();
    const defaultValue = 0;
    line?.ctx?.moveTo(
      line?.p0?.x?.() ?? defaultValue,
      line?.p1?.x?.() ?? defaultValue
    );
    line?.ctx?.lineTo(
      line?.p0?.x?.() ?? defaultValue,
      line?.p1?.x?.() ?? defaultValue
    );
    line?.ctx?.stroke();
  }
};
export const VisualTicks = (line: TwoPoints): void => {
  if (line === null || line === undefined) return;
  if (line.ctx === null || line.ctx === undefined) return;
  if (line.p0 === null || line.p0 === undefined) return;
  if (line.p1 === null || line.p1 === undefined) return;

  VisualLine(line);
  const xStep = (line.p1.x() - line.p0.x()) / 9;
  const yStep = (line.p1.y() - line.p0.y()) / 9;

  for (let i = 1; i < 10; i++) {
    if (line.ctx === null || line.ctx === undefined) return;
    line.ctx.fillRect(
      line.p0.x() + i * xStep, 
      line.p0.y() + i * yStep, 
      1, 
      1
    );
  }
};

export class VisualBuilder {
  static drawLine(line: TwoPoints): void {
    if (line === null || line === undefined) return;
    else {
      line?.ctx?.beginPath();
      const defaultValue = 0;
      line?.ctx?.moveTo(
        line?.p0?.x?.() ?? defaultValue,
        line?.p1?.x?.() ?? defaultValue
      );
      line?.ctx?.lineTo(
        line?.p0?.x?.() ?? defaultValue,
        line?.p1?.x?.() ?? defaultValue
      );
      line?.ctx?.stroke();
    }
  }
}
