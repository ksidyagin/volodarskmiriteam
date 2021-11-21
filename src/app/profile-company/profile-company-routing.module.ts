import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { EmployeesOpenComponent } from './employees-open/employees-open.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProfileCompanyComponent } from './profile-company.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeadComponent } from './shared/components/head/head.component';
import { StatementsOpenComponent } from './statements-open/statements-open.component';
import { StatementsComponent } from './statements/statements.component';





const routes: Routes = [
  {
    path: 'profile-company', component: ProfileCompanyComponent, children: [
      { path: 'head', component: HeadComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'profile-company', component: ProfileComponent },
      { path: 'statements', component: StatementsComponent },
      { path: 'statements-open', component: StatementsOpenComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'employees-open', component: EmployeesOpenComponent },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileCompanyRoutingModule { }
