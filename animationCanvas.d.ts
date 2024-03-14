import { LitElement } from 'lit';
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
export declare class DrawingCanvas extends LitElement {
    private lineCreator;
    /**
     *
     */
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    redraw(): void;
}
//# sourceMappingURL=animationCanvas.d.ts.map