import {LitElement} from 'lit';
import {tCanvasRenderingContext2D} from './types';

export function fetchCanvasById(
  element: LitElement,
  canvasId: string
): tCanvasRenderingContext2D {
  const canvas = element.shadowRoot?.getElementById(
    canvasId
  ) as HTMLCanvasElement | null;
  if (!canvas) return undefined;

  const ctx = canvas.getContext('2d');
  if (!ctx) return undefined;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return ctx;
}
