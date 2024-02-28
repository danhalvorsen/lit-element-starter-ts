import {Point} from './types';
export const translateCoordinateSystem = (
  p: Point,
  ctx: CanvasRenderingContext2D
) => {
  const x = ctx.save();
  // Apply scaling to flip the coordinate system horizontally
  ctx.scale(-1, 1);
  // Translate the coordinate system to point P
  ctx.translate(-p, 0); // Move the origin to point P along the x-axis
};
