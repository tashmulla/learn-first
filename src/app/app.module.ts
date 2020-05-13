import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GuidesComponent } from './guides/guides.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebDevelopmentComponent } from './guides/web-development/web-development.component';
import { InfrastructureComponent } from './guides/infrastructure/infrastructure.component';
import { DeveloperToolsComponent } from './guides/developer-tools/developer-tools.component';
import { HtmlComponent } from './guides/web-development/html/html.component';
import { CssComponent } from './guides/web-development/css/css.component';
import { JavascriptComponent } from './guides/web-development/javascript/javascript.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PwaService } from "./pwa.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    GuidesComponent,
    AboutComponent,
    DashboardComponent,
    WebDevelopmentComponent,
    InfrastructureComponent,
    DeveloperToolsComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    PwaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
