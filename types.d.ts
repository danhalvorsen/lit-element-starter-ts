import { vec3 } from '/src/lib/tsm/dist/tsm.js';
export type tCanvasRenderingContext2D = CanvasRenderingContext2D | undefined | null;
export declare class Point {
    p: vec3;
    getPoint(): vec3;
    setPoint(v: vec3): void;
    x(): vec3;
    y(): vec3;
    z(): vec3;
    constructor(x: number, y: number, z: number);
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