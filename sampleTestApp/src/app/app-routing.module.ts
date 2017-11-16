import { BarChartDemoComponent } from './reports/bar-chart-demo/bar-chart-demo.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

import { UserListComponent } from './user/user-list/user-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { AboutComponent } from './core/about/about.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {  path: 'dashboard', component: DashboardComponent},
    { path: 'about', component: AboutComponent },
    { path: 'list', component: UserListComponent },
    { path: 'edit', component: UserDetailComponent },
    { path: 'reports', component: BarChartDemoComponent }
    


];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
