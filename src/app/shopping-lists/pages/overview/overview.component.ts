import { BreakpointObserver } from "@angular/cdk/layout";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ShoppingList } from "@thymesave/core";
import { BehaviorSubject, filter, map, Observable } from "rxjs";

import { createMobileBreakpointObserver } from "@/shared/util/breakpoint";

interface RouteParameters {
  uuid: string | undefined
}

@Component({
  selector: 'app-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  public selected = new BehaviorSubject<ShoppingList | null>(null);
  public selected$ = this.selected.pipe();

  public routeUuid: string | null;

  public isMobile$ = createMobileBreakpointObserver(this.breakPointObserver);

  public constructor(private breakPointObserver: BreakpointObserver,
                     private activatedRoute: ActivatedRoute,
                     private router: Router) {
    this.routeUuid = (activatedRoute.snapshot.params as RouteParameters).uuid || null;
    this.selected$.subscribe(list => this.updateRoute(list?.uuid));
  }

  public updateRoute(uuid ?: string) {
    if (!uuid) {
      return;
    }
    this.router.navigate([
      `/shopping-lists/${uuid}`,
    ],{
      replaceUrl: false,
    });
  }

  public onDelete() {
    this.selected.next(null);
  }
}
