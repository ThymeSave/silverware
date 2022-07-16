import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import { MatStepperModule } from "@angular/material/stepper";
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
    MatFormFieldModule,
    MatInputModule,
    FlexModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatListModule,
    MatRippleModule,
  ],
})
export class RecipesModule {
}
