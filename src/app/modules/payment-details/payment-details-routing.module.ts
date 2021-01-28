import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details.component';

const payRoutes: Routes = [
  {
    path: '',
    component: PaymentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(payRoutes)],
  exports: [RouterModule]
})
export class PaymentDetailsRoutingModule { }
