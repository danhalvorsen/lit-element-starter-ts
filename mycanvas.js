var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { fetchCanvasById } from './getCanvas';
export class MyCanvas extends LitElement {
    constructor() {
        super(...arguments);
        this.width = 0;
        this.height = 0;
        this.canvasId = 'canvasWithId';
    }
    fetchCanvas(id) {
        return fetchCanvasById(this, id);
    }
    render() {
        this.fetchCanvas(this.canvasId);
        if (this.canvas !== null || this.canvas !== undefined) {
            return html `
        <main class="full-size">
          <canvas id="this.canvasId" class="full-size"></canvas> //
          <div id="children" class="full-size"></div>
          <slot></slot>
        </main>
      `;
        }
        else
            return html `<h2>Error</h2>`;
    }
}
__decorate([
    query('canvas')
], MyCanvas.prototype, "canvas", void 0);
__decorate([
    property({ type: Number })
], MyCanvas.prototype, "width", void 0);
__decorate([
    property({ type: Number })
], MyCanvas.prototype, "height", void 0);
//# sourceMappingURL=mycanvas.js.map