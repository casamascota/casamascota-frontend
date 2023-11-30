import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { AuthService } from '../Componentes/services/MyAuthService.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardFunctions {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateAdmin(): Observable<boolean | UrlTree> {
    console.log("Checking canActivateAdmin");
    return this.checkRole('admin');
  }

  canActivateDoctor(): Observable<boolean | UrlTree> {
    console.log("Checking canActivateAdminDoctor");
    return this.checkRole('doctor');
  }

  canActivateEnfermero(): Observable<boolean | UrlTree> {
    console.log("Checking canActivateEnfermero");
    return this.checkRole('enfermero');
  }

  canActivateAdminDoctorEnfermero(): Observable<boolean | UrlTree> {
    console.log("Checking canActivateAdminDoctorEnfermero");
    return this.checkMultipleRoles(['admin', 'doctor', 'enfermero']);
  }
  private checkMultipleRoles(rolesToCheck: string[]): Observable<boolean | UrlTree> {
    return this.authService.roles$.pipe(
 
      map(userRoles => {
        console.log("User Roles for multiple check:", userRoles, "Roles to Check:", rolesToCheck);
        const hasRole = rolesToCheck.some(role => userRoles.includes(role));
        console.log("Has one of the roles:", hasRole);
        return hasRole || this.router.createUrlTree(['/unauthorized']);
      })
    );
  }
  canActivateAdminDoctor(): Observable<boolean | UrlTree> {
    console.log("Checking canActivateAdminDoctor");
    return this.checkMultipleRoles(['admin', 'doctor']);
  }
  canActivateDoctorEnfermero(): Observable<boolean | UrlTree> {
    console.log("Checking canActivateAdminDoctor");
    return this.checkMultipleRoles(['doctor', 'enfermero']);
  }

  private checkRole(role: string): Observable<boolean | UrlTree> {
    return this.authService.roles$.pipe(
      map(roles => {
        console.log(`User Roles for ${role}:`, roles);
        const hasRole = roles.includes(role);
        console.log(`Has Role ${role}:`, hasRole);
        return hasRole || this.router.createUrlTree(['/unauthorized']);
      })
    );
  }


}


