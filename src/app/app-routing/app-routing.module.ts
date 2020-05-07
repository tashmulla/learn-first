import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GuidesComponent } from '../guides/guides.component';
import { TutorialsComponent } from '../tutorials/tutorials.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { WebDevelopmentComponent } from '../guides/web-development/web-development.component';
import { InfrastructureComponent } from '../guides/infrastructure/infrastructure.component';
import { DeveloperToolsComponent } from '../guides/developer-tools/developer-tools.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'guides',
    component: GuidesComponent,
    pathMatch: 'full'
  },
  {
    path: 'tutorials',
    component: TutorialsComponent,
    pathMatch: 'full'
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    pathMatch: 'full'
  },
  {
    path: 'guides/web-development',
    component: WebDevelopmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'guides/infrastructure',
    component: InfrastructureComponent,
    pathMatch: 'full'
  },
  {
    path: 'guides/developer-tools',
    component: DeveloperToolsComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
