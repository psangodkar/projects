
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AboutComponent } from './about/about.component';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HttpService } from '../http.service';
import { AuthService } from '../core/auth.service';
import { UserService } from './../user/user.service';


@NgModule({
    declarations: [
        HeaderComponent,
        SigninComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        AppRoutingModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        SharedModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        SigninComponent,
        FormsModule
    ],
    providers: [AuthService, HttpService, UserService]
})

export class CoreModule { }
