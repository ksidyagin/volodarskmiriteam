import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';
import { ProfileEducComponent } from './profile-educ/profile-educ.component';
import { ProfilePeopleComponent } from './profile-people/profile-people.component';
import { ProfileComponent } from './profile-people/profile/profile.component';
import { MainComponent } from './system/main/main.component';
import { SystemComponent } from './system/system.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {

    path: 'system', component: SystemComponent, children: [
      { path: 'main', component: MainComponent },
    ]
  },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: 'profile-people', component: ProfilePeopleComponent, children: [
      { path: 'profile', component: ProfileComponent },
    ]
  },
  {
    path: 'profile-admin', component: ProfileAdminComponent, children: [
      { path: 'profile', component: ProfileComponent },
    ]
  },
  {
    path: 'profile-company', component: ProfileCompanyComponent, children: [
      { path: 'profile', component: ProfileComponent },
    ]
  },
  {
    path: 'profile-educ', component: ProfileEducComponent, children: [
      { path: 'profile', component: ProfileComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }