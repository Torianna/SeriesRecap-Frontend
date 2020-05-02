import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

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
    password: ''
  };

  constructor(private service: UserService) {
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
    console.log(this.user);
    this.service.addUser(this.user);
  }
}
