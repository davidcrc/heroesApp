import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IAuth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: IAuth | undefined;

  get auth() {
    return { ...this._auth };
  }

  constructor(private http: HttpClient) {}

  verificaAuthenticacion(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<IAuth>(`${this.baseUrl}/usuarios/1`).pipe(
      map((auth) => {
        console.log('el auth en map', auth);
        this._auth = auth;
        return true;
      })
    );
  }

  login() {
    return this.http.get<IAuth>(`${this.baseUrl}/usuarios/1`).pipe(
      tap((auth) => {
        console.log('AUTHSERVICE PIPE', auth);
        this._auth = auth;
      }),
      tap((auth) => localStorage.setItem('token', auth.id))
    );
  }

  logOut() {
    localStorage.setItem('token', '');
    this._auth = undefined;
  }
}
