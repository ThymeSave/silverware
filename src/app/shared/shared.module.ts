import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FlexModule} from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

import { DragHandleComponent } from './components/drag-handle/drag-handle.component';
import { ExcerptPipe } from './components/excerpt.pipe';
import { I18nPipe } from "./i18n/i18n.pipe";
import { LanguageService } from "./i18n/language.service";
import { NotificationToastComponent } from './notifications/notification-toast/notification-toast.component';

@NgModule({
  declarations: [
    I18nPipe,
    DragHandleComponent,
    ExcerptPipe,
    NotificationToastComponent,
  ],
    exports: [
        I18nPipe,
        DragHandleComponent,
        ExcerptPipe,
        NotificationToastComponent,
    ],
  imports: [
    CommonModule,
    MatIconModule,
    FlexModule,
    MatButtonModule,
  ],
  providers: [
    LanguageService,
  ],
})
export class SharedModule {
}
