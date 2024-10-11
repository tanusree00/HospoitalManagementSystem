import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorSpecializationComponent } from './doctor-specialization/doctor-specialization.component';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';


@NgModule({
  declarations: [
    DoctorSpecializationComponent,
    ManageDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
