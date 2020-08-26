import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import * as uuid from 'uuid';
import { Router } from '@angular/router';

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = {
    id: 0,
    userName: '',
    password: '',
    series: []
  };

  constructor(private service: UserService, private router: Router ) {
  }

  userFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

  async addUser() {
    this.service.addUser(this.user).then(() => {
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/login']);
    })
      .catch(err => {
        alert('Something went wrong');
        console.error(err);
      });
  }
}
