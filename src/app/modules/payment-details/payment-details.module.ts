import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentDetailsRoutingModule } from './payment-details-routing.module';
import { PaymentDetailsComponent } from './payment-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IntegerOnlyDirective } from '@shared/directives/integer-only.directive';


@NgModule({
  declarations: [PaymentDetailsComponent, IntegerOnlyDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaymentDetailsRoutingModule
  ]
})
export class PaymentDetailsModule { }
