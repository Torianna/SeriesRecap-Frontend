import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-series',
  templateUrl: './add-series.component.html',
  styleUrls: ['./add-series.component.scss']
})
export class AddSeriesComponent implements OnInit {
  photo: string;
  isUrl = false;


  constructor() {
  }

  ngOnInit() {

  }



  displayPhoto() {
    this.isUrl = true;
  }
}
