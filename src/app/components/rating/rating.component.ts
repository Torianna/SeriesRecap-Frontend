import { Component, Input, OnInit } from '@angular/core';
import { Series } from '../../models/series';
import { StarRatingComponent } from 'ng-starrating';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  isEnded = false;

  @Input() public series2: Series;

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

  onBudget($event: { newValue: number; starRating: StarRatingComponent }) {
    this.series2.rate.budget = $event.newValue;
  }

  onEffects($event: { newValue: number; starRating: StarRatingComponent }) {

    this.series2.rate.effects = $event.newValue;
  }

  onPlot($event: { newValue: number; starRating: StarRatingComponent }) {
    this.series2.rate.plot = $event.newValue;
  }

  onEnding($event: { newValue: number; starRating: StarRatingComponent }) {
    this.series2.rate.ending = $event.newValue;

  }
}
