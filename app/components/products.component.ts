//--core
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'

//--interface
import {Product} from '../commons/product';

//--services
import {ApiService} from '../services/api.services';

@Component({
    selector:'products',
    template:
    `
    <div class="section">
        <div class="row">
            <div class="col m12">
                <h2 class="red-text text-lighten-3" >{{title}}</h2>
            </div> 
        </div>
    </div>
   <div class="section">
    <div class="row">
        <div class="col m9">
            
            <div class="row">
                <productBox [product]="product_info" *ngFor="let product_info of products"> </productBox>
            </div>
        </div>
        <div class="col m3">
            <cartDetail></cartDetail>
        </div>
    </div>
    </div>
    `,
    providers:[ApiService]
})
export class ProductsComponent implements OnInit{
    title:string ="All Products";    
    products:Product[];
    
    constructor(
        private apiService:ApiService,
        private router:Router
        ){
        console.debug('ProductsComponent::constructor()');
    }

    getProducts(){
        console.debug('ProductsComponent::getProducts()');
        this.apiService.getProducts().then( products => this.products=products);
        
        console.info(this.products)

    }
    ngOnInit(){
        this.getProducts();
    }
}