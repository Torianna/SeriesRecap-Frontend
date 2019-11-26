import { Component, OnInit } from '@angular/core';
import { AddSeriesComponent } from '../add-series/add-series.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
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
  displayedColumns: string[] = ['id', 'name'];

  constructor(public dialog: MatDialog, private seriesService: SeriesService) {
  }

  ngOnInit() {
    this.getAllSeries();
  }

  openAddSeries(): void {
    this.dialog.open(AddSeriesComponent, {});
  }

  async getAllSeries() {
    this.dataSource.data = await this.seriesService.getAllSeries();
  }

}
