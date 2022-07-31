import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

import { DragHandleComponent } from './components/drag-handle/drag-handle.component';
import { ExcerptPipe } from './components/excerpt.pipe';
import { I18nPipe } from "./i18n/i18n.pipe";
import { LanguageService } from "./i18n/language.service";

@NgModule({
  declarations: [
    I18nPipe,
    DragHandleComponent,
    ExcerptPipe,
  ],
    exports: [
        I18nPipe,
        DragHandleComponent,
        ExcerptPipe,
    ],
  imports: [
        CommonModule,
        MatIconModule,
    ],
  providers: [
    LanguageService,
  ],
})
export class SharedModule {
}
