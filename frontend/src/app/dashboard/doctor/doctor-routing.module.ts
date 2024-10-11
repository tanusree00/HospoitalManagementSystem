import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSpecializationComponent } from './doctor-specialization/doctor-specialization.component';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';

const routes: Routes = [{path:'',redirectTo:'doctor-specialization',pathMatch:'full'},

  {path:'doctor-specialization',component:DoctorSpecializationComponent},
  {path:'manage-doctor',component:ManageDoctorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
