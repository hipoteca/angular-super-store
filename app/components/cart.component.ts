import {Component,OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
    selector:'cart',
    template:
    `
    <i class="material-icons left">shopping_cart</i> {{detail.items}} | {{detail.total | currency:'MXP':true:'4.2-2'}}
    `
})
export class CartComponent implements OnInit{
    products:any;
    detail:any;
    constructor(private cartService:CartService){
        console.debug('CartComponent::constructor');
    }
    ngOnInit(){
        this.products=this.cartService.getProducts();
        this.detail=this.cartService.getDetail();
    }
}