import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HttpService } from '../http.service';
import { AuthService } from '../core/auth.service';

@NgModule({
    declarations: [
        HeaderComponent,
        SigninComponent,
        HomeComponent
    ],
    imports: [
        AppRoutingModule,
        SharedModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        SigninComponent
    ],
    providers: [AuthService, HttpService]
})

export class CoreModule {}
