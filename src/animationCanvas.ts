import {LitElement, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {DrawingCanvas} from './DrawingCanvas';

@customElement('animation-canvas')
export class AnimationCanvas extends LitElement {
  private animationFrameId: number | undefined;
  private drawingCanvas: DrawingCanvas | undefined;

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
