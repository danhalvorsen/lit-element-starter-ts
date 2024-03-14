import { Point } from './types';
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class LineProduct {
    /**
     *
     */
    constructor(p0, p1, ctx) {
        this.ctx = ctx;
        this.p0 = p0;
        this.p1 = p1;
    }
    operation() {
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
    arrow(p, ctx) {
        ctx.beginPath();
        ctx.moveTo(p.x(), p.y());
        ctx.lineTo(p.x() + 25, p.y() + 25);
        ctx.lineTo(p.x() + 25, p.y() - 25);
        ctx.fill();
    }
}
export class LineBuilder {
    constructor() {
        this.p0 = new Point(0, 0);
        this.p1 = new Point(0, 0);
    }
    WithP0(p0) {
        this.p0 = p0;
        return this;
    }
    WithP1(p1) {
        this.p1 = p1;
        return this;
    }
}
//# sourceMappingURL=creator.js.map