import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FlexModule} from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule } from "@angular/router";

import { DialogComponent } from './components/dialog/dialog.component';
import { DragHandleComponent } from './components/drag-handle/drag-handle.component';
import { ExcerptPipe } from './components/excerpt.pipe';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { SadPotatoComponent } from './components/sad-potatoe/sad-potato.component';
import { I18nPipe } from "./i18n/i18n.pipe";
import { LanguageService } from "./i18n/language.service";
import { NotificationToastComponent } from './notifications/notification-toast/notification-toast.component';
import { IngredientSelectorComponent } from "@/shared/components/ingredient-selector/ingredient-selector.component";
import { UnitSelectorComponent } from "@/shared/components/unit-selector/unit-selector.component";

@NgModule({
  declarations: [
    I18nPipe,
    DragHandleComponent,
    ExcerptPipe,
    NotificationToastComponent,
    FloatingButtonComponent,
    DialogComponent,
    UnitSelectorComponent,
    IngredientSelectorComponent,
    SadPotatoComponent,
  ],
    exports: [
        I18nPipe,
        DragHandleComponent,
        ExcerptPipe,
        NotificationToastComponent,
        FloatingButtonComponent,
        DialogComponent,
        UnitSelectorComponent,
        IngredientSelectorComponent,
        SadPotatoComponent,
    ],
  imports: [
    CommonModule,
    MatIconModule,
    FlexModule,
    MatButtonModule,
    RouterModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  providers: [
    LanguageService,
  ],
})
export class SharedModule {
}
