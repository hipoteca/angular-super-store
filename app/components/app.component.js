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
//--service
var cart_service_1 = require('../services/cart.service');
var AppComponent = (function () {
    function AppComponent() {
        console.debug('AppComponent::constructor');
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <nav>\n        <div class=\"nav-wrapper\">\n            <a href=\"#\" class=\"brand-logo\">Super Store</a>\n            <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n                <li><a  routerLink=\"\" >Inicio</a></li>\n                <li><a   routerLink=\"products\" >Cursos</a></li>\n                <li><a href=\"collapsible.html\"> <cart></cart>    </a></li>\n            </ul>\n        </div>\n    </nav>\n    <section>\n    <div class=\"row\">\n        \n        <router-outlet></router-outlet>\n    </div>\n        \n    </section>\n    ",
            providers: [cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map