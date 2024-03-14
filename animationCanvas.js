var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LineCreator } from './creator';
import { Point } from './types';
let AnimationCanvas = class AnimationCanvas extends LitElement {
    // override createRenderRoot() {
    //   return this;
    // }
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
// DrawingCanvas.ts
let DrawingCanvas = class DrawingCanvas extends LitElement {
    /**
     *
     */
    constructor() {
        super();
        this.lineCreator = new LineCreator();
    }
    render() {
        return html ` <canvas id="newcanvas2"></canvas> `;
    }
    // override createRenderRoot() {
    //   return this;
    // }
    firstUpdated() {
        this.redraw();
    }
    redraw() {
        const canvas = this.shadowRoot?.getElementById('newcanvas2');
        if (canvas === null || canvas === undefined) {
            console.log('no canvas element found');
            return;
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        if (this.lineCreator) {
            this.lineCreator.create(new Point(0, 0), new Point(100, 100), ctx);
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