import { html } from 'lit';
export function DrawFragment(canvas) {
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
    return html `<header>${'size'}</header>`;
}
//# sourceMappingURL=getCanvas.js.map