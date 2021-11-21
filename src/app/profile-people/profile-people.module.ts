import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProfilePeopleComponent } from './profile-people.component';
import { ProfilePeopleRoutingModule } from './profile-people-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { StatementComponent } from './statement/statement.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeadComponent } from './shared/components/head/head.component';
import { TestsComponent } from './tests/tests.component';
import { OrganizationComponent } from './organization/organization.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { StudyComponent } from './study/study.component';
import { StatamentOpenComponent } from './statament-open/statament-open.component';
import {SystemModule} from "../system/system.module";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ProfilePeopleRoutingModule,
    SystemModule,
  ],
  declarations: [
    ProfilePeopleComponent,
    ProfileComponent,
    StatementComponent,
    HeadComponent,
    FooterComponent,
    TestsComponent,
    OrganizationComponent,
    FavoritesComponent,
    StudyComponent,
    StatamentOpenComponent,
  ]
})

export class ProfilePeopleModule { }

