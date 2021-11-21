import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NationalProjectsComponent } from './national-projects.component';
import { NationalProjectsRoutingModule } from './national-projects-routing.module';
import { ProjectEcologyComponent } from './project-ecology/project-ecology.component';
import { ProjectCultureComponent } from './project-culture/project-culture.component';
import { ProjectEducationComponent } from './project-education/project-education.component';
import { ProjectCityComponent } from './project-city/project-city.component';
import { ProjectDigitalComponent } from './project-digital/project-digital.component';
import { ProjectsComponent } from './projects/projects.component';
import {ChartsModule} from "ng2-charts";


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NationalProjectsRoutingModule,
    ChartsModule
  ],
  declarations: [
    ProjectsComponent,
    NationalProjectsComponent,
    ProjectEcologyComponent,
    ProjectCultureComponent,
    ProjectEducationComponent,
    ProjectCityComponent,
    ProjectDigitalComponent,

  ]
})

export class NationalProjectsModule { }

