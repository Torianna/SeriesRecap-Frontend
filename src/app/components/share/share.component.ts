import { Component, OnInit } from '@angular/core';
import { Series } from '../../models/series';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SeriesService } from '../../services/series.service';
import { ActivatedRoute } from '@angular/router';
import { ListOfSeries } from '../../models/list';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  sharedList: ListOfSeries;
  series: Series[] = [];
  dataSource = new MatTableDataSource(this.series);
  displayedColumns: string[] = ['id', 'photo', 'name', 'score', 'totalScore'];
  public id: string;

  constructor(public dialog: MatDialog, private seriesService: SeriesService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params.id;
      this.getSharedList(id);
    });
  }

  async getSharedList(id) {
    this.sharedList = await this.seriesService.getSharedList(id);
    this.dataSource.data = this.sharedList.seriesList;
    console.log(this.sharedList);
    console.log(this.series);
  }

    getNumber(series) {
    return Math.round(series.totalScore * 10) / 10;
  }

  async delete(series: Series) {
    await this.seriesService.deleteSeriesById(series.id);
  }
}
