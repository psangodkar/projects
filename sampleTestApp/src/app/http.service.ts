import { Http } from '@angular/http';

export class HttpService {

    doGet (url: string) {
        return true;
    }

    doPost (url: string, arg: any) {
        return {user: 'Prasad'};
    }

}
