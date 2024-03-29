import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatIconRegistry } from "@angular/material/icon";
import { ActivatedRoute, Router } from "@angular/router";
import { ShoppingList } from "@thymesave/core";
import { BehaviorSubject } from "rxjs";

import { NotificationService } from "@/shared/notifications/notification.service";
import { createMobileBreakpointObserver } from "@/shared/util/breakpoint";
import { openActionDialog } from "@/shared/util/dialog";
import {
  ShoppingListAddDialogData,
  ShoppingListItemAddComponent,
} from "@/shopping-lists/common/shopping-list-item-add/shopping-list-item-add.component";
import {
  ShoppingListSelectorComponent,
} from "@/shopping-lists/common/shopping-list-selector/shopping-list-selector.component";
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

  public editIgnoreList: boolean = false;

  @ViewChild("selector") public selector !: ShoppingListSelectorComponent;

  public constructor(private breakPointObserver: BreakpointObserver,
                     private activatedRoute: ActivatedRoute,
                     private shoppingListItemService: ShoppingListItemService,
                     private notificationService: NotificationService,
                     private dialog: MatDialog,
                     private router: Router,
                     private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.registerFontClassAlias("food", "material-food-icons");

    this.routeUuid = (activatedRoute.snapshot.params as RouteParameters).uuid || null;
    this.selected$.subscribe(newItem => {
      if (newItem) {
        this.updateRoute(newItem?.uuid);
        this.hideIgnoreList();
      }
    });
    this.activatedRoute.params
      .subscribe(parameter => this.routeUuid = parameter['uuid']);
  }

  public showIgnoreList() {
    this.editIgnoreList = true;
    this.selected.next(null);
    this.selector.deselect();
  }

  public hideIgnoreList() {
    if (!this.editIgnoreList) {
      return;
    }
    this.editIgnoreList = false;
    this.selector.selectItemByUuid(this.routeUuid!!);
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
