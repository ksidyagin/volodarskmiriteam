import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ConstructionComponent } from './construction/construction.component';
import { EmploymentCenterComponent } from './employment-center/employment-center.component';
import { GuardianshipComponent } from './guardianship/guardianship.component';
import { HealthCareComponent } from './health-care/health-care.component';
import { HorseComplexComponent } from './horse-complex/horse-complex.component';
import { MfcComponent } from './mfc/mfc.component';
import { MilitaryHouseComponent } from './military-house/military-house.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { PensionFondComponent } from './pension-fond/pension-fond.component';
import { SocSpherePageComponent } from './soc-sphere-page/soc-sphere-page.component';
import { SocSphereComponent } from './soc-sphere.component';



const routes: Routes = [
  {
    path: 'soc-sphere', component: SocSphereComponent, children: [
      { path: 'soc-sphere-page', component: SocSpherePageComponent },
      { path: 'health-care', component: HealthCareComponent },
      { path: 'pension-fond', component: PensionFondComponent },
      { path: 'construction', component: ConstructionComponent },
      { path: 'employment-center', component: EmploymentCenterComponent },
      { path: 'guardianship', component: GuardianshipComponent },
      { path: 'horse-complex', component: HorseComplexComponent },
      { path: 'mfc', component: MfcComponent },
      { path: 'military-mouse', component: MilitaryHouseComponent },
      { path: 'newspaper', component: NewspaperComponent },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SocSphereRoutingModule { }
