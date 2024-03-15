import { TLine } from '../types';
import { Product } from './creator';
export declare class CartesianCoordinateSystemProduct implements Product {
    private xline;
    private yline;
    private ctx;
    /**
     *
     */
    constructor(xline: TLine, yline: TLine, ctx: CanvasRenderingContext2D);
    operation(): Product;
}
//# sourceMappingURL=CartesianCoordinateSystem.d.ts.map