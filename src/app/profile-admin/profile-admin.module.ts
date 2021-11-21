import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileAdminComponent } from './profile-admin.component';
import { ProfileAdminRoutingModule } from './profile-admin-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { StatementComponent } from './statement/statement.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeadComponent } from './shared/components/head/head.component';
import { TestsComponent } from './tests/tests.component';
import { OrganizationComponent } from './organization/organization.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { StudyComponent } from './study/study.component';
import { StatamentOpenComponent } from './statament-open/statament-open.component';
import { RegUsersComponent } from './reg-users/reg-users.component';
import {SystemModule} from "../system/system.module";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ProfileAdminRoutingModule,
    ReactiveFormsModule,
    SystemModule
  ],
  declarations: [
    ProfileAdminComponent,
    ProfileComponent,
    StatementComponent,
    HeadComponent,
    FooterComponent,
    TestsComponent,
    OrganizationComponent,
    FavoritesComponent,
    StudyComponent,
    StatamentOpenComponent,
    RegUsersComponent,
  ]
})

export class ProfileAdminModule { }

