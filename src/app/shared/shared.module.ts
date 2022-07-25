import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

import { DragHandleComponent } from './components/drag-handle/drag-handle.component';
import { I18nPipe } from "./i18n/i18n.pipe";
import { LanguageService } from "./i18n/language.service";

@NgModule({
  declarations: [
    I18nPipe,
    DragHandleComponent,
  ],
    imports: [
        CommonModule,
        MatIconModule,
    ],
  exports: [
    I18nPipe,
    DragHandleComponent,
  ],
  providers: [
    LanguageService,
  ],
})
export class SharedModule {
}
