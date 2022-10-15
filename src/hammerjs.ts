import { HammerGestureConfig } from "@angular/platform-browser";
import Hammer from 'hammerjs';

export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any>{
    swipe: {
      direction: Hammer.DIRECTION_HORIZONTAL,
    },
  };

  override buildHammer(element: HTMLElement) {
    return new Hammer(element, {
      touchAction: "pan-y",
    });
  }
}
