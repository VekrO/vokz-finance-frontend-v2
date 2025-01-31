import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { BaseCrudService } from '../../bases/base-crud.service';
import { TAuthToken } from '../../types/authentication/auth-token.type';
import { TForgotPassword } from '../../types/authentication/forgot-password.type';
import { TLogin } from '../../types/authentication/login.type';
import { TRegister } from '../../types/authentication/register.type';
import { TResetPassword } from '../../types/authentication/reset-password.type';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseCrudService {

  constructor(http: HttpClient) {
    super(http);
    this.endpoint = 'authentication';
  }

  login(data: TLogin): Observable<TAuthToken> {
    return this.http.post<TAuthToken>(environment.API + this.endpoint + '/login', data).pipe(tap(data => {
      this.setToken(data.token);
    }));
  }

  register(data: TRegister): Observable<void> {
    return this.http.post<void>(environment.API + this.endpoint + '/register', data);
  }

  forgotPassword(data: TForgotPassword): Observable<void> {
    return this.http.post<void>(environment.API + this.endpoint + '/forgotPassword', data);
  }

  resetPassword(data: TResetPassword): Observable<void> {
    return this.http.post<void>(environment.API + this.endpoint + '/resetPassword', data)
  }

  private setToken(token: string) {
    localStorage.setItem('vokz-user-token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('vokz-user-token') ?? null;
  }

  public expiredToken(): boolean {

    const token = this.getToken();

    if (!token) {
      return true;
    }

    try {
      const decoded = jwtDecode(token);
      if (!decoded.exp) {
        return true;
      }
      const now = Math.floor(Date.now() / 1000); // Tempo atual em segundos.
      return decoded.exp < now;
    } catch (err) {
      console.log('TOKEN ERROR: ', err);
      return true;
    }

  }

}
