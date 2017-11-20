import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SigninComponent } from './signin.component';
import { AuthService } from '../../auth.service';
import { HttpService } from '../../../http.service';


describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        HttpService,
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have mandatory email field', () => {
    const de = fixture.debugElement.queryAll(By.css('input'));
    const el = de[0];
    const a = el.attributes;
    expect(a['required']).toBe('');
  });

  it('should have mandatory password field', () => {
    const de = fixture.debugElement.queryAll(By.css('input'));
    const el = de[1];
    const a = el.attributes;
    expect(a['required']).toBe('');
  });
});
