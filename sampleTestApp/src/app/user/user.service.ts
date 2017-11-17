import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class UserService {

    userAction = new Subject();
    items = [];

    constructor(private http: HttpClient) {
        this.http.get('/assets/data.1.json').subscribe(data => {
            this.items = data['data'];
        });
     }

    getUsers() {
        return this.items;
    }

    updateUsers(item) {
        this.items[item.id] = item;

        console.log('List: ' + this.items);
    }
}
