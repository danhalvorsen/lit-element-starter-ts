import { LitElement } from 'lit';
export declare class VectorFieldPlotter extends LitElement {
    private axes;
    private scale;
    private animationFrameId;
    static readonly styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private startAnimationLoop;
    private stopAnimationLoop;
    private handleMouseWheel;
    private redraw;
}
//# sourceMappingURL=VectorFieldPlotter.d.ts.map