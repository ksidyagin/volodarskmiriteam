import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SocSphereComponent } from './soc-sphere.component';
import { SocSphereRoutingModule } from './soc-sphere-routing.module';
import { SocSpherePageComponent } from './soc-sphere-page/soc-sphere-page.component';
import { HealthCareComponent } from './health-care/health-care.component';
import { EmploymentCenterComponent } from './employment-center/employment-center.component';
import { MilitaryHouseComponent } from './military-house/military-house.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { HorseComplexComponent } from './horse-complex/horse-complex.component';
import { MfcComponent } from './mfc/mfc.component';
import { GuardianshipComponent } from './guardianship/guardianship.component';
import { PensionFondComponent } from './pension-fond/pension-fond.component';
import { ConstructionComponent } from './construction/construction.component';




@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    SocSphereRoutingModule,
  ],
  declarations: [
    SocSphereComponent,
    SocSpherePageComponent,
    HealthCareComponent,
    EmploymentCenterComponent,
    MilitaryHouseComponent,
    NewspaperComponent,
    HorseComplexComponent,
    MfcComponent,
    GuardianshipComponent,
    PensionFondComponent,
    ConstructionComponent,

  ]
})

export class SocSphereModule { }

