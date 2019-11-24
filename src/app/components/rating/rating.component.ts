import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { Series } from '../../models/series';
import { Rates } from '../../models/rates';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  isEnded = false;
  series: Series = {
    name: '',
    year: '',
    description: '',
    photo: '',
    rate: {
      plot: 0,
      effects: 0,
      budget: 0,
      ending: 0
    }
  };

  constructor() {
  }

  ngOnInit() {
  }


  unblockOption() {
    this.isEnded = true;
  }

  blockOption() {
    this.isEnded = false;
  }
}
