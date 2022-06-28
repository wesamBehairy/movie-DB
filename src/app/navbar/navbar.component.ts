import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _AuthService: AuthService) { }

  ngOnInit(): void {
  }

  onLogout() {
    console.log("logout fun");
    this._AuthService.logout();
  }

}
