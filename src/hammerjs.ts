import { HammerGestureConfig } from "@angular/platform-browser";
import * as Hammer from 'hammerjs';

export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any>{
    swipe: {
      direction: Hammer.DIRECTION_ALL,
    },
  };
}
