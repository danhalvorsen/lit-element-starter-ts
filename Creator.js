class Creator {
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
    factoryMethod() {
        throw new Error('Method not implemented.');
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class LineProduct {
    /**
     *
     */
    constructor(_p0, _p1, _cdx) {
        this.parts = new Array();
    }
    operation() {
        return this.parts;
    }
}
export {};
//# sourceMappingURL=creator.js.map