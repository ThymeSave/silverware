import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule, Routes } from "@angular/router";

import { SettingsSectionDangerZoneComponent } from './components/settings-section-danger-zone/settings-section-danger-zone.component';
import { SettingsSectionShoppingListComponent } from './components/settings-section-shopping-list/settings-section-shopping-list.component';
import { SettingsSectionUiComponent } from './components/settings-section-ui/settings-section-ui.component';
import { SettingsComponent } from "@/settings/pages/settings/settings.component";
import { SharedModule } from "@/shared/shared.module";

const routes: Routes = [
  {
    component: SettingsComponent,
    path: '',
  },
];

@NgModule({
  declarations: [
    SettingsSectionUiComponent,
    SettingsSectionDangerZoneComponent,
    SettingsSectionShoppingListComponent,
  ],
  exports: [
    RouterModule,
    SettingsSectionUiComponent,
    SettingsSectionDangerZoneComponent,
    SettingsSectionShoppingListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
  ],
})
export class SettingsModule {
}
