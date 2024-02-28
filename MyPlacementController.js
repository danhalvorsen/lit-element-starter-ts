//lit.dev/docs/composition/controllers/#controllers-and-directives
//https://lit.dev/docs/composition/controllers/#controller-host-api
export class MyPlacementController {
    constructor(host) {
        this.width = 0;
        this.height = 0;
        if (host === null) {
            throw new Error('Host cannot be null');
        }
        this.host = host;
        this.host.addController(this);
        window.addEventListener('resize', this.reportWindowSize);
        window.onresize = this.reportWindowSize;
    }
    hostConnected() {
        //Draw margin
        //Translate the coordinatesystem to left bottom
        //Draw Border
        //Draw Padding
        console.log('connected');
    }
    reportWindowSize() {
        this.width = window.innerHeight;
        this.height = window.innerWidth;
    }
    hostDisConnected() {
        console.log('disconnected');
    }
    hostUpdate() { }
    /**
     * Called after a host update, just before the host calls firstUpdated and
     * updated. It is not called in server-side rendering.
     *
     */
    hostUpdated() { }
}
//# sourceMappingURL=MyPlacementController.js.map