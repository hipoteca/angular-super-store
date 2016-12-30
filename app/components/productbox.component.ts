
import {Component,Input} from '@angular/core'
import {Router} from '@angular/router';


import {Product} from '../commons/product';
import {CartService} from '../services/cart.service'


@Component({
    selector:'productBox',
    template:
    `
    <div class="col s12 m4">   
        <div class="card sticky-action">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator responsive-img" [src]="product.image">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{product.name}}<i class="material-icons right">more_vert</i></span>
                
            </div>
            <div class="card-action">
                <button class="btn waves-effect waves-light" (click)="add(product)" >Add </button>
                <button class="btn waves-effect waves-light" (click)="goToDetails(product)" >Detail </button>              
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{product.name}}<i class="material-icons right">close</i></span>
                <p>{{product.description}}</p>
            </div>
        </div>
    </div>
    `
})
export class ProductBoxComponent{
    @Input()
    product:Product;

   constructor(
       private cartService: CartService,
       private router :Router
       ){
        console.debug('ProductBoxComponent::constructor()');
    }
    add(product:Product){
        console.debug('ProductBoxComponent::add(Product)');
      this.cartService.addToCart(product);
    }
    goToDetails(product:Product){
        let link =['/product',product.id];
        this.router.navigate(link);
    }
}