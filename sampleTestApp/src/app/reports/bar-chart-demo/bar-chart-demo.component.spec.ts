import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartModule } from 'primeng/primeng';

import { BarChartDemoComponent } from './bar-chart-demo.component';

describe('BarChartDemoComponent', () => {
  let component: BarChartDemoComponent;
  let fixture: ComponentFixture<BarChartDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ChartModule ],
      declarations: [ BarChartDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the bar chart component', () => {
    expect(component).toBeTruthy();
  });
});
