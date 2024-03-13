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
    constructor(p0, p1) {
        this.parts = new Array();
        this.p0 = p0;
        this.p1 = p1;
    }
    operation() {
        throw new Error('Method not implemented.');
    }
}
export {};
//# sourceMappingURL=creator.js.map