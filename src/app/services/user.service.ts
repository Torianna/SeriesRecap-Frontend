import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl + `/seriesRecap/users`;


  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    return this.http.post<User>(this.url, user).toPromise();
  }

  async getUsers() {
    return await this.http.get<any[]>(this.url).toPromise();
  }


}
