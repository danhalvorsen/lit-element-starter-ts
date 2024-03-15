import { Creator, LineProduct } from './creator';
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
    create(p0, p1, ctx) {
        this.lineProduct = new LineProduct(p0, p1, ctx);
        return this.factoryMethod();
    }
    factoryMethod() {
        if (this.lineProduct == null) {
            throw new Error('LineProduct is null. Remember to call create() first');
        }
        return this.lineProduct.operation();
    }
}
//# sourceMappingURL=LineCreator.js.map