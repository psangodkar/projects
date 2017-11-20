
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from '../user/dashboard/dashboard.component';
import { UserDetailComponent } from './../user/user-detail/user-detail.component';
import { UserListComponent } from './../user/user-list/user-list.component';

@NgModule({
    declarations: [
        DashboardComponent,
        UserListComponent,
        UserDetailComponent
    ],
    imports: [
        SharedModule,
        FormsModule
    ],
    exports: [DashboardComponent, UserListComponent, UserDetailComponent]
})

export class UserModule { }
