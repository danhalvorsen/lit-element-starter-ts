import {Point} from './types';

interface Product {
  parts: ReadonlyArray<Product>;
  operation(): ReadonlyArray<Product>;
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
  constructor(p0: Point, p1: Point) {
    this.parts = new Array<Product>();
    this.p0 = p0;
    this.p1 = p1;
  }

  operation(): readonly Product[] {
    throw new Error('Method not implemented.');
  }
}
