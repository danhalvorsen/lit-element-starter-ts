export class AxesDrawer {
    constructor() {
        this.ctx = undefined;
        this.width = 0;
        this.height = 0;
    }
    setValues(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }
    /**
     * Draw axes on the canvas
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context for the canvas
     * @param {number} width - The width of the canvas
     * @param {number} height - The height of the canvas
     */
    drawAxes(ctx, width, height) {
        if (this.ctx === undefined ||
            this.height === undefined ||
            this.width === undefined) {
            return;
        }
        const w = this.width;
        const h = this.height;
        const axisPadding = 0;
        const axisLength = 200;
        const tickInterval = 50;
        const tickLabelPadding = 0;
        // Draw x-axis
        ctx.beginPath();
        ctx.moveTo(axisPadding, h / 2);
        ctx.lineTo(w - axisPadding, h / 2);
        ctx.stroke();
        // Draw x-axis ticks and labels
        for (let x = axisPadding + tickInterval; x < w - axisPadding; x += tickInterval) {
            ctx.beginPath();
            ctx.moveTo(x, h / 2 - axisLength);
            ctx.lineTo(x, h / 2 + axisLength);
            ctx.stroke();
            ctx.fillText((x - w / 2).toString(), x - tickLabelPadding, h / 2 + 2 * tickLabelPadding);
            ctx.strokeStyle = 'lightblue';
            ctx.stroke();
            // Draw y-axis
            ctx.beginPath();
            ctx.moveTo(width / 2, axisPadding);
            ctx.lineTo(width / 2, height - axisPadding);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            // Draw y-axis ticks and labels
            for (let y = axisPadding + tickInterval; y < height - axisPadding; y += tickInterval) {
                ctx.beginPath();
                ctx.moveTo(width / 2 - axisLength, y);
                ctx.lineTo(width / 2 + axisLength, y);
                ctx.stroke();
                ctx.fillText((height / 2 - y).toString(), width / 2 - 3 * tickLabelPadding, y + tickLabelPadding);
            }
        }
    }
}
//# sourceMappingURL=axisDrawer.js.map