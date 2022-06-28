import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: any;
  error_message: any;

  constructor(
    private _Auth: Auth,
    private _Router: Router
  ) { }

  // login
  signinUser(auth: Auth, email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password).then((response) => {
      this._Router.navigate(['home']);
      this._Auth.currentUser?.getIdToken().then((token: string) => this.token = token);
      console.log(response);
    })
    // .catch((error) => {
    //   console.log(error);
    //   this.error_message = error.message;
    // })
  }

  // register
  signupUser(auth: Auth, email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // logout
  logout() {
    signOut(this._Auth);
    this.token = null;
  }

  getIdToken() {
    this._Auth.currentUser?.getIdToken().then((token: string) => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
