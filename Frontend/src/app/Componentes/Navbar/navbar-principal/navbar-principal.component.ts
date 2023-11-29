import { AuthService as Auth0AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/MyAuthService.service'; 
import { LoginButtonComponent } from '../login-button/login-button.component';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent implements OnInit {
  roles = this.myAuthService.roles$;
//Servicio para Oauth0 es "auth0"
//Servicio personalizado es "myAuthService"
  constructor(public auth0: Auth0AuthService, private myAuthService: AuthService) {}

  ngOnInit() {
  }
}