import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthClientConfig, AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { FunnelConfig } from "../helper/loadFunnelConfig";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule.forRoot(),
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
