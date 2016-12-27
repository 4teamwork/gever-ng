import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs, RequestMethod, RequestOptions, Request } from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {
    private urlRoot: string;

    constructor(private http: Http, private authenticationService: AuthenticationService) {
        this.urlRoot = 'http://localhost:8080/fd/';
    }

    private _createAuthHeaders(): Headers {
        let headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        if (this.authenticationService.token) {
            headers.set('Authorization', 'Bearer ' + this.authenticationService.token);
        }

        return headers;
    }

    public get(url: string, options?: RequestOptionsArgs) {
        return this._request(RequestMethod.Get, url, null, options);
    }

    public post(url: string, body: string, options?: RequestOptionsArgs) {
        return this._request(RequestMethod.Post, url, body, options);
    }

    public put(url: string, body: string, options?: RequestOptionsArgs) {
        return this._request(RequestMethod.Put, url, body, options);
    }

    public delete(url: string, options?: RequestOptionsArgs) {
        return this._request(RequestMethod.Delete, url, null, options);
    }

    private _request(method: RequestMethod, relativeUrl: string, body?: string, options?: RequestOptionsArgs): Observable<any> {
        let url = this.urlRoot + relativeUrl;
        let requestOptions = new RequestOptions(Object.assign({
            method: method,
            url: url,
            body: body,
            headers: this._createAuthHeaders(),
            withCredentials: true
        }, options));
        return this.http.request(new Request(requestOptions));
    }
}
