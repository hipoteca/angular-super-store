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
var WellcomeComponent = (function () {
    function WellcomeComponent(elementRef) {
        console.debug('WellcomeComponent::constructor');
    }
    WellcomeComponent.prototype.ngOnInit = function () {
        console.info(jQuery('.slider'));
        jQuery('.slider').slider({
            full_width: false,
            interval: 5000,
            transition: 800,
        });
    };
    WellcomeComponent = __decorate([
        core_1.Component({
            selector: 'wellcome',
            template: "\n    <div class=\"slider\">\n    <ul class=\"slides\">\n      <li>\n        <img src=\"http://lorempixel.com/580/250/nature/1\"> <!-- random image -->\n        <div class=\"caption center-align\">\n          <h3>This is our big Tagline!</h3>\n          <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\n        </div>\n      </li>\n      <li>\n        <img src=\"http://lorempixel.com/580/250/nature/2\"> <!-- random image -->\n        <div class=\"caption left-align\">\n          <h3>Left Aligned Caption</h3>\n          <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\n        </div>\n      </li>\n      <li>\n        <img src=\"http://lorempixel.com/580/250/nature/3\"> <!-- random image -->\n        <div class=\"caption right-align\">\n          <h3>Right Aligned Caption</h3>\n          <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\n        </div>\n      </li>\n      <li>\n        <img src=\"http://lorempixel.com/580/250/nature/4\"> <!-- random image -->\n        <div class=\"caption center-align\">\n          <h3>This is our big Tagline!</h3>\n          <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\n        </div>\n      </li>\n    </ul>\n    </div>\n    <div class=\"divider\"></div>  \n\n      <div class=\"row\">\n        <div class=\"col s12 m4\">\n          <div class=\"card\">\n            <div class=\"card-image\">\n              <img src=\"images/sample-1.jpg\">\n              <span class=\"card-title\">Card Title</span>\n            </div>\n            <div class=\"card-content\">\n              <p>I am a very simple card. I am good at containing small bits of information.\n              I am convenient because I require little markup to use effectively.</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"#\">This is a link</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], WellcomeComponent);
    return WellcomeComponent;
}());
exports.WellcomeComponent = WellcomeComponent;
//# sourceMappingURL=wellcome.component.js.map