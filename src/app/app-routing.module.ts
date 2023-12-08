import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  // { path: 'promotionsCreate', component: AcceptRefuseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
