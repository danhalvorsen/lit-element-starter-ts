import Vector2D from './vector2D';
class Matrix2D {
    constructor(value) {
        if (typeof value === 'undefined') {
            this._matrix = Matrix2D.identity;
        }
        else if (value instanceof Vector2D) {
            this._matrix = Matrix2D.identity;
            this._matrix[0][0] = value.x;
            this._matrix[1][0] = value.y;
            this._matrix[2][0] = value.w;
        }
        else {
            this._matrix = value;
        }
    }
    /**
     * Return the matrix values
     */
    get m() {
        return this._matrix;
    }
    static get empty() {
        return [[], [], []];
    }
    get toVector() {
        return new Vector2D(this._matrix[0][0], this._matrix[1][0]);
    }
    /**
     * Initialize an identity matrix
     */
    static get identity() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ];
    }
    static add(matrix1, matrix2) {
        const result = Matrix2D.empty;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                result[i][j] = matrix1.m[i][j] + matrix2.m[i][j];
            }
        }
        return new Matrix2D(result);
    }
    static subtract(matrix1, matrix2) {
        const result = Matrix2D.empty;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                result[i][j] = matrix1.m[i][j] - matrix2.m[i][j];
            }
        }
        return new Matrix2D(result);
    }
    static multiply(matrix1, matrix2) {
        const result = Matrix2D.empty;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                result[i][j] = 0;
                for (let k = 0; k < 3; k++) {
                    result[i][j] += matrix1.m[i][k] * matrix2.m[k][j];
                }
            }
        }
        return new Matrix2D(result);
    }
    static multiplyByValue(matrix, value) {
        const result = Matrix2D.empty;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                result[i][j] = matrix.m[i][j] * value;
            }
        }
        return new Matrix2D(result);
    }
    static multiplyByVector(matrix, vector) {
        return Matrix2D.multiply(matrix, new Matrix2D(vector)).toVector;
    }
    static view(width, height) {
        const scaleStep = 1; // Scale every vector * scaleStep
        const centerX = width / 2;
        const centerY = height / 2;
        const flipX = Math.cos(Math.PI); // rotate 180deg / 3.14radian around X-axis
        return new Matrix2D([
            [scaleStep, 0, centerX],
            [0, flipX * scaleStep, centerY],
            [0, 0, 1],
        ]);
    }
    static scale(factor) {
        return Matrix2D.multiplyByValue(new Matrix2D(), factor);
    }
    static rotate(radians) {
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        return new Matrix2D([
            [cos, -sin, 0],
            [sin, cos, 0],
            [0, 0, 1],
        ]);
    }
    static translate(vector) {
        return new Matrix2D([
            [1, 0, vector.x],
            [0, 1, vector.y],
            [0, 0, vector.w],
        ]);
    }
}
export default Matrix2D;
//# sourceMappingURL=Matrix2D.js.map