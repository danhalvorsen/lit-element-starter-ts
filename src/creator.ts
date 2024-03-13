import {Point} from './types';

interface Product {
  parts: ReadonlyArray<Product>;
  operation(): Array<Product>;
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
class LineCreator extends Creator {
  public override factoryMethod(): Product {
    throw new Error('Method not implemented.');
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class LineProduct implements Product {
  parts: readonly Product[];
  p0!: Point;
  p1!: Point;
  /**
   *
   */
  constructor(_p0: Point, _p1: Point, _cdx: CanvasRenderingContext2D) {
    this.parts = new Array<Product>();
  }

  operation(): Array<Product> {
    return this.parts;
  }
}
