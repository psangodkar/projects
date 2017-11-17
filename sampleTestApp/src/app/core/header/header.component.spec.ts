import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header.component';

import { HttpService } from '../../http.service';
import { AuthService } from '../auth.service';
import { UserService } from '../../user/user.service';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule
      ],
      declarations: [ HeaderComponent ],
      providers: [
        HttpService,
        AuthService,
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should have a logout button when the user signs in', () => {
    spyOn(component, 'isAuthenticated').and.returnValue(true);

    fixture.detectChanges();

    const de = fixture.debugElement.queryAll(By.css('.btn'));
    const el: HTMLElement = de[3].nativeElement;
    expect(el.innerText).toBe('Logout');
  });

  it('should NOT have a logout button when the user is not signed in', () => {
    spyOn(component, 'isAuthenticated').and.returnValue(false);

    fixture.detectChanges();

    const de = fixture.debugElement.queryAll(By.css('.btn'));
    const el = de[4];
    expect(el).toBe(undefined);
  });
});
