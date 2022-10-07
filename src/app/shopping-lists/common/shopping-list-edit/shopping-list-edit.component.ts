import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ShoppingList } from "@thymesave/core";
import { filter, switchMap } from "rxjs";
import { v4 as uuidv4 } from 'uuid';

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
  @Input() list !: Partial<ShoppingListEntity>;
  @Output() edited = new EventEmitter<void>();

  constructor(public dialog: MatDialog,
              public shoppingListService : ShoppingListService) {
  }

  public openEditDialog() {
    const ref = this.dialog.open(ShoppingListEditDialogComponent, {
      data: this.list,
      width: "500px",
    });
    ref.afterClosed()
      .pipe(
        filter(res => res === true),
        switchMap(() => this.handleSubmit()),
      )
      .subscribe(() => this.edited.next());
  }

  public handleSubmit() {
    if(this.list._id) {
      return this.shoppingListService.upsert(this.list._id, (list) => {
        Object.assign(list, this.list);
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
