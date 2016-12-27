import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: HttpService) {}

  public dossiers() {
    return this.http.get('@search?portal_type=opengever.dossier.businesscasedossier&responsible=lukas.graf').map((response: Response) => {
      return response.json();
    });
  }

}
