import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Series } from '../models/series';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `http://localhost:8080/seriesRecap/user`;


  constructor(private http: HttpClient) {
  }



  // async getSeries() {
  //
  //   return await this.http.get<any[]>(this.series).toPromise();
  // }
  //
  // addSeries(series: Series) {
  //   return this.http.post<Series>(this.url, series).toPromise();
  // }
  //
  // deleteSeriesById(id: number) {
  //   return this.http.delete(`${ this.url }/${ id }`).toPromise();
  // }
}
