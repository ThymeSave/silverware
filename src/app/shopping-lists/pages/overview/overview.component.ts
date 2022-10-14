import { BreakpointObserver } from "@angular/cdk/layout";
import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { ShoppingList } from "@thymesave/core";
import { BehaviorSubject, filter, map, Observable } from "rxjs";

import { NotificationService } from "@/shared/notifications/notification.service";
import { createMobileBreakpointObserver } from "@/shared/util/breakpoint";
import { openActionDialog } from "@/shared/util/dialog";
import {
  ShoppingListAddDialogData,
  ShoppingListItemAddComponent,
} from "@/shopping-lists/common/shopping-list-item-add/shopping-list-item-add.component";
import { ShoppingListItemService } from "@/shopping-lists/services/shopping-list-item.service";

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
                     private shoppingListItemService: ShoppingListItemService,
                     private notificationService: NotificationService,
                     private dialog: MatDialog,
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
    ], {
      replaceUrl: false,
    });
  }

  public onDelete() {
    this.selected.next(null);
    this.notificationService.sendNotification({
      message: 'notifications.success.shopping_list_deleted',
      type: 'Success',
    });
  }

  public addItemToList(list: ShoppingList) {
    const data: ShoppingListAddDialogData = {
      items: [],
    };

    openActionDialog({
      actionCallback: () => {
        this.shoppingListItemService.addManualToShoppingList(list, data.items)
          .subscribe(() => {
            this.notificationService.sendNotification({
              message: 'notifications.success.added_to_shopping_list',
              type: 'Success',
            });
          });
      },
      component: ShoppingListItemAddComponent,
      data,
      dialog: this.dialog,
      width: "800px",
    });
  }
}
