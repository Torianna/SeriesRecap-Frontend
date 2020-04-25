import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-series',
  templateUrl: './add-series.component.html',
  styleUrls: ['./add-series.component.scss']
})
export class AddSeriesComponent implements OnInit {
  photo: string;
  isUrl = false;
  p: number = 1;


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  series: any;
  searchRes: any;
  searchStr: any;


  constructor(private service: SeriesService,
              private dialogRef: MatDialogRef<AddSeriesComponent>,
              private formBuilder: FormBuilder) {
    this.series = [];
  }

  // calculateAvarage() {
  //   console.log(this.series.totalScore);
  //   if (this.series.rate.ending === 0) {
  //     this.series.totalScore = this.series.rate.totalScore / 3;
  //   } else if (this.series.rate.ending !== 0) {
  //     this.series.totalScore = this.series.rate.totalScore / 4;
  //   }
  //   console.log(this.series.totalScore);
  // }


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

  // async getSeries() {
  //      this.series = await this.service.getSeries();
  //      console.log(this.series);
  //
  // }

  // async addSeries() {
  //   console.log(this.series);
  //   this.service.addSeries(this.series)
  //     .then(() => {
  //       this.dialogRef.close();
  //     })
  //     .catch(err => {
  //       alert('Something went wrong');
  //       console.error(err);
  //     });
  // }

}
