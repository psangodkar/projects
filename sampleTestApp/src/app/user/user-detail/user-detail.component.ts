import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @ViewChild('f') editUserForm: NgForm;

  user = { id: 0, fname: 'Mohan', lname: 'Lamba', desig: 'Software Eng', url: 'img_avatar_1.png' };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) {

    this.user.id = parseInt(this.route.snapshot.params.id, 10);
    this.user.fname = this.route.snapshot.params.fname;
    this.user.lname = this.route.snapshot.params.lname;
    this.user.url = this.route.snapshot.params.url;
    this.user.desig = this.route.snapshot.params.desig;
  }

  ngOnInit() {
  }

  update(f: NgForm) {

    this.user = { id: this.user.id, fname: f.value.fname, lname: f.value.lname, desig: f.value.desig, url: this.user.url };

    console.log(this.user.lname);

    this.userService.updateUsers(this.user);

    this.router.navigate(['/list']);
  }

  goBack() {
    this.location.back();
  }
}
