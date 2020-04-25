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


  constructor(private seriesService: SeriesService) {

  }

  ngOnInit() {
    this.getAllSeries();

  }

  async getAllSeries() {
    // this.series = await this.seriesService.getAllSeries();
    // console.log(this.series.length);
  }

}
