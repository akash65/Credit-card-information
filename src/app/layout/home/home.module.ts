import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// import { CardDetailsEffects } from '@store/effects/paymentDetailsEffects';
// import { environment } from '@environments/environment';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { cardInfoReducer } from '@store/reducers/paymentDetailsReducer';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    // StoreModule.forRoot({ cardInfo: cardInfoReducer }),
    // EffectsModule.forRoot([CardDetailsEffects]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: environment.production
    // }),
    HomeRoutingModule
  ]
})
export class HomeModule { }
