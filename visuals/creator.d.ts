export interface Product {
    operation(): Product;
}
export declare abstract class Creator {
    abstract factoryMethod(): Product;
}
export interface ICColor {
    r: number;
    g: number;
    b: number;
    a: number;
}
export declare function CColor(color: ICColor): string;
//# sourceMappingURL=creator.d.ts.map