export function fetchCanvasById(element, canvasId) {
    const canvas = element.shadowRoot?.getElementById(canvasId);
    if (!canvas)
        return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx)
        return undefined;
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return ctx;
}
//# sourceMappingURL=getCanvas.js.map