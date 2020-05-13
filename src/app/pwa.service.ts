import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable()
export class PwaService {
  promptEvent: any;
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      if (this.askUserToUpdate()) {
        window.location.reload();
      }
    });
    window.addEventListener('beforeinstallprompt', event => {
      console.log('beforeinstallprompt caught');
      this.promptEvent = event;
    });
  }

  askUserToUpdate(): boolean {
    return confirm('Want to update?');
  }
}
