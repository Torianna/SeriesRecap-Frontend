import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `http://localhost:8080/seriesRecap/users`;


  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    return this.http.post<User>(this.url, user).toPromise();
  }

  async getUsers() {
    return await this.http.get<any[]>(this.url).toPromise();
  }


}
