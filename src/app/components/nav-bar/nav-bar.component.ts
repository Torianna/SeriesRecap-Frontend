import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { AddSeriesComponent } from '../add-series/add-series.component';
import { SeriesService } from '../../services/series.service';
import { Router } from '@angular/router';

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

  constructor(public dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    this.signin = JSON.parse(sessionStorage.getItem('login'));
    console.log(this.signin);
  }

  onLogOut($event: Event) {
    this.signin = false;
    sessionStorage.removeItem('login');
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    this.router.navigate(['/poster']);
  }

  openAddSeries(): void {
    this.dialog.open(AddSeriesComponent, {}).afterClosed().subscribe(result => {
      this.getAllSeries.emit();
    });
  }
}
