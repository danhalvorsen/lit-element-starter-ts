import {Creator, Product} from './creator';

export class RectangleCreator extends Creator {
  public override factoryMethod(): Product {
    throw new Error('Method not implemented.');
  }
}

export class RectangleProduct implements Product {
  operation(): Product {
    throw new Error('Method not implemented.');
  }
}
