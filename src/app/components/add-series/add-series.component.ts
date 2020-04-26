import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { MatDialogRef, MatHorizontalStepper } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Series } from '../../models/series';

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
      totalScore: 0

    };


  constructor(private service: SeriesService,
              private dialogRef: MatDialogRef<AddSeriesComponent>,
              private formBuilder: FormBuilder) {
    this.series = [];
  }

  calculateAvarage() {
    console.log(this.seriesObject.totalScore);
    if (this.seriesObject.rate.ending === 0) {
      this.seriesObject.totalScore = this.seriesObject.rate.totalScore / 3;
    } else if (this.seriesObject.rate.ending !== 0) {
      this.seriesObject.totalScore = this.seriesObject.rate.totalScore / 4;
    }
    console.log(this.seriesObject.totalScore);
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
    // this.service.searchSeries(this.searchStr).then(res => {
    //   this.searchRes = res.result;
    // });
    // console.log(this.searchRes);
    this.searchRes = await this.service.searchSeries(this.searchStr);


    for (const tv_show of this.searchRes.tv_shows) {
      console.log(tv_show);
      this.series.push(tv_show);
    }


  }

  async addSeries() {
    console.log(this.seriesObject);
    this.service.addSeries(this.seriesObject)
      .then(() => {
        this.dialogRef.close();
      })
      .catch(err => {
        alert('Something went wrong');
        console.error(err);
      });
  }


  createObject(serie: any) {
    console.log('create obejct + ' + serie);
    this.seriesObject.name = serie.name;
    this.seriesObject.description = serie.network;
    this.seriesObject.year = serie.start_date;
    this.seriesObject.photo = serie.image_thumbnail_path;
    console.log(JSON.stringify(this.seriesObject));

  }

  goForward(stepper: MatHorizontalStepper) {
    stepper.next();
  }
}
