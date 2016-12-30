import {Injectable} from '@angular/core';
import {Product} from '../commons/product';

@Injectable()
export class CartService{
    private products : any;
    private detail :any;
    constructor(){
        this.products ={};
        this.detail ={total:0,items:0}
    }
    getProducts(){
        return this.products
    }
    getDetail(){
        return this.detail
    }
    addToCart(product:Product){
        console.debug("CartService::addToCart()");
        console.info(product);

        if(!this.products[product.id]){
            console.debug('--> add into object')
            this.products[product.id]={
                quantity: 1,
                name    : product.name,
                price   : product.price
            }
        }else{
            this.products[product.id].quantity+=1;
        }
        this.detail.total+=product.price;
        this.detail.items+=1;
        
        console.info(this.products);

    }
     deleteItem(key:any){
         this.detail.total-=this.products[key].price*this.products[key].quantity;
        this.detail.items-=this.products[key].quantity;

         delete this.products[key];

     }
    
}

