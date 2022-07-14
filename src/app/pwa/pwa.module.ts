import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

import { AppUpdateDialogComponent } from './app-update-dialog/app-update-dialog.component';
import { SharedModule } from "@/shared/shared.module";

@NgModule({
  declarations: [
    AppUpdateDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule,
    FlexModule,
  ],
})
export class PwaModule {
}
