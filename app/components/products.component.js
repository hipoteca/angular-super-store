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
//--services
var api_services_1 = require('../services/api.services');
var ProductsComponent = (function () {
    function ProductsComponent(apiService) {
        this.apiService = apiService;
        this.title = "All Products";
        console.debug('ProductsComponent::constructor()');
    }
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        console.debug('ProductsComponent::getProducts()');
        this.apiService.getProducts().then(function (products) { return _this.products = products; });
        console.info(this.products);
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'products',
            template: "\n    <div class=\"section\">\n        <div class=\"row\">\n            <div class=\"col m12\">\n                <h2 class=\"red-text text-lighten-3\" >{{title}}</h2>\n            </div> \n        </div>\n    </div>\n   <div class=\"section\">\n    <div class=\"row\">\n        <div class=\"col m9\">\n            \n            <div class=\"row\">\n                <productBox [product]=\"product_info\" *ngFor=\"let product_info of products\"> </productBox>\n            </div>\n        </div>\n        <div class=\"col m3\">\n            <cartDetail></cartDetail>\n        </div>\n    </div>\n    </div>\n    ",
            providers: [api_services_1.ApiService]
        }), 
        __metadata('design:paramtypes', [api_services_1.ApiService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map