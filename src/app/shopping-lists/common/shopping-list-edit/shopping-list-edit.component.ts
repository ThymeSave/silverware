import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

import { openActionDialog } from "@/shared/util/dialog";
import {
  ShoppingListEditDialogComponent,
} from "@/shopping-lists/common/shopping-list-edit/shopping-list-edit-dialog.component";
import { ShoppingListEntity, ShoppingListService } from "@/shopping-lists/services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  template: `
    <div (click)="openEditDialog()">
      <ng-content></ng-content>
    </div>
  `,
})
export class ShoppingListEditComponent {
  @Input() public list !: Partial<ShoppingListEntity>;
  @Output() public edited = new EventEmitter<void>();

  public constructor(public dialog: MatDialog,
              public shoppingListService: ShoppingListService) {
  }

  public openEditDialog() {
    openActionDialog({
      actionCallback: () => {
        this.handleSubmit()
          .subscribe(() => this.edited.next());
      },
      component: ShoppingListEditDialogComponent,
      data: this.list,
      dialog: this.dialog,
    });
  }

  public handleSubmit() {
    if (this.list._id) {
      return this.shoppingListService.upsert(this.list._id, (list) => {
        Object.assign(list, {
          icon: this.list.icon,
          name: this.list.name,
        });
        return list;
      });
    } else {
      return this.shoppingListService.insert({
        created: new Date(),
        icon: this.list.icon,
        name: this.list.name!!,
        uuid: this.shoppingListService.generateUUID(),
      });
    }
  }
}
