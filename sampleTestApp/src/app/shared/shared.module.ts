
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/primeng';

import { BarChartDemoComponent } from '../reports/bar-chart-demo/bar-chart-demo.component';

@NgModule({
    declarations: [
        BarChartDemoComponent
    ],
    imports: [
        CommonModule,
        ChartModule
    ],
    exports: [
        CommonModule,
        ChartModule,
        BarChartDemoComponent
    ]
})

export class SharedModule {}
