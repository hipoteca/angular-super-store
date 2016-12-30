import {Component,OnInit} from '@angular/core';

import {CartService}  from '../services/cart.service'

@Component({
    selector:'cartDetail',
    template:
    `
    <div class="row" *ngIf="detail.total>0">
    <div class="col s12 m12">
    <div class="card ">
        <div class="card-content ">
            <span class="card-title">My Cart</span>
            <table class="bordered" >
                <thead>
                    <tr>
                        <th data-field="id">Quantity</th>
                        <th data-field="name">Name</th>
                        <th data-field="price">Price</th>
                        <th data-field="price"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let key of keys()">
                        <td>{{products[key].quantity}}</td>
                        <td>{{products[key].name}}</td>
                        
                        <td>{{products[key].price | currency:'USD':true:'4.2-2' }}</td>
                        <td><a><i href="#" (click)="deleteItem(key)" class="material-icons left">delete</i> </a></td>
                    </tr>
                    
                </tbody>
                <tfoot>
                    <tr >
                        <td></td>
                        <td>{{detail.items}}</td>
                        <td>{{detail.total  | currency:'USD':true:'4.2-2' }} </td>
                    </tr>
                </tfoot>
            </table>
              
        </div>        
    </div>
    </div>
    </div>


    
      
    
    `
})
export class CarDetailComponent implements OnInit{
    products:any;
    detail:any;
    constructor (private cartService:CartService){
        console.debug('CarDetailComponent::constructor');
        console.info(cartService)
    }

    ngOnInit(){
        this.products=this.cartService.getProducts();
        this.detail=this.cartService.getDetail();
    }

    deleteItem(key:any){
        console.debug('CarDetailComponent::deleteItem()')
        console.info(key);
        this.cartService.deleteItem(key);

    }
    keys(){
        return Object.keys(this.products)
    }

}

