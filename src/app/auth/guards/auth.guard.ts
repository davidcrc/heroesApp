import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.auth.id) {
      return true;
    }

    console.log('bloqueado en canActivate');

    return this.authService.verificaAuthenticacion().pipe(
      tap((estaAuthenticado) => {
        if (!estaAuthenticado) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    // console.log('caload', true);
    // console.log('route', route);
    // console.log('segments', segments);

    // return true;

    // return this.authService.auth.id ? true : false;

    return this.authService.verificaAuthenticacion().pipe(
      tap((estaAuthenticado) => {
        if (!estaAuthenticado) {
          this.router.navigate(['./auth/login']);
        }
      })
    );
  }
}
