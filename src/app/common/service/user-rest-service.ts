import { Injectable } from '@angular/core';
import { User } from '../data/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface UsersApiResponse {
  users: User[];
}

interface UserApiResponse {
  users: User[];
}

@Injectable({
  providedIn: 'root',
})
export class UserRestService {

  constructor(private _http: HttpClient){}
    baseUrl = "https://express-api-rest-production.up.railway.app/users-malik";

    getAllUsers() : Observable<UsersApiResponse> {
      return this._http.get<UsersApiResponse>(this.baseUrl);
    }


}
