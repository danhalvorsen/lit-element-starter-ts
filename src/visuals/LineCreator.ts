import {Point} from '../types';
import {Creator, Product} from './creator';
import {LineProduct} from './LineProduct';

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
