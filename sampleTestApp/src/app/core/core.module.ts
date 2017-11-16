
import { UserService } from './../user/user.service';

import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HttpService } from '../http.service';
import { AuthService } from '../core/auth.service';
import { AboutComponent } from './about/about.component';

import { UserDetailComponent } from './../user/user-detail/user-detail.component';
import { UserListComponent } from './../user/user-list/user-list.component';
import { DataListModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        HeaderComponent,
        SigninComponent,
        HomeComponent,
        AboutComponent,
        UserListComponent,
        UserDetailComponent
    ],
    imports: [
        AppRoutingModule,
        SharedModule,
        DataListModule,
        FormsModule,
        HttpClientModule
        
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        SigninComponent
    ],
    providers: [AuthService, HttpService, UserService]
})

export class CoreModule { }
