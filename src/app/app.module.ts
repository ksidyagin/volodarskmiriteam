import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SystemModule } from './system/system.module';
import { ProfilePeopleModule } from './profile-people/profile-people.module';
import { ProfileAdminModule } from './profile-admin/profile-admin.module';
import { ProfileCompanyModule } from './profile-company/profile-company.module';
import { ProfileEducModule } from './profile-educ/profile-educ.module';


const mapConfig: YaConfig = {
  apikey: '23215eb4-11da-4e8e-b8d2-4e3bb79ec298',
  lang: 'ru_RU',
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    AuthModule,
    SystemModule,
    ProfilePeopleModule,
    ProfileAdminModule,
    ProfileCompanyModule,
    ProfileEducModule
  ],
  declarations: [
    AppComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
