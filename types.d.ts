import Vector2D from './vector2D';
export type tCanvasRenderingContext2D = CanvasRenderingContext2D | undefined | null;
export declare class Point {
    p: Vector2D;
    getPoint(): Vector2D;
    setPoint(v: Vector2D): void;
    private _value;
    get value(): number;
    set value(v: number);
    x(): number;
    y(): number;
    constructor(x: number, y: number);
}
export declare class Line {
    p0: Point;
    p1: Point;
    /**
     *
     */
    constructor(p0: Point, p1: Point);
}
//# sourceMappingURL=types.d.ts.map