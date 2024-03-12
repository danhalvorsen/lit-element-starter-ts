import { Point } from '../types';
export declare class TwoPoints {
    p0?: Point;
    p1?: Point;
    ctx?: CanvasRenderingContext2D;
    func: ((p0: Point, p1: Point, f: (ctx: CanvasRenderingContext2D, p0: Point, p1: Point) => void) => void) | undefined;
    constructor();
    get _ctx(): CanvasRenderingContext2D;
    set value(ctx: CanvasRenderingContext2D);
}
export declare const VisualLine: (line: TwoPoints) => void;
export declare const VisualTicks: (line: TwoPoints) => void;
export declare class VisualBuilder {
    static drawLine(line: TwoPoints): void;
}
//# sourceMappingURL=visual.builder.d.ts.map