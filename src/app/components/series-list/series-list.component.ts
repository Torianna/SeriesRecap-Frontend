import { Component, OnInit, ViewChild } from '@angular/core';
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



  displayedColumns: string[] = ['id', 'name', 'totalScore', 'actions'];

  constructor(public dialog: MatDialog, private seriesService: SeriesService) {
  }


  ngOnInit() {
     this.getAllSeries();
  }
  //
  openAddSeries(): void {
    this.dialog.open(AddSeriesComponent, {}).afterClosed().subscribe(result => {
       this.getAllSeries();
    });


  }

  async getAllSeries() {
    this.dataSource.data = await this.seriesService.getAllSeries();
  }

  async delete(series: Series) {

    await this.seriesService.deleteSeriesById(series.id);
    this.getAllSeries();
  }

  refresh() {
    return this.getAllSeries();
  }
}
