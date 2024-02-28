import { ReactiveController, ReactiveControllerHost } from 'lit';
export declare class DrawGraphController implements ReactiveController {
    host: ReactiveControllerHost;
    constructor(host: ReactiveControllerHost);
    hostConnected?(): void;
    hostDisConnected?(): void;
    hostUpdate?(): void;
    /**
     * Called after a host update, just before the host calls firstUpdated and
     * updated. It is not called in server-side rendering.
     *
     */
    hostUpdated?(): void;
}
//# sourceMappingURL=drawGraphController.d.ts.map