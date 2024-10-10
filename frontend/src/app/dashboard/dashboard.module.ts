import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardFormsComponent } from './dashboard-forms/dashboard-forms.component';
import { DashboardTablesComponent } from './dashboard-tables/dashboard-tables.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardTablesComponent,
    DashboardChartsComponent,
    DashboardHomeComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
