import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { addCardDetails, getCardInfo } from '@store/actions/paymentDetailsAction';
// import { selectedCardDetails, selectedErrorInfo } from '@store/reducers/paymentDetailsReducer';
import { Observable } from 'rxjs';
import { ToasterService } from 'src/app/services/toaster.service';
import { PaymentInfo } from './model/payment-info.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  public paymentDetails: PaymentInfo;
  paymentForm: FormGroup;
  isSubmitBtn = false;

  cardDetails: Observable<any>;
  // errorMessage: Observable<any>;

  constructor(private fb: FormBuilder,
    private store: Store<{ cardInfo: { items: PaymentInfo[] } }>,
    private toasterService: ToasterService) {
    this.paymentDetails = {
      creditCardNo: '',
      cardHolder: '',
      expirationDate: new Date(),
      securityCode: '',
      amount: 0
    }
    this.paymentForm = new FormGroup({});
    this.store.dispatch(getCardInfo());
    this.cardDetails = this.store.select('cardInfo');
    // console.log(this.cardDetails)
    // this.cardDetails = this.store.pipe(select(selectedCardDetails));
    // this.errorMessage = this.store.select('errorInfo');


  }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      creditCardNo: new FormControl('', Validators.compose([Validators.required])),
      cardHolder: new FormControl('', Validators.compose([Validators.required])),
      expirationDate: new FormControl('', Validators.compose([Validators.required])),
      securityCode: new FormControl('', Validators.compose([Validators.minLength(3), Validators.maxLength(3)])),
      amount: new FormControl('', Validators.compose([Validators.required, Validators.min(1)]))
    })
  }

  get paymentFormCtrl() {
    return this.paymentForm.controls;
  }

  onResetForm(): void {
    this.paymentForm.reset()
    this.isSubmitBtn = false;
  }
  onSubmit(): void {
    // console.log('submit');
    // console.warn(this.paymentForm.value);
    this.isSubmitBtn = true;
    if (this.paymentForm.valid) {
      this.store.dispatch(addCardDetails({ cardInfo: this.paymentForm.value }));
      this.paymentForm.reset();
      this.isSubmitBtn = false;
      this.toasterService.toastSuccess('Card added successfully', 14000);
    }
  }

}
