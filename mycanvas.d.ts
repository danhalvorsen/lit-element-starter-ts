import { LitElement } from 'lit';
import { tCanvasRenderingContext2D } from './types';
export declare class MyCanvas extends LitElement {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    canvasId: string;
    fetchCanvas(id: string): tCanvasRenderingContext2D;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=mycanvas.d.ts.map