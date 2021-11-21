import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { NationalProjectsComponent } from './national-projects.component';
import { ProjectCityComponent } from './project-city/project-city.component';
import { ProjectCultureComponent } from './project-culture/project-culture.component';
import { ProjectDigitalComponent } from './project-digital/project-digital.component';
import { ProjectEcologyComponent } from './project-ecology/project-ecology.component';
import { ProjectEducationComponent } from './project-education/project-education.component';
import { ProjectsComponent } from './projects/projects.component';



const routes: Routes = [
  {
    path: 'national-projects', component: NationalProjectsComponent, children: [
      { path: 'projects', component: ProjectsComponent },
      { path: 'project-ecology', component: ProjectEcologyComponent },
      { path: 'project-culture', component: ProjectCultureComponent },
      { path: 'project-education', component: ProjectEducationComponent },
      { path: 'project-city', component: ProjectCityComponent },
      { path: 'project-digital', component: ProjectDigitalComponent },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NationalProjectsRoutingModule { }
