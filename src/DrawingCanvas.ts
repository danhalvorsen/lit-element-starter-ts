import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {LineCreator} from './visuals/LineCreator';
import {Point, TLine, TPoint} from './types';
import {RectangleCreator, RectangleProduct} from './visuals/RectangleCreator';
import {CartesianCoordinateSystemCreator} from './visuals/CartesianCoordinateSystemCreator';
import {translateAndFlipYaxis} from './TranslateAndFlipYaxis';

// DrawingCanvas.ts

@customElement('canvas-drawer')
export class DrawingCanvas extends LitElement {
  // methods related to canvas drawing
  private lineCreator!: LineCreator;
  private rectangleCreator!: RectangleCreator;
  private createCartesianCoordinateSystem!: CartesianCoordinateSystemCreator;
  /**
   *
   */
  constructor() {
    super();
    this.lineCreator = new LineCreator();
    this.rectangleCreator = new RectangleCreator();
    this.createCartesianCoordinateSystem =
      new CartesianCoordinateSystemCreator();
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

    translateAndFlipYaxis(ctx);

    const xaxis: TLine = [
      [-100, 0],
      [100, 0],
    ];
    const yaxis: TLine = [
      [0, -100],
      [0, 100],
    ];

    this.createCartesianCoordinateSystem.create(xaxis, yaxis, ctx);

    this.lineCreator.create(new Point(0, 0), new Point(100, 100), ctx);

    ctx.beginPath();
    ctx.fillStyle = 'rgb(200 0 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.beginPath();
    ctx.fillStyle = 'rgb(0 0 200 / 50%)';
    ctx.fillRect(30, 30, 50, 50);
  }
}

function calculatePointCoordinate(
  W: number,
  H: number,
  xPercent: number,
  yPercent: number,
  borderPercent: number
): Point {
  // Calculate the width and height of the inner area
  const innerWidth = calculateInnerWidth(W, borderPercent);
  const innerHeight = calculateInnerWidth(H, borderPercent); // Assuming the same border percentage for height

  // Calculate the x-coordinate based on the percentage of the inner width
  const x = Math.floor((xPercent / 100) * innerWidth - innerWidth / 2);

  // Calculate the y-coordinate based on the percentage of the inner height
  const y = Math.floor((yPercent / 100) * innerHeight - innerHeight / 2);

  // Return the point coordinate
  return new Point(x, y);
}

// // Example usage:
// const canvasWidth = 100; // Total width of canvas
// const canvasHeight = 80; // Total height of canvas
// const borderPercentage = 10; // Percentage of border on each side
// const xPercentage = 50; // Percentage from left
// const yPercentage = 50; // Percentage from bottom

// const pointCoordinate = calculatePointCoordinate(
//   canvasWidth,
//   canvasHeight,
//   xPercentage,
//   yPercentage,
//   borderPercentage
// );
// console.log('Point Coordinate:', pointCoordinate);

function calculateInnerWidth(W: number, x: number): number {
  const totalBorderPercentage = 2 * x;
  const innerPercentage = 100 - totalBorderPercentage;
  const innerWidth = (innerPercentage / 100) * W;
  return innerWidth;
}

function calculateLinePoints(p0: Point, p1: Point, numPoints: number): Point[] {
  const linePoints: Point[] = [];

  for (let i = 0; i < numPoints; i++) {
    const t = i / (numPoints - 1);
    const x = p0.x() * (1 - t) + p1.x() * t;
    const y = p0.y() * (1 - t) + p1.y() * t;
    linePoints.push(new Point(x, y));
  }

  return linePoints;
}

// Example usage:
const canvasWidth = 100; // Total width of canvas
const canvasHeight = 80; // Total height of canvas
const borderPercentage = 10; // Percentage of border on each side
const p0PercentageX = 20; // Percentage of x-coordinate for p0
const p0PercentageY = 30; // Percentage of y-coordinate for p0
const p1PercentageX = 80; // Percentage of x-coordinate for p1
const p1PercentageY = 70; // Percentage of y-coordinate for p1
const numPoints = 5; // Number of points on the line

const p0 = calculatePointCoordinate(
  canvasWidth,
  canvasHeight,
  p0PercentageX,
  p0PercentageY,
  borderPercentage
);
const p1 = calculatePointCoordinate(
  canvasWidth,
  canvasHeight,
  p1PercentageX,
  p1PercentageY,
  borderPercentage
);

const linePoints = calculateLinePoints(p0, p1, numPoints);
console.log('Line Points:', linePoints);
