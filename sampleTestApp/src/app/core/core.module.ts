import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HttpService } from '../http.service';
import { AuthService } from '../core/auth.service';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SigninComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        SigninComponent,
        FormsModule
    ],
    providers: [AuthService, HttpService]
})

export class CoreModule {}
