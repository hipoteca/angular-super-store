import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';

import {Product} from '../commons/product';
import {ApiService} from '../services/api.services';


@Component({
    selector:'detail',
    template:
    `
   

   <div class="section">
    <div class="row">
        <div class="col m9">
            <div *ngIf="product" class="col s12 m7">
                <h2 class="header">{{product.name}}</h2>
                <div class="card horizontal">
                    <div class="card-image">
                        <img [src]="product.image">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>{{product.description }}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col m3">
            <cartDetail></cartDetail>
        </div>
    </div>
    </div>

  


    
    `,providers:[ApiService]
})
export class ProductDetailComponent implements OnInit{
    product:Product;

    constructor(
        private route       : ActivatedRoute,
        private location    : Location,
        private apiService  : ApiService
    ){
        console.debug('ProductDetailComponent::constructor')

    }
    ngOnInit(){
        console.debug('ProductDetailComponent::ngOnInit')
        
        this.route.params.forEach((params: Params) => {
            console.info(params);
            let id = +params['id'];
            //let id = 2;
            console.info(id);
            this.apiService.getProduct(id)
        .then(product => {
            this.product=product
            console.info(this.product)
        });
        } )
    }
}

