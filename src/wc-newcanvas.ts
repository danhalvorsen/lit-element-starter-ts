import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {AnimationCanvas, DrawingCanvas} from './animationCanvas';

@customElement('wc-newcanvas')
export class NewCanvas extends LitElement {
  private animationCanvas: AnimationCanvas;
  private drawingCanvas: DrawingCanvas;
  private animationFrameId: number | undefined;
  private canvasId = 'thecanvas';
  /**
   *
   */
  constructor() {
    super();
    this.animationCanvas = new AnimationCanvas();
    this.drawingCanvas = new DrawingCanvas();
  }

  static override readonly styles = css`
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

  override connectedCallback() {
    super.connectedCallback();
    this.drawingCanvas.redraw(); // Ensure canvas is drawn initially
    this.animationCanvas.startAnimationLoop();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    // this.removeEventListener('wheel', this.handleMouseWheel);
    this.animationCanvas.stopAnimationLoop();
  }

  override render() {
    return html`
      <canvas id="newcanvas2">
        <h1>TEST</h1>
      </canvas>

      <animation-canvas></animation-canvas>
      <canvas-drawer></canvas-drawer>
    `;
  }
}
