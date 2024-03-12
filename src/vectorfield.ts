import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {AxesDrawer} from './axisDrawer'; // Make sure the path to axisDrawer is correct
import {MyPlacementController} from './MyPlacementController';

@customElement('vector-canvas')
export class VectorFieldPlotter extends LitElement {
  private placementController!: MyPlacementController;
  private axes: AxesDrawer | undefined = new AxesDrawer(); // Instantiate AxesDrawer
  private scale = 1.0;
  private animationFrameId: number | undefined;
  private placement = new MyPlacementController(this);

  /**
   *
   */
  constructor() {
    super();
    this.placementController = new MyPlacementController(this);
  }
  static override readonly styles = css`
    :host {
      display: block;
      border: 1px solid black;
    }
    canvas {
      width: 100%;
      height: 100%;
    }
  `;

  override render() {
    return html`<canvas id="vectorFieldCanvas"></canvas>`;
  }

  override connectedCallback() {
    super.connectedCallback();

    this.addEventListener('wheel', this.handleMouseWheel);
    this.redraw(); // Ensure canvas is drawn initially
    this.startAnimationLoop();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('wheel', this.handleMouseWheel);
    this.stopAnimationLoop();
  }
  private startAnimationLoop(): void {
    const animate = () => {
      this.redraw();
      this.animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();
  }

  private stopAnimationLoop(): void {
    if (this.animationFrameId) {
      window.cancelAnimationFrame(this.animationFrameId);
    }
  }
  private handleMouseWheel(event: WheelEvent): void {
    // Determine the direction of the scroll
    const delta: number = Math.max(
      -1,
      Math.min(1, event.deltaY || -event.detail)
    );

    // Adjust the scale based on scroll direction
    if (delta > 0) {
      this.scale *= 3.0; // Zoom in
    } else {
      this.scale *= 0.1; // Zoom out
    }

    // Redraw the canvas with the new scale
    this.redraw();
  }

  private redraw(): void {
    // Get canvas element
    const canvas = this.shadowRoot?.getElementById(
      'vectorFieldCanvas'
    ) as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw axes
    this.axes?.setValues(ctx, canvas.width, canvas.height);
    this.axes?.drawAxes(ctx, canvas.width, canvas.height);

    // Plot vector field
    function plotVectorField(
      vectorFieldFunction: (x: number, y: number) => {x: number; y: number},
      step: number
    ) {
      for (let x = 0; x < canvas!.width; x += step) {
        for (let y = 0; y < canvas!.height; y += step) {
          const vector = vectorFieldFunction(x, y);
          ctx!.beginPath();
          ctx!.moveTo(x, y);
          ctx!.lineTo(x + vector.x, y + vector.y);
          ctx!.strokeStyle = 'black';
          ctx!.stroke();
          ctx!.strokeStyle = '#ff00ff';
          ctx!.strokeStyle;
          ctx!.stroke();
        }
      }
    }

    // Define vector field function
    function rotationalVectorField(
      _x: number,
      _y: number
    ): {x: number; y: number} {
      if (canvas) {
        const seconds = new Date().getMilliseconds();

        const angle = Math.atan2(
          _y * seconds * 10 - canvas.height / 2,
          _x * seconds * 10 - canvas.width / 2
        );

        const magnitude = 10;
        const dx = magnitude * Math.cos(angle * seconds);
        const dy = magnitude * Math.sin(angle * seconds);
        //console.log(`angle: ${angle}, dx: ${dx}, dy: ${dy}`);
        return {x: dx, y: dy};
      }
      return {x: 0, y: 0};
    }

    // Plot vector field
    plotVectorField(rotationalVectorField, 20);
  }
}
