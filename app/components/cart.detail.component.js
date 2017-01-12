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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var cart_service_1 = require('../services/cart.service');
var CarDetailComponent = (function () {
    function CarDetailComponent(cartService, router) {
        this.cartService = cartService;
        this.router = router;
        console.debug('CarDetailComponent::constructor');
        console.info(cartService);
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        this.products = this.cartService.getProducts();
        this.detail = this.cartService.getDetail();
    };
    CarDetailComponent.prototype.deleteItem = function (key) {
        console.debug('CarDetailComponent::deleteItem()');
        console.info(key);
        this.cartService.deleteItem(key);
    };
    CarDetailComponent.prototype.checkout = function (key) {
        console.info('CarDetailComponent::ckeckout');
        this.router.navigate(['/checkout']);
    };
    CarDetailComponent.prototype.keys = function () {
        return Object.keys(this.products);
    };
    CarDetailComponent = __decorate([
        core_1.Component({
            selector: 'cartDetail',
            template: "\n    <div class=\"row\" *ngIf=\"detail.total>0\">\n    <div class=\"col s12 m12\">\n    <div class=\"card \">\n        <div class=\"card-content \">\n            <span class=\"card-title\">My Cart</span>\n            \n\n            \n                \n            \n            <table class=\"bordered\" >\n                <thead>\n                    <tr>\n                        <th data-field=\"id\">Quantity</th>\n                        <th data-field=\"name\">Name</th>\n                        <th data-field=\"price\">Price</th>\n                        <th data-field=\"price\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let key of keys()\">\n                        <td>{{products[key].quantity}}</td>\n                        <td>{{products[key].name}}</td>\n                        \n                        <td>{{products[key].price | currency:'USD':true:'4.2-2' }}</td>\n                        <td><a><i href=\"#\" (click)=\"deleteItem(key)\" class=\"material-icons left\">delete</i> </a></td>\n                    </tr>\n                    \n                </tbody>\n                <tfoot>\n                    <tr >\n                        <td></td>\n                        <td>{{detail.items}}</td>\n                        <td>{{detail.total  | currency:'USD':true:'4.2-2' }} </td>\n                    </tr>\n                    <tr>\n                        <td colspan=\"2\">&nbsp;</td>\n                        <td colspan=\"2\">\n                        <button class=\"btn waves-effect waves-light\" (click)=\"checkout(key)\" >Checkout\n                            <i class=\"material-icons right\">send</i>\n                        </button>\n                        </td>\n                    </tr>\n                </tfoot>\n            </table>\n              \n        </div>        \n    </div>\n    </div>\n    </div>\n\n\n    \n      \n    \n    "
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, router_1.Router])
    ], CarDetailComponent);
    return CarDetailComponent;
}());
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=cart.detail.component.js.map