import {LitElement, TemplateResult, html} from 'lit';
import {property, query} from 'lit/decorators.js';
import {CanvasFragment} from './getCanvas';
import {tCanvasRenderingContext2D} from './types';
import {MyPlacementController} from './MyPlacementController';

export class MyCanvas extends LitElement {
  private placement = new MyPlacementController(this);

  @query('canvas') canvas!: HTMLCanvasElement;

  @property({type: Number})
  width = 0;

  @property({type: Number})
  height = 0;

  canvasId = 'canvasWithId';

  DrawMainPart(): tCanvasRenderingContext2D {
    return CanvasFragment(this, this.canvas);
  }

  override render(): {};
}
