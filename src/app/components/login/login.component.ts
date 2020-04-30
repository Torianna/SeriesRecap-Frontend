import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatDialog, MatDialogRef } from '@angular/material';

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
  @ViewChild('username', { static: false }) username: { nativeElement: HTMLInputElement }
  @ViewChild('password', { static: false }) password: { nativeElement: HTMLInputElement }

  constructor() { }
  userFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  // openRegisterDialog (): void {
  //   this.dialogRef.close()
  //   this.dialog.open(RegistrationPanelComponent, {
  //     width: '50vw'
  //   })
  // }
}
