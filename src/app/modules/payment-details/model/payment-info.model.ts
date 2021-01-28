export interface PaymentInfo {
    creditCardNo: string,
    cardHolder: string,
    expirationDate: Date,
    securityCode: string,
    amount: number
}