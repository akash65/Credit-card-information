import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { HomeComponent } from './home.component';

const hroutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: async () => (await import('@modules/dashboard/dashboard.module')).DashboardModule
      },
      {
        path: 'payment-details',
        loadChildren: async () => (await import('@modules/payment-details/payment-details.module')).PaymentDetailsModule
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(hroutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
