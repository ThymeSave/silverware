import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { SettingsComponent } from "@/settings/pages/settings/settings.component";

const routes: Routes = [
  {
    component: SettingsComponent,
    path: '',
  },
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class SettingsModule {
}
