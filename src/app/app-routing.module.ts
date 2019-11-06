import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeopleComponent} from '../app/people/people.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PeopleDetailComponent} from './people-detail/people-detail.component';

const routes: Routes = [
  {path: 'people', component: PeopleComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'detail/:id', component: PeopleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
