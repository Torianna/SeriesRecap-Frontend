import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  isEnded = false;

  constructor() {
  }

  ngOnInit() {
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${ $event.oldValue },
      New Value: ${ $event.newValue },
      Checked Color: ${ $event.starRating.checkedcolor },
      Unchecked Color: ${ $event.starRating.uncheckedcolor }`);
  }

  unblockOption() {
    this.isEnded = true;
  }

  blockOption() {
    this.isEnded = false;
  }
}
