
export interface Product {
  operation(): Product;
}
export abstract class Creator {
  public abstract factoryMethod(): Product;
}

export interface ICColor {
  r: number;
  g: number;
  b: number;
  a: number;
}
export function CColor(color: ICColor): string {
  return `rgb(${color.r} ${color.g} ${color.b} / ${color.a})`;
}
