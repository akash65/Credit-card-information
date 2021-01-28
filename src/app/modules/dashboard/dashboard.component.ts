import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentInfo } from '@modules/payment-details/model/payment-info.model';
import { Store, select } from '@ngrx/store';
import { getCardInfo } from '@store/actions/paymentDetailsAction';
// import { selectedCardDetails } from '@store/reducers/paymentDetailsReducer';
import { Observable } from 'rxjs';
// import { CardDetailsService } from 'src/app/services/cardDetails.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cardDetails: Observable<any>;
  cardDetail: PaymentInfo[] = [];
  showPassword = true;

  constructor(private router: Router,
    private store: Store<{ cardInfo: Array<PaymentInfo[]> }>
  ) {
    // this.store.dispatch(getCardInfo());
    // this.store.select('cardInfo').subscribe((res: any) => {
    //   console.log(res);
    //   this.cardDetails = res;
    // });
    this.cardDetails = store.select(state => state.cardInfo);
    this.cardDetails.subscribe((res: any) => {
      this.cardDetail = res;
    })
    // this.store.pipe(select('selectedCardDetails')).subscribe((res: any) => {
    //   this.cardDetails = res;
    // console.log(this.cardDetails);

    // });
    // this.cardDetail = this.cardService.getCardInfo();
    // console.log(this.cardDetail);
  }

  ngOnInit(): void {
  }

  navigateTOPay(): void {
    this.router.navigate(['payment-details']);
  }

  onTogglePassword(): void {
    this.showPassword = !this.showPassword;
  }

}
