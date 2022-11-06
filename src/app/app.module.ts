import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import localeDe from "@angular/common/locales/de";
import { Inject, NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthClientConfig, AuthModule } from '@auth0/auth0-angular';

import { MyHammerConfig } from "../hammerjs";
import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { HomeComponent } from '@/pages/home/home.component';
import { NotFoundComponent } from '@/pages/not-found/not-found.component';
import { ShellComponent, ShellSyncDialogComponent } from '@/pages/shell/shell.component';
import { PwaModule } from "@/pwa/pwa.module";
import { SettingsComponent } from '@/settings/pages/settings/settings.component';
import { SharedModule } from "@/shared/shared.module";

import { environment } from '@/../environments/environment';
import { FunnelConfig } from "@/../helper/loadFunnelConfig";

registerLocaleData(localeDe);

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ShellComponent,
    SettingsComponent,
    ShellSyncDialogComponent,
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 20 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:20000',
    }),
    MatSelectModule,
    PwaModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HammerModule,
  ],
  providers: [
    {
      provide: 'funnelConfig',
      // @ts-ignore Load value set in main.ts after fetching from API
      useFactory: () => window.funnelConfig,
    },
    {
      provide:HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
})
export class AppModule {
  public constructor(@Inject("funnelConfig") funnelConfig: FunnelConfig, config: AuthClientConfig) {
    // Modify auth0 config with actual values
    config.set({
      cacheLocation: 'localstorage',
      clientId: funnelConfig.oidc.clientId,
      domain: new URL(funnelConfig.oidc.configUrl).host,
    });
  }
}
