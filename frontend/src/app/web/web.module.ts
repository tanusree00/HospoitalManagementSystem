import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { WebHeaderComponent } from './web-header/web-header.component';
import { WebFooterComponent } from './web-footer/web-footer.component';
import { WebHomeComponent } from './web-home/web-home.component';
import { WebAboutComponent } from './web-about/web-about.component';
import { WebServiceComponent } from './web-service/web-service.component';


@NgModule({
  declarations: [
    WebComponent,
    WebHeaderComponent,
    WebFooterComponent,
    WebHomeComponent,
    WebAboutComponent,
    WebServiceComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
