import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent implements OnInit{

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
}
