import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { OrganizationComponent } from './organization/organization.component';
import { ProfilePeopleComponent } from './profile-people.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeadComponent } from './shared/components/head/head.component';
import { StatamentOpenComponent } from './statament-open/statament-open.component';
import { StatementComponent } from './statement/statement.component';
import { StudyComponent } from './study/study.component';
import { TestsComponent } from './tests/tests.component';




const routes: Routes = [
  {
    path: 'profile-people', component: ProfilePeopleComponent, children: [
      { path: 'head', component: HeadComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'statement', component: StatementComponent },
      { path: 'tests', component: TestsComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'organization', component: OrganizationComponent },
      { path: 'study', component: StudyComponent },
      { path: 'statement-open', component: StatamentOpenComponent },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfilePeopleRoutingModule { }
