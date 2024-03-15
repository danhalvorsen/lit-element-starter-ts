import {Point, TLine} from '../types';
import {Creator, Product} from './creator';
import {LineProduct} from './LineProduct';

export class CartesianCoordinateSystemCreator extends Creator {
  private xaxis!: TLine;
  private yaxis!: TLine;
  private ctx!: CanvasRenderingContext2D;
  CartesianCoordinateSystemCreator() {}

  public create(
    xaxis: TLine,
    yaxis: TLine,
    ctx: CanvasRenderingContext2D
  ): Product {
    this.xaxis = xaxis;
    this.yaxis = yaxis;
    this.ctx = ctx;

    return this.factoryMethod();
  }

  public factoryMethod(): Product {
    const systemCreator = new CartesianCoordinateSystemProduct(
      this.xaxis,
      this.yaxis,
      this.ctx
    );
    return systemCreator.operation();
  }
}

export class CartesianCoordinateSystemProduct implements Product {
  private xline!: TLine;
  private yline!: TLine;
  private ctx!: CanvasRenderingContext2D;

  /**
   *
   */
  constructor(xline: TLine, yline: TLine, ctx: CanvasRenderingContext2D) {
    this.xline = xline;
    this.yline = yline;
    this.ctx = ctx;
  }
  operation(): Product {
    // Draw x-axis
    this.ctx.beginPath();
    this.ctx.moveTo(-this.ctx.canvas.width / 2, 0);
    this.ctx.lineTo(this.ctx.canvas.width / 2, 0);
    this.ctx.stroke();

    // Draw y-axis
    this.ctx.beginPath();
    this.ctx.moveTo(0, -this.ctx.canvas.height / 2);
    this.ctx.lineTo(0, this.ctx.canvas.height / 2);
    this.ctx.stroke();

    return this;
  }
}
