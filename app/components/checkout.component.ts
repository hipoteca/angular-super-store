//-- core
import {Component} from '@angular/core';

import {CartService} from '../services/cart.service'

@Component({
    selector:'checkout',
    template:
    `
    <cartDetail></cartDetail>
    `
})
export class CheckoutComponent{
    constructor(
        private cartService:CartService
    ){
        console.debug('CheckoutComponent::constructor()');
    }
}