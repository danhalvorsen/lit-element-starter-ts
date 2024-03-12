import {LitElement} from 'lit';
import {property, query} from 'lit/decorators.js';
import {MyPlacementController} from './MyPlacementController';

export class MyCanvas extends LitElement {
  private placement = new MyPlacementController(this);

  @query('canvas') canvas!: HTMLCanvasElement;

  @property({type: Number})
  width = 0;

  @property({type: Number})
  height = 0;

  canvasId = 'canvasWithId';
}
