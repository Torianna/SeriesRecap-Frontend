import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AddSeriesComponent } from '../add-series/add-series.component';
import { MatDialog, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { SeriesService } from '../../services/series.service';
import { Series } from '../../models/series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {

  series: Series[] = [];

  dataSource = new MatTableDataSource(this.series);

  displayedColumns: string[] = ['id', 'photo', 'name', 'score', 'totalScore', 'actions'];

  constructor(public dialog: MatDialog, private seriesService: SeriesService) {
  }


  ngOnInit() {
     this.getAllSeries();
  }


  async getAllSeries() {
    const userName = JSON.parse(localStorage.getItem('userName'));
    this.dataSource.data = await this.seriesService.getAllSeries(userName);
  }

  async delete(series: Series) {

    await this.seriesService.deleteSeriesById(series.id);
    this.getAllSeries();
  }

}
