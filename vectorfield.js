var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AxesDrawer } from './axisDrawer'; // Make sure the path to axisDrawer is correct
import { MyPlacementController } from './MyPlacementController';
let VectorFieldPlotter = class VectorFieldPlotter extends LitElement {
    /**
     *
     */
    constructor() {
        super();
        this.axes = new AxesDrawer(); // Instantiate AxesDrawer
        this.scale = 1.0;
        this.placementController = new MyPlacementController(this);
    }
    render() {
        return html `<canvas id="vectorFieldCanvas"></canvas>`;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('wheel', this.handleMouseWheel);
        this.redraw(); // Ensure canvas is drawn initially
        this.startAnimationLoop();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('wheel', this.handleMouseWheel);
        this.stopAnimationLoop();
    }
    startAnimationLoop() {
        const animate = () => {
            this.redraw();
            this.animationFrameId = window.requestAnimationFrame(animate);
        };
        animate();
    }
    stopAnimationLoop() {
        if (this.animationFrameId) {
            window.cancelAnimationFrame(this.animationFrameId);
        }
    }
    handleMouseWheel(event) {
        // Determine the direction of the scroll
        const delta = Math.max(-1, Math.min(1, event.deltaY || -event.detail));
        // Adjust the scale based on scroll direction
        if (delta > 0) {
            this.scale *= 3.0; // Zoom in
        }
        else {
            this.scale *= 0.1; // Zoom out
        }
        // Redraw the canvas with the new scale
        this.redraw();
    }
    redraw() {
        // Get canvas element
        const canvas = this.shadowRoot?.getElementById('vectorFieldCanvas');
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw axes
        this.axes?.setValues(ctx, canvas.width, canvas.height);
        this.axes?.drawAxes(ctx, canvas.width, canvas.height);
        // Plot vector field
        function plotVectorField(vectorFieldFunction, step) {
            for (let x = 0; x < canvas.width; x += step) {
                for (let y = 0; y < canvas.height; y += step) {
                    const vector = vectorFieldFunction(x, y);
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + vector.x, y + vector.y);
                    ctx.strokeStyle = 'black';
                    ctx.stroke();
                    ctx.strokeStyle = '#ff00ff';
                    ctx.strokeStyle;
                    ctx.stroke();
                }
            }
        }
        // Define vector field function
        function rotationalVectorField(_x, _y) {
            if (canvas) {
                const seconds = new Date().getMilliseconds();
                const angle = Math.atan2(_y * seconds * 10 - canvas.height / 2, _x * seconds * 10 - canvas.width / 2);
                const magnitude = 10;
                const dx = magnitude * Math.cos(angle * seconds);
                const dy = magnitude * Math.sin(angle * seconds);
                console.log(`angle: ${angle}, dx: ${dx}, dy: ${dy}`);
                return { x: dx, y: dy };
            }
            return { x: 0, y: 0 };
        }
        // Plot vector field
        plotVectorField(rotationalVectorField, 20);
    }
};
VectorFieldPlotter.styles = css `
    :host {
      display: block;
      border: 1px solid black;
    }
    canvas {
      width: 100%;
      height: 100%;
    }
  `;
VectorFieldPlotter = __decorate([
    customElement('vector-canvas')
], VectorFieldPlotter);
export { VectorFieldPlotter };
//# sourceMappingURL=vectorfield.js.map