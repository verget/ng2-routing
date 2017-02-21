"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var router_1 = require("@angular/router");
var app_routing_1 = require("./app.routing");
var not_found_component_1 = require("./not-found/not-found.component");
var about_user_component_1 = require("./about/about.user.component");
var user_service_1 = require("./shared/services/user.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            app_routing_1.appRouting
        ],
        declarations: [
            app_component_1.AppComponent,
            contact_component_1.ContactComponent,
            about_component_1.AboutComponent,
            home_component_1.HomeComponent,
            not_found_component_1.NotFoundComponent,
            about_user_component_1.AboutUserComponent
        ],
        providers: [
            user_service_1.UserService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map