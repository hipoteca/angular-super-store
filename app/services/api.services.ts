import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/topromise';
import {Product} from '../commons/product';


@Injectable()
export class ApiService{
    constructor(private http : Http){

    }
    getProducts(){
        let url='app/data/info.json';
        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(this.error);
    }
    
    getProduct(id:number){
        return this.getProducts()
        .then( products => products.find((product:Product) => product.id=id) )
    }

    error(error:any){
        return Promise.reject(error.message || error);
    }
}

