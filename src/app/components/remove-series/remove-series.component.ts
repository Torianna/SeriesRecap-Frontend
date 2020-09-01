import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { MatDialogRef, MatHorizontalStepper } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Series } from '../../models/series';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-series',
  templateUrl: './remove-series.component.html',
  styleUrls: ['./remove-series.component.scss']
})
export class RemoveSeriesComponent implements OnInit {


  photo: string;
  isUrl = false;
  p = 1;


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  series: any;
  searchRes: any;
  searchStr: any;



  constructor(private service: SeriesService,
              private user: UserService,
              private dialogRef: MatDialogRef<RemoveSeriesComponent>,
              private formBuilder: FormBuilder,
              private router: Router ) {
    this.series = [];
  }

  


  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  deleteSeriesById() {
    this.searchRes = this.service.deleteSeriesById(this.searchStr)
    .then(() => {
        this.dialogRef.close();
        this.router.navigate(['/main']);
      })
      .catch(err => {
        console.error(err);
      });
    
  }


  goForward(stepper: MatHorizontalStepper) {
    stepper.next();
  }
}
