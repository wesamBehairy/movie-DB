import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import {
  Auth,
  signInWithEmailAndPassword
} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  error_message: string = '';

  LoginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private _Auth: Auth,
    private _Router: Router
  ) { }

  ngOnInit(): void {
  }
  // login
  onSubmit(LoginForm: FormGroup) {
    const email = LoginForm.value.email;
    const password = LoginForm.value.password;
    if (LoginForm.valid) {
      signInWithEmailAndPassword(this._Auth, email, password).then((response) => {
        // if(response.ok){}
        this._Router.navigate(['home']);
        console.log(response);
      }).catch((error) => {
        console.log(error);
        this.error_message = error.error.message;
      })
    } else {
      this.error_message = "from is invalid";
    }
  }

  // logout
  logout() {

  }

}
