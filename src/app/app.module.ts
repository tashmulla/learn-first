import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GuidesComponent } from './guides/guides.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebDevelopmentComponent } from './guides/web-development/web-development.component';
import { InfrastructureComponent } from './guides/infrastructure/infrastructure.component';
import { DeveloperToolsComponent } from './guides/developer-tools/developer-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    GuidesComponent,
    TutorialsComponent,
    BlogsComponent,
    DashboardComponent,
    WebDevelopmentComponent,
    InfrastructureComponent,
    DeveloperToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
