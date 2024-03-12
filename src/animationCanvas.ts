import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('animation-canvas')
export class AnimationCanvas extends LitElement {
  private animationFrameId: number | undefined;

  // override createRenderRoot() {
  //   return this;
  // }

  startAnimationLoop(): void {
    const animate = () => {
      // animation logic
      this.animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();
  }

  stopAnimationLoop(): void {
    if (this.animationFrameId) {
      window.cancelAnimationFrame(this.animationFrameId);
    }
  }
}

// DrawingCanvas.ts
@customElement('canvas-drawer')
export class DrawingCanvas extends LitElement {
  // methods related to canvas drawing

  override createRenderRoot() {
    return this;
  }

  redraw(): void {
    const canvas = this.shadowRoot?.getElementById(
      'newcanvas2'
    ) as HTMLCanvasElement | null;

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
}
