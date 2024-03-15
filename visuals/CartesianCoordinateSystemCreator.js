import { Creator } from './creator';
export class CartesianCoordinateSystemCreator extends Creator {
    CartesianCoordinateSystemCreator() { }
    create(xaxis, yaxis, ctx) {
        this.xaxis = xaxis;
        this.yaxis = yaxis;
        this.ctx = ctx;
        return this.factoryMethod();
    }
    factoryMethod() {
        const systemCreator = new CartesianCoordinateSystemProduct(this.xaxis, this.yaxis, this.ctx);
        return systemCreator.operation();
    }
}
export class CartesianCoordinateSystemProduct {
    /**
     *
     */
    constructor(xline, yline, ctx) {
        this.xline = xline;
        this.yline = yline;
        this.ctx = ctx;
    }
    operation() {
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
//# sourceMappingURL=CartesianCoordinateSystemCreator.js.map