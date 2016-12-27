import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {
    private searchableString: string;

    constructor(private http: Http, private authenticationService: AuthenticationService) {}

    public search() {
        return http.get('@search?SearchableText=${this.searchableString}');
    }


}
