import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {LineCreator} from './visuals/LineCreator';
import {Point} from './types';
import {RectangleCreator, RectangleProduct} from './visuals/RectagleCreator';

// DrawingCanvas.ts

@customElement('canvas-drawer')
export class DrawingCanvas extends LitElement {
  // methods related to canvas drawing
  private lineCreator!: LineCreator;
  private rectangleCreator!: RectangleCreator;

  /**
   *
   */
  constructor() {
    super();
    this.lineCreator = new LineCreator();
    this.rectangleCreator = new RectangleCreator();
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
