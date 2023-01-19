import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRippleModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";
import { createRoutingData } from "@helper/routing";

import { CheckableTextComponent } from './common/checkable-text/checkable-text.component';
import { RecipeImageComponent } from './common/recipe-image/recipe-image.component';
import { ShoppingListSelectorComponent } from './common/shopping-list-selector/shopping-list-selector.component';
import { ParsedRecipeEditorComponent } from './import/parsed-recipe-editor/parsed-recipe-editor.component';
import {
  ParsedRecipeEditorIngredientComponent,
} from './import/parsed-recipe-editor-ingredient/parsed-recipe-editor-ingredient.component';
import {
  ParsedRecipeEditorInstructionComponent,
} from './import/parsed-recipe-editor-instruction/parsed-recipe-editor-instruction.component';
import { URLImporterSettingsComponent } from './import/urlimporter-settings/urlimporter-settings.component';
import { RecipeCardComponent } from './overview/recipe-card/recipe-card.component';
import { SearchBarComponent } from './overview/search-bar/search-bar.component';
import { GetRecipeComponent } from './pages/get/get-recipe.component';
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
  {
    component: GetRecipeComponent,
    path: ':id',
    ...createRoutingData({fullWidth: true}),
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
    SearchBarComponent,
    RecipeCardComponent,
    GetRecipeComponent,
    RecipeImageComponent,
    CheckableTextComponent,
    ShoppingListSelectorComponent,
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
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDialogModule,
  ],
})
export class RecipesModule {
}
