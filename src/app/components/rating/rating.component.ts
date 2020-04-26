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


  @Input() public series2: Series = new Series();


  constructor() {
  }

  ngOnInit() {

  }


  unblockOption() {
    this.isEnded = true;
  }

  onBudget($event: { newValue: number; starRating: StarRatingComponent }) {
    this.series2.rate.budget = $event.newValue;
    this.series2.rate.totalScore += $event.newValue;

  }

  onEffects($event: { newValue: number; starRating: StarRatingComponent }) {

    this.series2.rate.effects = $event.newValue;
    this.series2.rate.totalScore += $event.newValue;
  }

  onPlot($event: { newValue: number; starRating: StarRatingComponent }) {
    this.series2.rate.plot = $event.newValue;
    this.series2.rate.totalScore += $event.newValue;
  }

  onEnding($event: { newValue: number; starRating: StarRatingComponent }) {
    this.series2.rate.ending = $event.newValue;
    this.series2.rate.totalScore += $event.newValue;

  }
}
