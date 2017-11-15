import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AuthService } from './core/auth.service';
import { HttpService } from '../app/http.service';
import { RouterOutlet } from '@angular/router';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        HttpService,
        AuthService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should have a router outlet', () => {
    fixture.debugElement.query(By.directive(RouterOutlet));
  });
});
