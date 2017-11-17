import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { AuthService } from '../auth.service';
import { HttpService } from '../../http.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        HttpService,
        AuthService
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
    const el: HTMLElement = de[4].nativeElement;
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
