import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from './components/app.component';
import {ProductsComponent} from './components/products.component';
import {ProductBoxComponent} from './components/productbox.component';
import {CartComponent} from './components/cart.component';
import {CarDetailComponent} from './components/cart.detail.component'

import {WellcomeComponent} from './components/wellcome.component';
import {ProductDetailComponent} from './components/detail.component';
import {CheckoutComponent} from './components/checkout.component'

const ROUTES= [
    {path:''            ,component:WellcomeComponent    },
    {path:'products'    ,component:ProductsComponent    },
    {path:'product/:id' ,component:ProductDetailComponent},
    {path:'checkout'    ,component:CheckoutComponent    }
    ];

@NgModule({
    imports:[
        BrowserModule,
        HttpModule
        ,RouterModule.forRoot(ROUTES)
        ],
    declarations:[
         AppComponent
        ,ProductsComponent
        ,ProductBoxComponent
        ,CartComponent
        ,CarDetailComponent
        ,WellcomeComponent
        ,ProductDetailComponent
        ,CheckoutComponent

        ],
    bootstrap:[
        AppComponent
        ]
})
export class AppModule{};