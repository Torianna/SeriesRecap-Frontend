import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Series } from '../models/series';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})


export class SeriesService {
  searchStr: string;

  private series = 'https://www.episodate.com/api/search?q=';
  private url = `http://localhost:8080/seriesRecap/series`;
  private details = 'https://www.episodate.com/api/show-details?q=';


  constructor(private http: HttpClient) {
  }


  searchSeries(searchStr: string): Promise<any> {
    return this.http.get(this.series + searchStr)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }

  getSeriesById(id: number): Promise<any> {
    return this.http.get(this.details + id)
      .toPromise()
      .then(this.handleData)
      .catch(this.handleError);
  }


  private handleData(res: any) {
    const body = res;
    console.log(body); // for development purposes only
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for development purposes only
    return Promise.reject(error.message || error);
  }

  async getAllSeries(userId: number) {
    return await this.http.get<any[]>(this.url).toPromise();
  }

  async getSeries() {

    return await this.http.get<any[]>(this.series).toPromise();
  }

  addSeries(series: Series) {
    return this.http.post<Series>(this.url, series).toPromise();
  }

  deleteSeriesById(id: number) {
    return this.http.delete(`${ this.url }/${ id }`).toPromise();
  }
}
