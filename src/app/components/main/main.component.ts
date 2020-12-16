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
  index: number[] = [];

  constructor(private seriesService: SeriesService) {

  }

  getNumber(series) {
    return Math.round(series.totalScore * 10) / 10;
  }

  async addIndex() {
    for (let i = 0; i < this.series.length; i++) {
      this.index[i] = i + 1;
      console.log(this.index[i]);
    }
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
    const userName = JSON.parse(localStorage.getItem('userName'));
    this.series = await this.seriesService.getAllSeries(userName);
    console.log(this.series);
    if (this.series.length > 0) {
      this.presentSeries = true;
    }
    this.alignSeriesAccordingToCarousel();
    this.addIndex();
  }
}



