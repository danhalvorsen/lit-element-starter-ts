import Matrix2D from './Matrix2D';
class Vector2D {
    static add(vector1, vector2) {
        return new Vector2D(vector1.x + vector2.x, vector1.y + vector2.y);
    }
    static subtract(vector1, vector2) {
        return new Vector2D(vector1.x - vector2.x, vector1.y - vector2.y);
    }
    static subtractValue(vector, value) {
        return new Vector2D(vector.x - value, vector.y - value);
    }
    static multiply(vector, value) {
        return new Vector2D(vector.x * value, vector.y * value);
    }
    static divide(vector, value) {
        return new Vector2D(vector.x / value, vector.y / value);
    }
    static equals(vector1, vector2) {
        return vector1.x === vector2.x && vector1.y === vector2.y;
    }
    static equalsRounded(vector1, vector2, roundingFactor = 12) {
        const vector = Vector2D.abs(Vector2D.subtract(vector1, vector2));
        if (vector.x < roundingFactor && vector.y < roundingFactor) {
            return true;
        }
        return false;
    }
    /**
     * Normalizes the vector if it matches a certain condition
     */
    static normalize(vector) {
        const length = vector.length;
        if (length > 2.220446049250313e-16) {
            // Epsilon
            return Vector2D.divide(vector, length);
        }
        return vector;
    }
    /**
     * Adjusts x and y so that the length of the vector does not exceed max
     */
    static truncate(vector, max) {
        if (vector.length > max) {
            return Vector2D.multiply(Vector2D.normalize(vector), max);
        }
        return vector;
    }
    /**
     * The vector that is perpendicular to this one
     */
    static perp(vector) {
        return new Vector2D(-vector.y, vector.x);
    }
    /**
     * returns the vector that is the reverse of this vector
     */
    static reverse(vector) {
        return new Vector2D(-vector.x, -vector.y);
    }
    static abs(vector) {
        return new Vector2D(Math.abs(vector.x), Math.abs(vector.y));
    }
    /**
     * The dot product of v1 and v2
     */
    static dot(vector1, vector2) {
        return vector1.x * vector2.x + vector1.y * vector2.y;
    }
    /**
     * The distance between this and the vector
     */
    static distance(vector1, vector2) {
        const ySeparation = vector2.y - vector1.y;
        const xSeparation = vector2.x - vector1.x;
        return Math.sqrt(ySeparation * ySeparation + xSeparation * xSeparation);
    }
    /**
     * The distance between this and the vector squared
     */
    static distanceSq(vector1, vector2) {
        const ySeparation = vector2.y - vector1.y;
        const xSeparation = vector2.x - vector1.x;
        return ySeparation * ySeparation + xSeparation * xSeparation;
    }
    /**
     * Returns positive if v2 is clockwise of this vector, negative if counterclockwise
     * (assuming the Y axis is pointing down, X axis to right like a Window app)
     */
    static sign(vector1, vector2) {
        if (vector1.y * vector2.x > vector1.x * vector2.y) {
            return -1;
        }
        return 1;
    }
    /**
     * Returns the angle between origin and the given vector in radians
     * @param vector
     */
    static angle(vector) {
        const origin = new Vector2D(0, -1);
        const radian = Math.acos(Vector2D.dot(vector, origin) / (vector.length * origin.length));
        return Vector2D.sign(vector, origin) === 1 ? Math.PI * 2 - radian : radian;
    }
    static random(maxX, maxY) {
        const randX = Math.floor(Math.random() * maxX - maxX / 2);
        const randY = Math.floor(Math.random() * maxY - maxY / 2);
        return new Vector2D(randX, randY);
    }
    /**
     * Transform vectors based on the current tranformation matrices: translation, rotation and scale
     * @param vectors The vectors to transform
     */
    static transform(vector, transformation) {
        return Matrix2D.multiplyByVector(transformation, vector);
    }
    /**
     * Transform vectors based on the current tranformation matrices: translation, rotation and scale
     * @param vectors The vectors to transform
     */
    static transformList(vectors, transformation) {
        return vectors.map((vector) => Matrix2D.multiplyByVector(transformation, vector));
    }
    constructor(x = 0, y = 0, w = 1 // needed for matrix multiplication
    ) {
        this.x = x;
        this.y = y;
        this.w = w;
    }
    /**
     * Check wether both x and y are zero
     */
    zero() {
        this.x = 0;
        this.y = 0;
    }
    /**
     * Set x and y both to zero
     */
    get isZero() {
        return this.x === 0 && this.y === 0;
    }
    /**
     * The length / magnitude of the vector
     */
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * The squared length of the vector
     */
    get lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    /**
     * Return the vector with rounded values
     */
    get rounded() {
        return new Vector2D(Math.round(this.x), Math.round(this.y));
    }
}
export default Vector2D;
//# sourceMappingURL=vector.js.map