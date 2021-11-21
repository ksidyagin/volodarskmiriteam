import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BusinessConditionsComponent } from './business-conditions/business-conditions.component';
import { BusinessComponent } from './business/business.component';
import { DepartamentComponent } from './departament/departament.component';
import { EcologyComponent } from './ecology/ecology.component';
import { EconomicComponent } from './economic/economic.component';
import { ExcursionComponent } from './excursion/excursion.component';
import { ForumComponent } from './forum/forum.component';
import { GraphicNationalComponent } from './graphic-national/graphic-national.component';
import { InNumbersComponent } from './in-numbers/in-numbers.component';
import { IndustryReportComponent } from './industry-report/industry-report.component';
import { InvestmentsComponent } from './investments/investments.component';
import { MainComponent } from './main/main.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { MapComponent } from './map/map.component';
import { NationalProjectsComponent } from './national-projects/national-projects.component';
import { ProjectCityComponent } from './national-projects/project-city/project-city.component';
import { ProjectCultureComponent } from './national-projects/project-culture/project-culture.component';
import { ProjectDigitalComponent } from './national-projects/project-digital/project-digital.component';
import { ProjectEcologyComponent } from './national-projects/project-ecology/project-ecology.component';
import { ProjectEducationComponent } from './national-projects/project-education/project-education.component';
import { ProjectsComponent } from './national-projects/projects/projects.component';
import { PressCenterComponent } from './press-center/press-center.component';
import { ProfComponent } from './prof/prof.component';
import { ProfessionComponent } from './profession/profession.component';
import { ProjectTableComponent } from './project-table/project-table.component';
import { ReportsEconomyComponent } from './reports-economy/reports-economy.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeadComponent } from './shared/components/head/head.component';
import { ConstructionComponent } from './soc-sphere/construction/construction.component';
import { EmploymentCenterComponent } from './soc-sphere/employment-center/employment-center.component';
import { GuardianshipComponent } from './soc-sphere/guardianship/guardianship.component';
import { HealthCareComponent } from './soc-sphere/health-care/health-care.component';
import { HorseComplexComponent } from './soc-sphere/horse-complex/horse-complex.component';
import { MfcComponent } from './soc-sphere/mfc/mfc.component';
import { MilitaryHouseComponent } from './soc-sphere/military-house/military-house.component';
import { NewspaperComponent } from './soc-sphere/newspaper/newspaper.component';
import { PensionFondComponent } from './soc-sphere/pension-fond/pension-fond.component';
import { SocSpherePageComponent } from './soc-sphere/soc-sphere-page/soc-sphere-page.component';
import { SocSphereComponent } from './soc-sphere/soc-sphere.component';
import { SocialComponent } from './social/social.component';
import { SportComponent } from './sport/sport.component';
import { SystemComponent } from './system.component';
import { TestsComponent } from './tests/tests.component';
import { TransportComponent } from './transport/transport.component';
import { WorkGroupTwoComponent } from './work-group-two/work-group-two.component';
import { WorkGroupComponent } from './work-group/work-group.component';





const routes: Routes = [
  {
    path: 'system', component: SystemComponent, children: [
      { path: 'main', component: MainComponent },
      { path: 'map', component: MapComponent },
      { path: 'business', component: BusinessComponent },
      { path: 'ecology', component: EcologyComponent },
      { path: 'social', component: SocialComponent },
      { path: 'economic', component: EconomicComponent },
      { path: 'departament', component: DepartamentComponent },
      { path: 'in-numbers', component: InNumbersComponent },
      { path: 'industry-report', component: IndustryReportComponent },
      { path: 'reports-economy', component: ReportsEconomyComponent },
      { path: 'investments', component: InvestmentsComponent },
      { path: 'manufacture', component: ManufactureComponent },
      {
        path: 'national-projects', component: NationalProjectsComponent, children: [
          { path: 'projects', component: ProjectsComponent },
          { path: 'project-ecology', component: ProjectEcologyComponent },
          { path: 'project-culture', component: ProjectCultureComponent },
          { path: 'project-education', component: ProjectEducationComponent },
          { path: 'project-city', component: ProjectCityComponent },
          { path: 'project-digital', component: ProjectDigitalComponent },
        ]
      },
      { path: 'prof', component: ProfComponent },
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
          { path: 'military-house', component: MilitaryHouseComponent },
          { path: 'newspaper', component: NewspaperComponent },
        ]
      },
      { path: 'transport', component: TransportComponent },
      { path: 'graphic-national', component: GraphicNationalComponent },
      { path: 'profession', component: ProfessionComponent },
      { path: 'project-table', component: ProjectTableComponent },
      { path: 'forum', component: ForumComponent },
      { path: 'head', component: HeadComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'tests', component: TestsComponent },
      { path: 'sport', component: SportComponent },
      { path: 'press-center', component: PressCenterComponent },
      { path: 'excursion', component: ExcursionComponent },
      { path: 'work-group', component: WorkGroupComponent },
      { path: 'work-group-two', component: WorkGroupTwoComponent },
      { path: 'business-conditions', component: BusinessConditionsComponent },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule { }
