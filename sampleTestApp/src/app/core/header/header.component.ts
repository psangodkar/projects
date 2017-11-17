import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterEvent } from '@angular/router';

import { AuthService } from '../auth.service';
import { UserService } from '../../user/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  curPath: String = '';
  doEdit = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService ) {

      this.router.events.subscribe(( val: RouterEvent ) => {
        this.curPath = val.url;

        if ( this.curPath !== '/list' && this.doEdit ) {
          this.userService.userAction.next(false);
        }
      });

    }


  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    // });
  }

  isInList() {
    if (this.isAuthenticated() && this.curPath === '/list') {
      return true;
    }
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  navToList() {
    this.doEdit = false;
    this.userService.userAction.next(false);
    this.router.navigate(['/list']);
  }

  editDetails() {
    this.doEdit = true;
    this.userService.userAction.next(true);
  }
}
