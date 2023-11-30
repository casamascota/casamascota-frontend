// auth.service.ts
import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private rolesSubject = new BehaviorSubject<string[]>([]);
  public roles$ = this.rolesSubject.asObservable();

  constructor(private auth0: Auth0Service) {
    // Suscribirse a los claims del token ID de Auth0
    this.auth0.idTokenClaims$.subscribe(claims => {
      console.log('Received claims:', claims);
      // Si hay claims, se obtienen los roles y se emiten a través del BehaviorSubject
      const roles = claims && claims['https://miaplicacion.com/roles'] as string[];
      console.log('Extracted roles:', roles);
      
      this.rolesSubject.next(roles || []);
    });
  }

}
