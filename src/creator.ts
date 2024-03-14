import {LitElement} from 'lit';
import {Point} from './types';

interface Product {
  operation(): Product;
}
abstract class Creator {
  public abstract factoryMethod(): Product;
}

// class PrimitivCreator extends Creator {
//   public factoryMethod(): Product {
//     return new PrimitiveProduct();
//   }
// }
// class ComplexCreator extends Creator {
//   public factoryMethod(): Product {
//     return new ComplexProduct();
//   }
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class LineCreator extends Creator {
  private lineProduct!: LineProduct;

  public create(p0: Point, p1: Point, ctx: CanvasRenderingContext2D): Product {
    this.lineProduct = new LineProduct(p0, p1, ctx);
    return this.factoryMethod();
  }
  public override factoryMethod(): Product {
    if (this.lineProduct == null) {
      throw new Error('LineProduct is null. Remember to call create() first');
    }
    return this.lineProduct.operation();
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class LineProduct implements Product {
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
