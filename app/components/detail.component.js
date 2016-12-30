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
var common_1 = require('@angular/common');
var api_services_1 = require('../services/api.services');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, location, apiService) {
        this.route = route;
        this.location = location;
        this.apiService = apiService;
        console.debug('ProductDetailComponent::constructor');
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.debug('ProductDetailComponent::ngOnInit');
        this.route.params.forEach(function (params) {
            console.info(params);
            var id = +params['id'];
            //let id = 2;
            console.info(id);
            _this.apiService.getProduct(id)
                .then(function (product) {
                _this.product = product;
                console.info(_this.product);
            });
        });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'detail',
            template: "\n   \n\n   <div class=\"section\">\n    <div class=\"row\">\n        <div class=\"col m9\">\n            <div *ngIf=\"product\" class=\"col s12 m7\">\n                <h2 class=\"header\">{{product.name}}</h2>\n                <div class=\"card horizontal\">\n                    <div class=\"card-image\">\n                        <img [src]=\"product.image\">\n                    </div>\n                    <div class=\"card-stacked\">\n                        <div class=\"card-content\">\n                            <p>{{product.description }}</p>\n                        </div>\n                        <div class=\"card-action\">\n                            <a href=\"#\">This is a link</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col m3\">\n            <cartDetail></cartDetail>\n        </div>\n    </div>\n    </div>\n\n  \n\n\n    \n    ", providers: [api_services_1.ApiService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location, api_services_1.ApiService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=detail.component.js.map