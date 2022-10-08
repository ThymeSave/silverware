import { DialogRef } from "@angular/cdk/dialog";
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ShoppingList } from "@thymesave/core";

import { ShoppingListEditComponent } from "@/shopping-lists/common/shopping-list-edit/shopping-list-edit.component";
import { ShoppingListEntity } from "@/shopping-lists/services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit-dialog',
  styles: [
    `
      mat-form-field {
        width: 100%;
      }
    `,
  ],
  templateUrl: './shopping-list-edit-dialog.component.html',
})
export class ShoppingListEditDialogComponent {
  constructor(public fb: FormBuilder,
              public dialogRef: DialogRef<ShoppingListEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Partial<ShoppingListEntity>) {
  }

  public get isEdit() {
    return !!this.data._id;
  }

  public form = this.fb.group({
    'icon': this.fb.control(this.data.icon, Validators.required),
    'name': this.fb.control(this.data.name, Validators.required),
  });

  save() {
    if (!this.form.valid) {
      return;
    }
    Object.assign(this.data, this.form.getRawValue());
  }
}
