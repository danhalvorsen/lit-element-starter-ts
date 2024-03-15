import {Point} from '../types';
import {Product} from './creator';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

export class LineProduct implements Product {
  ctx: CanvasRenderingContext2D;
  p0: Point;
  p1: Point;

  /**
   *
   */
  constructor(p0: Point, p1: Point, ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.p0 = p0;
    this.p1 = p1;
  }

  operation(): Product {
    this.ctx.save();
    ///this.ctx.scale(1, -1);
    this.ctx.beginPath();
    this.ctx.moveTo(this.p0.x(), this.p0.y());
    this.ctx.lineTo(this.p1.x(), this.p1.y());
    this.ctx.stroke();
    // this.arrow(this.p1, this.ctx);
    // this.ctx.stroke();
    return this;
  }

  private arrow(p: Point, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(p.x(), p.y());
    ctx.lineTo(p.x() + 25, p.y() + 25);
    ctx.lineTo(p.x() + 25, p.y() - 25);
    ctx.fill();
  }
}
