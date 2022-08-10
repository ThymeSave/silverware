import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";

import { OverviewComponent } from './pages/overview/overview.component';
import { SharedModule } from "@/shared/shared.module";

const routes : Route[] = [
  {
    component: OverviewComponent,
    path: '',
  },
];

@NgModule({
  declarations: [
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class ShoppingListsModule { }
