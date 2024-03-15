import {Point} from './types';
export const translateAndFlipYaxis = (
  ctx: CanvasRenderingContext2D
) => {
  // Apply scaling to flip the coordinate system horizontally
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
  ctx.scale(1, -1);
};
