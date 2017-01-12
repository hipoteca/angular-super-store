"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//--core
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
//--components
var app_component_1 = require('./components/app.component');
var products_component_1 = require('./components/products.component');
var productbox_component_1 = require('./components/productbox.component');
var cart_component_1 = require('./components/cart.component');
var cart_detail_component_1 = require('./components/cart.detail.component');
//--components - root
var wellcome_component_1 = require('./components/wellcome.component');
var detail_component_1 = require('./components/detail.component');
var checkout_component_1 = require('./components/checkout.component');
var ROUTES = [
    { path: '', component: wellcome_component_1.WellcomeComponent },
    { path: 'products', component: products_component_1.ProductsComponent },
    { path: 'product/:id', component: detail_component_1.ProductDetailComponent },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(ROUTES)
            ],
            declarations: [
                app_component_1.AppComponent,
                products_component_1.ProductsComponent,
                productbox_component_1.ProductBoxComponent,
                cart_component_1.CartComponent,
                cart_detail_component_1.CarDetailComponent,
                wellcome_component_1.WellcomeComponent,
                detail_component_1.ProductDetailComponent,
                checkout_component_1.CheckoutComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
;
//# sourceMappingURL=app.module.js.map