import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  localStorage: Storage = localStorage;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onLogIn($event: Event) {
    this.dialog.open(LoginComponent, {
      width: '250px'
    });
  }

  onLogOut($event: Event) {
    localStorage.removeItem('username');
  }

  // onSeriesList($event: Event) {
  //   this.open;
  //
  // }
}
