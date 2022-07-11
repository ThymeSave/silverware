import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthClientConfig, AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FunnelConfig } from "../helper/loadFunnelConfig";
import { ShellComponent } from './pages/shell/shell.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatMenuModule } from "@angular/material/menu";
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { I18nPipe } from './core/i18n.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ShellComponent,
    I18nPipe,
  ],
  imports: [
    BrowserModule,
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
  ],
  providers: [
    {
      provide: 'funnelConfig',
      // @ts-ignore Load value set in main.ts after fetching from API
      useFactory: () => window.funnelConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(@Inject("funnelConfig") funnelConfig: FunnelConfig, config: AuthClientConfig) {
    // Modify auth0 config with actual values
    config.set({
      clientId: funnelConfig.oidc.clientId,
      domain: new URL(funnelConfig.oidc.configUrl).host,
      cacheLocation: 'localstorage',
    });
  }
}
