import { LitElement } from 'lit';
import { DrawingCanvas } from './DrawingCanvas';
export declare class AnimationCanvas extends LitElement {
    private animationFrameId;
    private drawingCanvas;
    /**
     *
     */
    constructor(drawingCanvas: DrawingCanvas);
    startAnimationLoop(): void;
    stopAnimationLoop(): void;
}
//# sourceMappingURL=animationCanvas.d.ts.map