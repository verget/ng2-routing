import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {RouterModule} from "@angular/router";
import {appRouting} from "./app.routing";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AboutUserComponent} from "./about/about.user.component";
import {UserService} from "./shared/services/user.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        ContactComponent,
        AboutComponent,
        HomeComponent,
        NotFoundComponent,
        AboutUserComponent
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}