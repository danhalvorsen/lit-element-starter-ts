var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { CanvasFragment } from './getCanvas';
import { MyPlacementController } from './MyPlacementController';
export class MyCanvas extends LitElement {
    constructor() {
        super(...arguments);
        this.placement = new MyPlacementController(this);
        this.width = 0;
        this.height = 0;
        this.canvasId = 'canvasWithId';
    }
    DrawMainPart() {
        return CanvasFragment(this, this.canvas);
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