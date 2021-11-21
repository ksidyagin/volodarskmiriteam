import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileEducComponent } from './profile-educ.component';
import { ProfileEducRoutingModule } from './profile-educ-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeadComponent } from './shared/components/head/head.component';
import { StatementsComponent } from './statements/statements.component';
import { EmployeesComponent } from './employees/employees.component';
import { StatementsOpenComponent } from './statements-open/statements-open.component';
import { EmployeesOpenComponent } from './employees-open/employees-open.component';
import {SystemModule} from "../system/system.module";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ProfileEducRoutingModule,
    SystemModule,
  ],
  declarations: [
    ProfileEducComponent,
    ProfileComponent,
    HeadComponent,
    FooterComponent,
    StatementsComponent,
    EmployeesComponent,
    StatementsOpenComponent,
    EmployeesOpenComponent,
  ]
})

export class ProfileEducModule { }

