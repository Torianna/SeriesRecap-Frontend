import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { MatDialogRef, MatHorizontalStepper } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Series } from '../../models/series';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-series',
  templateUrl: './add-series.component.html',
  styleUrls: ['./add-series.component.scss']
})
export class AddSeriesComponent implements OnInit {


  photo: string;
  isUrl = false;
  p = 1;


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  series: any;
  searchRes: any;
  searchStr: any;
  users: [];

  seriesObject: Series =
    {
      id: 0,
      name: '',
      description: '',
      year: '',
      photo: '',
      rate: {
        plot: 0,
        effects: 0,
        budget: 0,
        ending: 0,
        totalScore: 0
      },
      totalScore: 0,
      score: 0,
      user: null
    };


  constructor(private service: SeriesService,
              private user: UserService,
              private dialogRef: MatDialogRef<AddSeriesComponent>,
              private formBuilder: FormBuilder,
              private router: Router ) {
    this.series = [];
  }

  calculateAvarage() {
    if (this.seriesObject.rate.ending === 0) {
      this.seriesObject.totalScore = (this.seriesObject.rate.totalScore * 2) / 3;
    } else if (this.seriesObject.rate.ending !== 0) {
      this.seriesObject.totalScore = (this.seriesObject.rate.totalScore * 2) / 4;
    }
  }


  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  async searchSeries() {
    this.searchRes = await this.service.searchSeries(this.searchStr);
    this.series = [];
    for (const tv_show of this.searchRes.tv_shows) {
      this.series.push(tv_show);
    }
  }


  async addSeries() {
    this.seriesObject.user = new User();
    this.seriesObject.user.userName = JSON.parse(localStorage.getItem('userName'));
    console.log(this.seriesObject.user.userName);
    console.log(this.seriesObject);
    this.service.addSeries(this.seriesObject)
      .then(() => {
        this.dialogRef.close();
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  }


  async createObject(serie: any) {
    this.searchRes = await this.service.getSeriesById(serie.id);
    this.seriesObject.name = serie.name;
    this.seriesObject.description = serie.network;
    this.seriesObject.year = serie.start_date;
    this.seriesObject.photo = this.searchRes.tvShow.image_path;
    this.seriesObject.score = this.searchRes.tvShow.rating;
    this.seriesObject.user = JSON.parse(localStorage.getItem('user'));

  }

  goForward(stepper: MatHorizontalStepper) {
    stepper.next();
  }
}
