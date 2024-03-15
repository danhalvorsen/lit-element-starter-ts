var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
let AnimationCanvas = class AnimationCanvas extends LitElement {
    /**
     *
     */
    constructor(drawingCanvas) {
        super();
        this.drawingCanvas = drawingCanvas;
    }
    startAnimationLoop() {
        const animate = () => {
            // animation logic
            this.animationFrameId = window.requestAnimationFrame(animate);
            console.log(`starting animation loop:${this.animationFrameId}`);
            if (this.drawingCanvas !== null && this.drawingCanvas !== undefined) {
                this.drawingCanvas.redraw();
            }
        };
        animate();
    }
    stopAnimationLoop() {
        if (this.animationFrameId) {
            console.log('stopping animation loop');
            window.cancelAnimationFrame(this.animationFrameId);
        }
    }
};
AnimationCanvas = __decorate([
    customElement('animation-canvas')
], AnimationCanvas);
export { AnimationCanvas };
//# sourceMappingURL=animationCanvas.js.map