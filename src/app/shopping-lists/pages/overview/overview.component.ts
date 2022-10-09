import { BreakpointObserver } from "@angular/cdk/layout";
import { Component } from '@angular/core';
import { ShoppingList } from "@thymesave/core";
import { BehaviorSubject, filter } from "rxjs";

import { createMobileBreakpointObserver } from "@/shared/util/breakpoint";

@Component({
  selector: 'app-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  public selected = new BehaviorSubject<ShoppingList | null>(null);
  public selected$ = this.selected.pipe(
    filter(v => v != null),
  );

  public isMobile$ = createMobileBreakpointObserver(this.breakPointObserver);

  public constructor(private breakPointObserver : BreakpointObserver) {
  }
}
