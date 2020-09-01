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
    console.log("3");
    this.getAllSeries();
  }

  async getAllSeries() {
    const userName = JSON.parse(localStorage.getItem('userName'));
    this.series = await this.seriesService.getAllSeries(userName);
    this.presentSeries = true;
    this.alignSeriesAccordingToCarousel();
  }
}



