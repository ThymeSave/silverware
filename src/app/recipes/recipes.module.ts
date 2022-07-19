import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";

import { ParsedRecipeEditorComponent } from './import/parsed-recipe-editor/parsed-recipe-editor.component';
import { URLImporterSettingsComponent } from './import/urlimporter-settings/urlimporter-settings.component';
import { NewRecipeComponent } from './pages/new/new-recipe.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SharedModule } from "@/shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'new',
    component: NewRecipeComponent,
  },
];

@NgModule({
  declarations: [
    OverviewComponent,
    NewRecipeComponent,
    URLImporterSettingsComponent,
    ParsedRecipeEditorComponent,
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
        MatProgressBarModule,
        MatCardModule,
    ],
})
export class RecipesModule {
}
