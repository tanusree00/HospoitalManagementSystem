import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  { path: 'web', loadChildren: () => import('./web/web.module').then(m => m.WebModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'page-not-found', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
