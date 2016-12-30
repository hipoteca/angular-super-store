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
var ProductBoxComponent = (function () {
    function ProductBoxComponent(cartService, router) {
        this.cartService = cartService;
        this.router = router;
        console.debug('ProductBoxComponent::constructor()');
    }
    ProductBoxComponent.prototype.add = function (product) {
        console.debug('ProductBoxComponent::add(Product)');
        this.cartService.addToCart(product);
    };
    ProductBoxComponent.prototype.goToDetails = function (product) {
        var link = ['/product', product.id];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProductBoxComponent.prototype, "product", void 0);
    ProductBoxComponent = __decorate([
        core_1.Component({
            selector: 'productBox',
            template: "\n    <div class=\"col s12 m3\">   \n        <div class=\"card sticky-action\">\n            <div class=\"card-image waves-effect waves-block waves-light\">\n                <img class=\"activator responsive-img\" [src]=\"product.image\">\n            </div>\n            <div class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4\">{{product.name}}<i class=\"material-icons right\">more_vert</i></span>\n                \n            </div>\n            <div class=\"card-action\">\n                <button class=\"btn waves-effect waves-light\" (click)=\"add(product)\" >Add </button>\n                <button class=\"btn waves-effect waves-light\" (click)=\"goToDetails(product)\" >Detail </button>\n\n              \n            </div>\n            <div class=\"card-reveal\">\n                <span class=\"card-title grey-text text-darken-4\">{{product.name}}<i class=\"material-icons right\">close</i></span>\n                <p>{{product.description}}</p>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, router_1.Router])
    ], ProductBoxComponent);
    return ProductBoxComponent;
}());
exports.ProductBoxComponent = ProductBoxComponent;
//# sourceMappingURL=productbox.component.js.map