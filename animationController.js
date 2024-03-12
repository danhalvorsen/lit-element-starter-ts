export class AnimationCanvas {
    startAnimationLoop() {
        const animate = () => {
            // animation logic
            this.animationFrameId = window.requestAnimationFrame(animate);
        };
        animate();
    }
    stopAnimationLoop() {
        if (this.animationFrameId) {
            window.cancelAnimationFrame(this.animationFrameId);
        }
    }
}
// DrawingCanvas.ts
export class DrawingCanvas {
    // methods related to canvas drawing
    redraw() {
        // redraw logic
    }
}
// // NewCanvas.ts
// export class NewCanvas {
//   private animationCanvas: AnimationCanvas;
//   private drawingCanvas: DrawingCanvas;
//   constructor() {
//     this.animationCanvas = new AnimationCanvas();
//     this.drawingCanvas = new DrawingCanvas();
//   }
//   // other methods and lifecycle hooks
// }
//# sourceMappingURL=animationController.js.map