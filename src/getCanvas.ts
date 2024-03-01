import {LitElement} from 'lit';
import {tCanvasRenderingContext2D} from './types';

export function DrawFragment(
  element: LitElement,
  canvas: HTMLCanvasElement
): tCanvasRenderingContext2D {
  if (!canvas) return undefined;

  const ctx = canvas.getContext('2d');
  if (!ctx) return undefined;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return ctx;
}

export function rectangleTemplate() {
  return html`<header>${this.article.title}</header>`;
}
