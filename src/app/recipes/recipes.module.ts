import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";

import { NewComponent } from './pages/new/new.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SharedModule } from "@/shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
];

@NgModule({
  declarations: [
    OverviewComponent,
    NewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    SharedModule,
  ],
})
export class RecipesModule {
}
