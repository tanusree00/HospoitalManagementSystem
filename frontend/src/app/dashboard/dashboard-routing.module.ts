import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardFormsComponent } from './dashboard-forms/dashboard-forms.component';
import { DashboardTablesComponent } from './dashboard-tables/dashboard-tables.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

const routes: Routes = [{ path: '', component: DashboardComponent ,children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:DashboardHomeComponent},
  {path:'forms',component:DashboardFormsComponent},
  {path:'tables',component:DashboardTablesComponent},
  {path:'charts',component:DashboardChartsComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
