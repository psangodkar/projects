import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { HttpService } from '../http.service';


@Injectable()
export class UserService {

    userAction = new Subject();
    items = [];

    constructor(private httpService: HttpService) {
        this.httpService.doGet('/assets/data.1.json').subscribe(data => {
            this.items = data['data'];
        });
     }

    getUsers() {
        return this.items;
    }

    updateUsers(item) {
        this.items[item.id] = item;
    }
}
