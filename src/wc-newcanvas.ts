import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {AnimationCanvas} from './animationCanvas';
import {DrawingCanvas} from './DrawingCanvas';
import {LineCreator} from './visuals/LineCreator';

@customElement('wc-newcanvas')
export class NewCanvas extends LitElement {
  private animationCanvas: AnimationCanvas;
  private drawingCanvas: DrawingCanvas;
  private animationFrameId: number | undefined;
  private canvasId = 'newcanvas2';

  /**
   *
   */
  constructor() {
    super();
    this.drawingCanvas = new DrawingCanvas();
    this.animationCanvas = new AnimationCanvas(this.drawingCanvas);
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
    // Ensure canvas is drawn
    this.drawingCanvas.redraw();
    this.animationCanvas.startAnimationLoop();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    // this.removeEventListener('wheel', this.handleMouseWheel);
    this.animationCanvas.stopAnimationLoop();
  }

  override render() {
    return html`
      <div>
        <animation-canvas></animation-canvas>
        <canvas-drawer> </canvas-drawer>
      </div>
    `;
  }
}
