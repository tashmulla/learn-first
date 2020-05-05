import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GuidesComponent } from '../guides/guides.component';
import { TutorialsComponent } from '../tutorials/tutorials.component';
import { ResourcesComponent } from '../resources/resources.component';

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
    path: 'resources',
    component: ResourcesComponent,
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
