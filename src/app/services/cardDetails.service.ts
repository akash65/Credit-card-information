import { Injectable } from '@angular/core';
import { PaymentInfo } from '@modules/payment-details/model/payment-info.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CardDetailsService {
    cardDetails = new BehaviorSubject<PaymentInfo[]>([]);
    constructor() { }

    setCardInfo(value: any) {
        this.cardDetails.next(value);
        // const itemsStored = localStorage.getItem('items');
        // let items = [];
        // if (itemsStored !== null) {
        //     items = JSON.parse(itemsStored);
        // }
        // const item: PaymentInfo = value;
        // items.push(item);
        // localStorage.setItem('items', JSON.stringify(items));
    }

    getCardInfo() {
        return this.cardDetails;
        // let items = localStorage.getItem('items');
        // if (items === null) {
        //     items = '';
        // }
        // return JSON.parse(items);
    }
}