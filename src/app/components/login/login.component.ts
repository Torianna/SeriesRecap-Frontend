import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Series } from '../../models/series';

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isUserPresent: boolean = true;
  user: User = {
    id: 0,
    userName: '',
    password: '',
    series: []
  };

  tempArrayofUser: Array<User>;
  constructor(private service: UserService,  private router: Router ) {
    sessionStorage.setItem('login', 'false');
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

  async tryLogin() {
    this.tempArrayofUser = await this.service.getUsers();
    const foundName = this.tempArrayofUser.find(t => t.userName === this.user.userName);
    const foundPassword = this.tempArrayofUser.find(t => t.password === this.user.password);
    if (foundName && foundPassword) {
      sessionStorage.setItem('login', 'true');
      localStorage.setItem('user', JSON.stringify(this.user));
      localStorage.setItem('userName', JSON.stringify(this.user.userName));
      await this.router.navigate(['/main']);
    } else {
      this.isUserPresent = false;
    }
  }


}
