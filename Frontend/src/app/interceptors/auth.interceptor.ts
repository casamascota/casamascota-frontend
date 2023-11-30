import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { take, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Usamos switchMap ya que idTokenClaims$ es un Observable y queremos "cambiar" a un nuevo Observable
    return this.auth.idTokenClaims$.pipe(
      take(1), // Tomamos solo el primer valor emitido
      switchMap(claims => {
        // Verificamos si el token está presente en los claims
        const token = claims?.__raw;
            console.log(token);
        if (!token) {
          // Si no hay token, retornamos la solicitud sin modificar
          return next.handle(req);
        }

        // Si hay token, clonamos la solicitud y añadimos el token al encabezado de autorización
        const authReq = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });

        // Enviamos la nueva solicitud con el token incluido
        return next.handle(authReq);
      })
    );
  }
}
