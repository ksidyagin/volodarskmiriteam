import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { BusinessConditionsComponent } from './business-conditions/business-conditions.component';
import { BusinessComponent } from './business/business.component';
import { DepartamentComponent } from './departament/departament.component';
import { EcologyComponent } from './ecology/ecology.component';
import { EconomicComponent } from './economic/economic.component';
import { ExcursionComponent } from './excursion/excursion.component';
import { InNumbersComponent } from './in-numbers/in-numbers.component';
import { IndustryReportComponent } from './industry-report/industry-report.component';
import { InvestmentsComponent } from './investments/investments.component';
import { MainComponent } from './main/main.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { MapComponent } from './map/map.component';
import { PressCenterComponent } from './press-center/press-center.component';
import { ProfComponent } from './prof/prof.component';
import { ProfessionComponent } from './profession/profession.component';
import { ProjectTableComponent } from './project-table/project-table.component';
import { ReportsEconomyComponent } from './reports-economy/reports-economy.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeadComponent } from './shared/components/head/head.component';
import { SocialComponent } from './social/social.component';
import { TestsComponent } from './tests/tests.component';
import { WorkGroupTwoComponent } from './work-group-two/work-group-two.component';
import { WorkGroupComponent } from './work-group/work-group.component';
import { SocSphereModule } from './soc-sphere/soc-sphere.module';
import { NationalProjectsModule } from './national-projects/national-projects.module';
import { ForumComponent } from './forum/forum.component';
import { SportComponent } from './sport/sport.component';
import { TransportComponent } from './transport/transport.component';
import { GraphicNationalComponent } from './graphic-national/graphic-national.component';

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
    CommonModule,
    SystemRoutingModule,
    SocSphereModule,
    NationalProjectsModule,
  ],
  declarations: [
    SystemComponent,
    MapComponent,
    BusinessComponent,
    EcologyComponent,
    InNumbersComponent,
    MainComponent,
    InvestmentsComponent,
    ManufactureComponent,
    ProfComponent,
    ProfessionComponent,
    ProjectTableComponent,
    TestsComponent,
    HeadComponent,
    FooterComponent,
    DepartamentComponent,
    EconomicComponent,
    IndustryReportComponent,
    ReportsEconomyComponent,
    SocialComponent,
    BusinessConditionsComponent,
    ExcursionComponent,
    WorkGroupComponent,
    WorkGroupTwoComponent,
    PressCenterComponent,
    ForumComponent,
    SportComponent,
    TransportComponent,
    GraphicNationalComponent,
  ],
  exports: [
    HeadComponent,
    FooterComponent
  ],
})

export class SystemModule { }

