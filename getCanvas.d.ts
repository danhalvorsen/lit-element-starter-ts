import { LitElement } from 'lit';
import { tCanvasRenderingContext2D } from './types';
/**
 * Returns the 2D rendering context for the given canvas, or undefined if
 * there is no such context. The function is strongly typed, with the first
 * argument being a LitElement, and the second argument and return type being
 * a tCanvasRenderingContext2D.
 * @param {LitElement} element - The LitElement for which to get the canvas
 * @param {HTMLCanvasElement} canvas - The canvas element to get the context
 * for
 * @return {tCanvasRenderingContext2D | undefined} The 2D rendering context
 * for the canvas, or undefined if there is no such context
 */
export declare function DrawFragment(element: LitElement, canvas: HTMLCanvasElement): tCanvasRenderingContext2D | undefined;
export declare function rectangleTemplate(this: any): import("lit-html").TemplateResult<1>;
//# sourceMappingURL=getCanvas.d.ts.map