import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";

import { OverviewComponent } from './pages/overview/overview.component';

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
  ],
})
export class ShoppingListsModule { }
