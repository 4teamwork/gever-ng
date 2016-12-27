import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {
  public token: string;
  public currentUser: any;

  constructor(private http: Http) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.token = this.currentUser && this.currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:8080/fd/@login', JSON.stringify({
      login: username,
      password: password
    }), new RequestOptions({ headers: headers })).map((response: Response) => {
      let token = response.json() && response.json().token;
      if (token) {
        this.token = token;
        return sessionStorage.setItem('currentUser', JSON.stringify({
          username: username,
          token: token
        }));
      } else {
        return false;
      }
    });
  }

  logout(): void {
    this.token = undefined;
    sessionStorage.removeItem('currentUser');
  }

}
