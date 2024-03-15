import { Point } from '../types';
import { Product } from './creator';
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
//# sourceMappingURL=LineProduct.d.ts.map