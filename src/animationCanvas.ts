import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {LineCreator} from './creator';
import {Point} from './types';

@customElement('animation-canvas')
export class AnimationCanvas extends LitElement {
  private animationFrameId: number | undefined;
  private drawingCanvas: DrawingCanvas | undefined;
  // override createRenderRoot() {
  //   return this;
  // }

  /**
   *
   */
  constructor(drawingCanvas: DrawingCanvas) {
    super();
    this.drawingCanvas = drawingCanvas;
  }

  startAnimationLoop(): void {
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

  stopAnimationLoop(): void {
    if (this.animationFrameId) {
      console.log('stopping animation loop');
      window.cancelAnimationFrame(this.animationFrameId);
    }
  }
}

// DrawingCanvas.ts
@customElement('canvas-drawer')
export class DrawingCanvas extends LitElement {
  // methods related to canvas drawing
  private lineCreator!: LineCreator;

  /**
   *
   */
  constructor() {
    super();
    this.lineCreator = new LineCreator();
  }

  override render() {
    return html` <canvas id="newcanvas2"></canvas> `;
  }
  // override createRenderRoot() {
  //   return this;
  // }

  override firstUpdated() {
    this.redraw();
  }
  redraw(): void {
    const canvas = this.shadowRoot?.getElementById(
      'newcanvas2'
    ) as HTMLCanvasElement | null;

    if (canvas === null || canvas === undefined) {
      console.log('no canvas element found');
      return;
    }

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
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
}
