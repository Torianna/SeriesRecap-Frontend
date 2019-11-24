import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Series } from '../models/series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private url = `localhost:8080/seriesRecap/series`;

  constructor(private http: HttpClient) {
  }


  async getAllSeries() {
    return await this.http.get<any[]>(this.url).toPromise();
  }

  addUser(series: Series) {
    return this.http.post<Series>(this.url, series).toPromise();
  }
}
