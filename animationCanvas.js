var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
let AnimationCanvas = class AnimationCanvas extends LitElement {
    // override createRenderRoot() {
    //   return this;
    // }
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
};
AnimationCanvas = __decorate([
    customElement('animation-canvas')
], AnimationCanvas);
export { AnimationCanvas };
// DrawingCanvas.ts
let DrawingCanvas = class DrawingCanvas extends LitElement {
    // methods related to canvas drawing
    createRenderRoot() {
        return this;
    }
    redraw() {
        const canvas = this.shadowRoot?.getElementById('newcanvas2');
        if (canvas === null || canvas === undefined) {
            return;
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        ctx.fillStyle = 'rgb(200 0 0)';
        ctx.fillRect(10, 10, 50, 50);
        ctx.fillStyle = 'rgb(0 0 200 / 50%)';
        ctx.fillRect(30, 30, 50, 50);
    }
};
DrawingCanvas = __decorate([
    customElement('canvas-drawer')
], DrawingCanvas);
export { DrawingCanvas };
//# sourceMappingURL=animationCanvas.js.map