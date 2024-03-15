import { Point } from './types';
export interface Product {
    operation(): Product;
}
export declare abstract class Creator {
    abstract factoryMethod(): Product;
}
export declare class LineProduct implements Product {
    ctx: CanvasRenderingContext2D;
    p0: Point;
    p1: Point;
    /**
     *
     */
    constructor(p0: Point, p1: Point, ctx: CanvasRenderingContext2D);
    operation(): Product;
    private arrow;
}
export declare class LineBuilder {
    p0: Point;
    p1: Point;
    WithP0(p0: Point): this;
    WithP1(p1: Point): this;
}
//# sourceMappingURL=creator.d.ts.map