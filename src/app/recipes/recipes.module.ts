import {DragDropModule} from "@angular/cdk/drag-drop";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
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
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatStepperModule } from "@angular/material/stepper";
import {MatTabsModule} from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";

import { IngredientSelectorComponent } from './common/ingredient-selector/ingredient-selector.component';
import { UnitSelectorComponent } from './common/unit-selector/unit-selector.component';
import { ParsedRecipeEditorIngredientComponent } from './import/parsed-recipe-editor-ingredient/parsed-recipe-editor-ingredient.component';
import { ParsedRecipeEditorInstructionComponent } from './import/parsed-recipe-editor-instruction/parsed-recipe-editor-instruction.component';
import { ParsedRecipeEditorComponent } from './import/parsed-recipe-editor/parsed-recipe-editor.component';
import { URLImporterSettingsComponent } from './import/urlimporter-settings/urlimporter-settings.component';
import { SearchBarComponent } from './overview/search-bar/search-bar.component';
import { NewRecipeComponent } from './pages/new/new-recipe.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SharedModule } from "@/shared/shared.module";

const routes: Routes = [
  {
    component: OverviewComponent,
    path: '',
  },
  {
    component: NewRecipeComponent,
    path: 'new',
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
    IngredientSelectorComponent,
    SearchBarComponent,
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
        MatSlideToggleModule,
        DragDropModule,
        MatAutocompleteModule,
        FlexLayoutModule,
        MatTabsModule,
    ],
})
export class RecipesModule {
}
