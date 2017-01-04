//--core
import {Component} from '@angular/core';

//--service
import {CartService} from '../services/cart.service'



@Component({
    selector:'my-app',
    template:`
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Super Store</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a  routerLink="" >Inicio</a></li>
                <li><a   routerLink="products" >Cursos</a></li>
                <li><a href="collapsible.html"> <cart></cart>    </a></li>
            </ul>
        </div>
    </nav>
    <section>
    <div class="row">
        
        <router-outlet></router-outlet>
    </div>
        
    </section>
    `
    ,providers:[CartService]
})


export class AppComponent{
    constructor(){
        console.debug('AppComponent::constructor');
    }
}
