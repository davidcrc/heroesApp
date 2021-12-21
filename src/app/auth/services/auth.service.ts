import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
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

  login() {
    return this.http.get<IAuth>(`${this.baseUrl}/usuarios/1`).pipe(
      tap((auth) => {
        console.log('AUTHSERVICE PIPE', auth);
        this._auth = auth;
      })
    );
  }
}