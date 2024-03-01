import Vector2D from './vector2D';
declare class Matrix2D {
    private _matrix;
    constructor(value?: number[][] | Vector2D);
    /**
     * Return the matrix values
     */
    get m(): number[][];
    static get empty(): number[][];
    get toVector(): Vector2D;
    /**
     * Initialize an identity matrix
     */
    static get identity(): number[][];
    static add(matrix1: Matrix2D, matrix2: Matrix2D): Matrix2D;
    static subtract(matrix1: Matrix2D, matrix2: Matrix2D): Matrix2D;
    static multiply(matrix1: Matrix2D, matrix2: Matrix2D): Matrix2D;
    static multiplyByValue(matrix: Matrix2D, value: number): Matrix2D;
    static multiplyByVector(matrix: Matrix2D, vector: Vector2D): Vector2D;
    static view(width: number, height: number): Matrix2D;
    static scale(factor: number): Matrix2D;
    static rotate(radians: number): Matrix2D;
    static translate(vector: Vector2D): Matrix2D;
}
export default Matrix2D;
//# sourceMappingURL=Matrix2D.d.ts.map