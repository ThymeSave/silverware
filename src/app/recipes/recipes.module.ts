import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MatRippleModule } from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";

import { UnitSelectorComponent } from './common/unit-selector/unit-selector.component';
import { ParsedRecipeEditorIngredientComponent } from './import/parsed-recipe-editor-ingredient/parsed-recipe-editor-ingredient.component';
import { ParsedRecipeEditorInstructionComponent } from './import/parsed-recipe-editor-instruction/parsed-recipe-editor-instruction.component';
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
    ParsedRecipeEditorIngredientComponent,
    ParsedRecipeEditorInstructionComponent,
    UnitSelectorComponent,
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
    FormsModule,
    MatStepperModule,
    MatListModule,
    MatRippleModule,
    MatProgressBarModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
})
export class RecipesModule {
}
