var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Point } from '../types';
import { property } from 'lit/decorators.js';
export class TwoPoints {
    constructor() {
        // Explicitly set default values
        this.p0 = new Point(0, 0);
        this.p1 = new Point(0, 0);
    }
    get _ctx() {
        return this._ctx;
    }
    set value(ctx) {
        this.ctx = ctx;
    }
}
__decorate([
    property({ type: Function })
], TwoPoints.prototype, "func", void 0);
export const VisualLine = (line) => {
    if (line !== null && line !== undefined) {
        line?.ctx?.beginPath();
        const defaultValue = 0;
        line?.ctx?.moveTo(line?.p0?.x?.() ?? defaultValue, line?.p1?.x?.() ?? defaultValue);
        line?.ctx?.lineTo(line?.p0?.x?.() ?? defaultValue, line?.p1?.x?.() ?? defaultValue);
        line?.ctx?.stroke();
    }
};
export const VisualTicks = (line) => {
    if (line === null || line === undefined)
        return;
    if (line.ctx === null || line.ctx === undefined)
        return;
    if (line.p0 === null || line.p0 === undefined)
        return;
    if (line.p1 === null || line.p1 === undefined)
        return;
    VisualLine(line);
    const xStep = (line.p1.x() - line.p0.x()) / 9;
    const yStep = (line.p1.y() - line.p0.y()) / 9;
    for (let i = 1; i < 10; i++) {
        if (line.ctx === null || line.ctx === undefined)
            return;
        line.ctx.fillRect(line.p0.x() + i * xStep, line.p0.y() + i * yStep, 1, 1);
    }
};
export class VisualBuilder {
    static drawLine(line) {
        if (line === null || line === undefined)
            return;
        else {
            line?.ctx?.beginPath();
            const defaultValue = 0;
            line?.ctx?.moveTo(line?.p0?.x?.() ?? defaultValue, line?.p1?.x?.() ?? defaultValue);
            line?.ctx?.lineTo(line?.p0?.x?.() ?? defaultValue, line?.p1?.x?.() ?? defaultValue);
            line?.ctx?.stroke();
        }
    }
}
//# sourceMappingURL=visual.builder.js.map