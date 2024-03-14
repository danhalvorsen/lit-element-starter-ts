import { Point } from './types';
interface Product {
    operation(): Product;
}
declare abstract class Creator {
    abstract factoryMethod(): Product;
}
export declare class LineCreator extends Creator {
    private lineProduct;
    create(p0: Point, p1: Point, ctx: CanvasRenderingContext2D): Product;
    factoryMethod(): Product;
}
export declare class LineBuilder {
    p0: Point;
    p1: Point;
    WithP0(p0: Point): this;
    WithP1(p1: Point): this;
}
export {};
//# sourceMappingURL=creator.d.ts.map