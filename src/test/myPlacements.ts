import {ReactiveController, ReactiveControllerHost} from 'lit';

//https://lit.dev/docs/composition/controllers/#controller-host-api
export class MyController implements ReactiveController {
    host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
     this.host = host;
     host.addController(this);
  }
  
  hostConnected?(): void {
    //Draw margin
       //Translate the coordinatesystem to left bottom
       this.host.
   //Draw Border
   //Draw Padding
 }

  hostDisConnected?(): void {
    
  }
  
  hostUpdate?(): void {}
  /**
   * Called after a host update, just before the host calls firstUpdated and
   * updated. It is not called in server-side rendering.
   *
   */
  hostUpdated?(): void {
   
  }
}
