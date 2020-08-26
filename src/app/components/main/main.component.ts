import { Component, OnInit } from '@angular/core';
import { Series } from '../../models/series';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  series: Series[] = [];
  presentSeries = false;
  seriesFormattedForCarousel: Series[][] = new Array();

  constructor(private seriesService: SeriesService) {

  }

  alignSeriesAccordingToCarousel() {
    let j = -1;
    for (let i = 0; i < this.series.length; i++) {
      if (i % 3 === 0) {
        j++;
        this.seriesFormattedForCarousel[j] = [];
        this.seriesFormattedForCarousel[j].push(this.series[i]);
      } else {
        this.seriesFormattedForCarousel[j].push(this.series[i]);
      }
    }
  }

  ngOnInit() {
    this.getAllSeries();
  }

  async getAllSeries() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.series = await this.seriesService.getAllSeries(user);

    console.log(this.series.length);
    this.presentSeries = true;
    this.alignSeriesAccordingToCarousel();
  }
}



