import { Injectable } from '@angular/core';
import { arkpzAPI, AuthModel } from './arkpz-api';
import { Observable } from 'rxjs';
import { LoginModel } from '../shared/login-model.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged(): boolean {
    return localStorage.getItem('jwt') ? true : false;
  }
  constructor(public backend: arkpzAPI) {

  }
  redirectUrl: string;

  login(email: string, password: string, onFailure, onSuccess) {
    // MOCK
    // add request to server
    let response = this.backend.accrAuthLoginPost(
      new LoginModel(email, password).toAuthModel()
    );
    this.backend.accrDronesByIdGet
    response.subscribe(x => {
      localStorage.setItem('jwt', x.access_token);
      localStorage.setItem('profile_type', x.profile_type);
      localStorage.setItem('userName', x.userName);
    },
      onFailure,
      onSuccess
    );
    // localStorage.setItem('jwt', 'mock_jwt_value');
  }

  logout() {
    // MOCK
    // ? add reuest to server
    localStorage.removeItem('jwt');
    localStorage.removeItem('profile_type');
    localStorage.removeItem('userName');
  }
}
