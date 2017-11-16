import { UserService } from './../user.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

  items;
  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.http.get('/assets/data.json').subscribe(data => { this.items = data['data']; });
  }

}

