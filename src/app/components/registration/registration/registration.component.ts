import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // // Minimum six characters, at least one letter and one number:
  patternNormal: any = '^(?=.*[A-Za-z])(?=.*\d).{6,}$';


  // user: User = {
  //   notificationRangeInMeters: 0,
  //   x: 0,
  //   y: 0,
  //   id: undefined,
  //   name: '',
  //   surname: '',
  //   cellPhoneNumber: '',
  //   email: '',
  //   photo: '',
  //   password: ''
  // }

  fPassword = new FormControl();
  // password: string
  errorMgs: string;
  selectedPattern: string;
  hide = true;

  constructor(private service: UserService, private dialogRef: MatDialogRef<RegistrationComponent>) {
  }

  ngOnInit() {

    // nie dziala nie wiem o co chodzi  :<<<<<<<<<<<<<<<<<<<<<<<
    this.selectedPattern = this.patternNormal; // will change based on user preference

    if (this.selectedPattern === this.patternNormal) {
      this.errorMgs = 'Minimum six characters, at least one letter and one number';
    }
  }


  // async addUser() {
  //   console.log(this.user)
  //   this.service.addUser(this.user)
  //     .then(() => {
  //       this.dialogRef.close()
  //     })
  //     .catch(err => {
  //       alert('Something went wrong')
  //       console.error(err)
  //     })
  // }
}
