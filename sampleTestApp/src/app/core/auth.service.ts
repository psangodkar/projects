import { Injectable } from '@angular/core';

import { HttpService } from '../http.service';

@Injectable()

export class AuthService {

    result = {'user': ''};
    authenticated = false;
    currentUser = '';

    constructor(private http: HttpService) {}

    login() {
        this.result = this.http.doPost('', {});
        if (this.result.user !== '') {
            this.authenticated = true;
            this.currentUser = this.result.user;
            return true;
        }
        return false;
    }

    logout() {
        this.authenticated = false;
        this.currentUser = '';
    }

    isAuthenticated() {
        return this.authenticated;
    }
}
