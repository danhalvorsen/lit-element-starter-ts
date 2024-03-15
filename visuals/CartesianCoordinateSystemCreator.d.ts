import { TLine } from '../types';
import { Creator, Product } from './creator';
export declare class CartesianCoordinateSystemCreator extends Creator {
    private xaxis;
    private yaxis;
    private ctx;
    CartesianCoordinateSystemCreator(): void;
    create(xaxis: TLine, yaxis: TLine, ctx: CanvasRenderingContext2D): Product;
    factoryMethod(): Product;
}
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
//# sourceMappingURL=CartesianCoordinateSystemCreator.d.ts.map