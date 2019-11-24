import { Component, OnInit } from '@angular/core';
import { AddSeriesComponent } from '../add-series/add-series.component';
import { MatDialog } from '@angular/material';
import { SeriesService } from '../../services/series.service';
import { Series } from '../../models/series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {

  series: Series[] = [];

  constructor(public dialog: MatDialog, private seriesService: SeriesService) {
  }

  ngOnInit() {
    this.getAllSeries();
  }

  openAddSeries(): void {
    this.dialog.open(AddSeriesComponent, {});
  }

  async getAllSeries() {
    this.series = await this.seriesService.getAllSeries();
  }

}
