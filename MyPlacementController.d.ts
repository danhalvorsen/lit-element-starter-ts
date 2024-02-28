import { ReactiveController, ReactiveControllerHost } from 'lit';
export declare class MyPlacementController implements ReactiveController {
    host: ReactiveControllerHost;
    width: number;
    height: number;
    constructor(host: ReactiveControllerHost);
    hostConnected?(): void;
    reportWindowSize(): void;
    hostDisConnected?(): void;
    hostUpdate?(): void;
    /**
     * Called after a host update, just before the host calls firstUpdated and
     * updated. It is not called in server-side rendering.
     *
     */
    hostUpdated?(): void;
}
//# sourceMappingURL=MyPlacementController.d.ts.map