import {LitElement, html} from 'lit';
import {property, query} from 'lit/decorators.js';
import {fetchCanvasById} from './getCanvas';
import {tCanvasRenderingContext2D} from './types';

export class MyCanvas extends LitElement {
  @query('canvas') canvas!: HTMLCanvasElement;

  @property({type: Number})
  width = 0;

  @property({type: Number})
  height = 0;

  canvasId = 'canvasWithId';

  fetchCanvas(id: string): tCanvasRenderingContext2D {
    return fetchCanvasById(this, id);
  }

  override render() {
    this.fetchCanvas(this.canvasId);
    if (this.canvas !== null || this.canvas !== undefined) {
      return html`
        <main class="full-size">
          <canvas id="this.canvasId" class="full-size"></canvas> //
          <div id="children" class="full-size"></div>
          <slot></slot>
        </main>
      `;
    } else return html`<h2>Error</h2>`;
  }
}
