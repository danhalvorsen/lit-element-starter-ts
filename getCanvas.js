import { html } from 'lit';
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
export function DrawFragment(element, canvas) {
    if (!canvas)
        return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx)
        return undefined;
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return ctx;
}
export function rectangleTemplate() {
    return html `<header>${this.article.title}</header>`;
}
//# sourceMappingURL=getCanvas.js.map