import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { AddSeriesComponent } from '../add-series/add-series.component';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  localStorage: Storage = localStorage;
  data: any;
  signin: boolean;
  @Output() getAllSeries = new EventEmitter();

  constructor(public dialog: MatDialog, private seriesService: SeriesService) {
  }

  ngOnInit() {
    this.signin = JSON.parse(localStorage.getItem('login'));
    console.log(this.signin);
  }

  onLogIn($event: Event) {
    this.dialog.open(LoginComponent, {
      width: '250px'
    });
  }

  onLogOut($event: Event) {
    localStorage.removeItem('username');
  }

  openAddSeries(): void {
    this.dialog.open(AddSeriesComponent, {}).afterClosed().subscribe(result => {
      this.getAllSeries.emit();
    });
  }
}
