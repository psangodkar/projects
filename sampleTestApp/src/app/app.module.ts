import { BarChartDemoComponent } from './reports/bar-chart-demo/bar-chart-demo.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/primeng';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './user/dashboard/dashboard.component';



import { DataGridModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BarChartDemoComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ChartModule,
    DataGridModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
