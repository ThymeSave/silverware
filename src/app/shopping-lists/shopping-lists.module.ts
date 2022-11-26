import {DragDropModule} from "@angular/cdk/drag-drop";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MatRippleModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Route, RouterModule } from "@angular/router";

import { CategoryIconPipe } from './common/category-icon.pipe';
import { ShoppingListDetailComponent } from './common/shopping-list-detail/shopping-list-detail.component';
import { ShoppingListEditComponent } from './common/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListItemAddComponent } from './common/shopping-list-item-add/shopping-list-item-add.component';
import { ShoppingListItemEditComponent } from './common/shopping-list-item-edit/shopping-list-item-edit.component';
import { ShoppingListItemComponent } from './common/shopping-list-item/shopping-list-item.component';
import { ShoppingListSelectorComponent } from './common/shopping-list-selector/shopping-list-selector.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SharedModule } from "@/shared/shared.module";
import {
  ShoppingListEditDialogComponent,
} from "@/shopping-lists/common/shopping-list-edit/shopping-list-edit-dialog.component";

const routes : Route[] = [
  {
    component: OverviewComponent,
    path: '',
  },
  {
    component: OverviewComponent,
    path: ':uuid',
  },
];

@NgModule({
  declarations: [
    OverviewComponent,
    ShoppingListSelectorComponent,
    ShoppingListDetailComponent,
    ShoppingListEditComponent,
    ShoppingListEditDialogComponent,
    ShoppingListItemComponent,
    ShoppingListItemEditComponent,
    ShoppingListItemAddComponent,
    CategoryIconPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FlexLayoutModule,
    MatCardModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    DragDropModule,
    MatAutocompleteModule,
    FormsModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatExpansionModule,
  ],
})
export class ShoppingListsModule { }
