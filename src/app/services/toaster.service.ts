import { Injectable } from '@angular/core';
import * as $ from 'jquery';

// declare var $: any;

@Injectable({
    providedIn: 'root',
})
export class ToasterService {
    constructor() { }

    toastSuccess(msg: String, delay: number) {
        $('body').append(
            '<div class="toaster-container"><div class="toaster-success toaster" >' +
            msg +
            '</div></div>'
        );
        setTimeout(() => {
            $('.toaster-container').remove();
        }, delay);
    }

    toastFailure(msg: String, delay: number) {
        $('body').append(
            '<div class="toaster-container"><div class="toaster-failure toaster">' +
            msg +
            '</div></div>'
        );
        setTimeout(() => {
            $('.toaster-container').remove();
        }, delay);
    }

    toastWarning(msg: String, delay: number) {
        $('body').append(
            '<div class="toaster-container"><div class="toaster-warning toaster">' +
            msg +
            '</div></div>'
        );
        setTimeout(() => {
            $('.toaster-container').remove();
        }, delay);
    }
}
