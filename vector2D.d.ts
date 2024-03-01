import Matrix2D from './Matrix2D';
declare class Vector2D {
    x: number;
    y: number;
    w: number;
    static add(vector1: Vector2D, vector2: Vector2D): Vector2D;
    static subtract(vector1: Vector2D, vector2: Vector2D): Vector2D;
    static subtractValue(vector: Vector2D, value: number): Vector2D;
    static multiply(vector: Vector2D, value: number): Vector2D;
    static divide(vector: Vector2D, value: number): Vector2D;
    static equals(vector1: Vector2D, vector2: Vector2D): boolean;
    static equalsRounded(vector1: Vector2D, vector2: Vector2D, roundingFactor?: number): boolean;
    /**
     * Normalizes the vector if it matches a certain condition
     */
    static normalize(vector: Vector2D): Vector2D;
    /**
     * Adjusts x and y so that the length of the vector does not exceed max
     */
    static truncate(vector: Vector2D, max: number): Vector2D;
    /**
     * The vector that is perpendicular to this one
     */
    static perp(vector: Vector2D): Vector2D;
    /**
     * returns the vector that is the reverse of this vector
     */
    static reverse(vector: Vector2D): Vector2D;
    static abs(vector: Vector2D): Vector2D;
    /**
     * The dot product of v1 and v2
     */
    static dot(vector1: Vector2D, vector2: Vector2D): number;
    /**
     * The distance between this and the vector
     */
    static distance(vector1: Vector2D, vector2: Vector2D): number;
    /**
     * The distance between this and the vector squared
     */
    static distanceSq(vector1: Vector2D, vector2: Vector2D): number;
    /**
     * Returns positive if v2 is clockwise of this vector, negative if counterclockwise
     * (assuming the Y axis is pointing down, X axis to right like a Window app)
     */
    static sign(vector1: Vector2D, vector2: Vector2D): number;
    /**
     * Returns the angle between origin and the given vector in radians
     * @param vector
     */
    static angle(vector: Vector2D): number;
    static random(maxX: number, maxY: number): Vector2D;
    /**
     * Transform vectors based on the current tranformation matrices: translation, rotation and scale
     * @param vectors The vectors to transform
     */
    static transform(vector: Vector2D, transformation: Matrix2D): Vector2D;
    /**
     * Transform vectors based on the current transformation matrices: translation, rotation and scale
     * @param vectors The vectors to transform
     */
    static transformList(vectors: Vector2D[], transformation: Matrix2D): Vector2D[];
    constructor(x?: number, y?: number, w?: number);
    /**
     * Check wether both x and y are zero
     */
    zero(): void;
    /**
     * Set x and y both to zero
     */
    get isZero(): boolean;
    /**
     * The length / magnitude of the vector
     */
    get length(): number;
    /**
     * The squared length of the vector
     */
    get lengthSq(): number;
    /**
     * Return the vector with rounded values
     */
    get rounded(): Vector2D;
}
export default Vector2D;
//# sourceMappingURL=vector2D.d.ts.map