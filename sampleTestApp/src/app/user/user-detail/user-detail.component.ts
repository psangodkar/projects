import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  constructor() { }

  ngOnInit() {
  }

}
