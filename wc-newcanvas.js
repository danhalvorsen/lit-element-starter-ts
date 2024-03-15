var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AnimationCanvas } from './animationCanvas';
import { DrawingCanvas } from './DrawingCanvas';
let NewCanvas = class NewCanvas extends LitElement {
    /**
     *
     */
    constructor() {
        super();
        this.canvasId = 'newcanvas2';
        this.drawingCanvas = new DrawingCanvas();
        this.animationCanvas = new AnimationCanvas(this.drawingCanvas);
    }
    connectedCallback() {
        super.connectedCallback();
        // Ensure canvas is drawn
        this.drawingCanvas.redraw();
        this.animationCanvas.startAnimationLoop();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        // this.removeEventListener('wheel', this.handleMouseWheel);
        this.animationCanvas.stopAnimationLoop();
    }
    render() {
        return html `
      <div>
        <animation-canvas></animation-canvas>
        <canvas-drawer> </canvas-drawer>
      </div>
    `;
    }
};
NewCanvas.styles = css `
    :host {
      display: block;
      border: 1px solid black;
      slot {
        border: 4px solid #343434;
        display: block;
        padding: 8px;
      }

      slot {
        border-color: cornflowerblue;
      }
    }
    canvas {
      width: 100%;
      height: 100%;
    }
  `;
NewCanvas = __decorate([
    customElement('wc-newcanvas')
], NewCanvas);
export { NewCanvas };
//# sourceMappingURL=wc-newcanvas.js.map