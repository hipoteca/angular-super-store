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
var api_services_1 = require('../services/api.services');
var WellcomeComponent = (function () {
    function WellcomeComponent(elementRef, apiService) {
        this.apiService = apiService;
        console.debug('WellcomeComponent::constructor');
    }
    WellcomeComponent.prototype.getSlides = function () {
        var _this = this;
        //--
        this.apiService.getSlides().then(function (slides) {
            _this.slides = slides;
            console.info('--->');
            jQuery('.slider').slider({
                full_width: false,
                interval: 5000,
                transition: 800,
            });
        });
    };
    WellcomeComponent.prototype.getCategiries = function () {
        var _this = this;
        this.apiService.getCategories()
            .then(function (categories) { return _this.categories = categories; });
    };
    WellcomeComponent.prototype.ngOnInit = function () {
        this.getSlides();
    };
    WellcomeComponent.prototype.ngAfterViewInit = function () {
        console.info('++++++++++++++++++++++++++++++++++++++++');
        jQuery('.slider').slider({
            full_width: false,
            interval: 5000,
            transition: 800,
        });
    };
    WellcomeComponent.prototype.ngAfterContentInit = function () {
        console.info('**********************************************************');
        jQuery('.slider');
        jQuery('.slider').slider({
            full_width: false,
            interval: 5000,
            transition: 800,
        });
    };
    WellcomeComponent = __decorate([
        core_1.Component({
            selector: 'wellcome',
            template: "\n    <div class=\"slider\">\n\n    <ul class=\"slides\">\n\n      <li *ngFor = \"let slide of slides\" >\n        <img [src]=\"slide.image\"> <!-- random image -->\n        <div class=\"caption left-align\">\n          <h3>{{slide.title}}</h3>\n          <h5 class=\"light grey-text text-lighten-3\">{{slide.subtitle}}</h5>\n        </div>\n      </li>\n    </ul>\n    </div>\n\n    <div class=\"divider\"></div>  \n\n      <div class=\"row\">\n\n        <div class=\"col s12 m4\">\n          <div class=\"card\">\n            <div class=\"card-image\">\n              <img src=\"./assets/images/categories/boats.jpg\">\n              <span class=\"card-title\">Card Title</span>\n            </div>\n            <div class=\"card-content\">\n              <p>I am a very simple card. I am good at containing small bits of information.\n              I am convenient because I require little markup to use effectively.</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"#\">More...</a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col s12 m4\">\n          <div class=\"card\">\n            <div class=\"card-image\">\n              <img src=\"./assets/images/categories/boats.jpg\">\n              <span class=\"card-title\">Card Title</span>\n            </div>\n            <div class=\"card-content\">\n              <p>I am a very simple card. I am good at containing small bits of information.\n              I am convenient because I require little markup to use effectively.</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"#\">More...</a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col s12 m4\">\n          <div class=\"card\">\n            <div class=\"card-image\">\n              <img src=\"./assets/images/categories/boats.jpg\">\n              <span class=\"card-title\">Card Title</span>\n            </div>\n            <div class=\"card-content\">\n              <p>I am a very simple card. I am good at containing small bits of information.\n              I am convenient because I require little markup to use effectively.</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"#\">More...</a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n{{slides | json}}\n\n    ",
            providers: [api_services_1.ApiService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, api_services_1.ApiService])
    ], WellcomeComponent);
    return WellcomeComponent;
}());
exports.WellcomeComponent = WellcomeComponent;
//# sourceMappingURL=wellcome.component.js.map