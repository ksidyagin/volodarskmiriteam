import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileCompanyComponent } from './profile-company.component';
import { ProfileCompanyRoutingModule } from './profile-company-routing.module';
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
    ProfileCompanyRoutingModule,
    SystemModule,
  ],
  declarations: [
    ProfileCompanyComponent,
    ProfileComponent,
    HeadComponent,
    FooterComponent,
    StatementsComponent,
    EmployeesComponent,
    StatementsOpenComponent,
    EmployeesOpenComponent,
  ]
})

export class ProfileCompanyModule { }

