import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // constructor(private _Auth: Auth) { }

  // ngOnInit(): void {
  // }

  // handleRegister(value: any) {
  //   createUserWithEmailAndPassword(this._Auth, value.email, value.password)
  //     .then(res => {
  //       console.log(res);
  //     }).catch(err => {
  //       alert(err.message);
  //     })
  // }

  error_message: string = '';

  private isAuthenticated = false;

  RegisterForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/.{6,}/)]),
  });

  constructor(
    private _Auth: Auth,
    private _Router: Router
  ) { }

  ngOnInit(): void {
  }


  // register
  onSignUp(registerForm: FormGroup) {
    const email = registerForm.value.email;
    const password = registerForm.value.password;

    if (registerForm.valid) {
      createUserWithEmailAndPassword(this._Auth, email, password)
        .then((response) => {
          this.authSuccessfully();
          console.log(response);
        }).catch((error) => {
          console.log(error);
          this.error_message = error.message;
        })
    } else {
      this.error_message = "from is invalid";
    }
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this._Router.navigate(['home']);

  }

}
