import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';
import { WebHomeComponent } from './web-home/web-home.component';
import { WebAboutComponent } from './web-about/web-about.component';
import { WebServiceComponent } from './web-service/web-service.component';

const routes: Routes = [{
  path: '', component: WebComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: WebHomeComponent },
    { path: 'about', component: WebAboutComponent },
    {path:'service',component:WebServiceComponent}

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
