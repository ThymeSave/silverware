import { Component, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { cloneDeep } from "lodash";
import { merge } from "rxjs";

import { openActionDialog } from "@/shared/util/dialog";
import {
  ShoppingListItemEditComponent,
} from "@/shopping-lists/common/shopping-list-item-edit/shopping-list-item-edit.component";
import {
  GroupedShoppingListItems,
  ShoppingListItemService,
} from "@/shopping-lists/services/shopping-list-item.service";

@Component({
  selector: 'app-shopping-list-item',
  styleUrls: ['./shopping-list-item.component.scss'],
  templateUrl: './shopping-list-item.component.html',
})
export class ShoppingListItemComponent {
  @Input() public item !: GroupedShoppingListItems;
  @Input() public enableEdit: boolean = true;
  @Input() public enableEditButton : boolean = true;
  @Input() public enableCheckbox: boolean = true;
  @Input() public showAsOpen : boolean = false;

  public constructor(private dialog: MatDialog,
              private shoppingListItemService: ShoppingListItemService) {
  }

  public get done() {
    return this.showAsOpen ? false : this.item.done;
  }

  public get sum() {
    return this.showAsOpen ? this.item.openSum : this.item.doneSum;
  }

  public openEditDialog(item: GroupedShoppingListItems) {
    const data = cloneDeep(item);
    openActionDialog({
      actionCallback: () => {
        // filter out items that don't have uuid and amount empty
        data.items = data.items.filter(i => !!i.uuid || i.amount);

        // Process deletes (either by removing or clicking on delete marking as -1)
        const deletes = data.items.filter(item => !item.amount || item.amount == -1)
          .map(doc => this.shoppingListItemService.delete(doc));

        // Create new items
        const inserts = data.items.filter(item => !item.uuid)
          .map(item => ({...item, uuid: this.shoppingListItemService.generateUUID()}))
          .map(doc => this.shoppingListItemService.insert(doc));

        const updates = data.items.filter(item => item._id && item.amount && item.amount > 0)
          .map(doc => this.shoppingListItemService.upsert(doc._id!!, (toUpdate) => {
            let needUpdate = false;
            if (toUpdate.amount != doc.amount) {
              toUpdate.amount = doc.amount;
              needUpdate = true;
            }

            if (toUpdate.source.source != doc.source.source) {
              toUpdate.source.source = doc.source.source;
              needUpdate = true;
            }

            return needUpdate;
          }));

        merge(...deletes, ...inserts, ...updates)
          .subscribe();
      },
      component: ShoppingListItemEditComponent,
      data,
      dialog: this.dialog,
      width: "600px",
    });
  }

  public toggleDone(checked: boolean) {
    const updates = this.item.items
      .map(doc => this.shoppingListItemService.upsert(doc._id!!, docToUpdate => {
        if (docToUpdate.done === checked) {
          return false;
        }

        docToUpdate.done = checked;
        return docToUpdate;
      }));
    merge(...updates)
      .subscribe();
  }
}
