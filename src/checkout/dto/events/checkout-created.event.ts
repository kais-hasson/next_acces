export class CheckoutCreatedEvent{
    constructor(public readonly checkout_cart_count:number){
        checkout_cart_count=+1;
    }
}