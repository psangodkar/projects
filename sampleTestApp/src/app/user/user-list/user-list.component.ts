
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserService } from './../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class UserListComponent implements OnInit {

  doEdit = false;
  items = [];
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('Yes');
    this.items = this.userService.getUsers();

    this.userService.userAction.subscribe( (doEdit: boolean ) => {
      this.doEdit = doEdit;
    });
  }

  editDetails(item) {
    this.router.navigate(['/edit', item]);
  }
}

