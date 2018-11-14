import { Injectable } from '@angular/core';
import { arkpzAPI, AuthModel } from './arkpz-api';
import { Observable } from 'rxjs';
import { LoginModel } from '../shared/login-model.type';
import { RegisterModel } from '../shared/register-model.type';

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

  getToken() {
    return localStorage.getItem('jwt');
  }

  login(loginModel: LoginModel, onFailure, onSuccess) {
    // MOCK
    // add request to server
    let response = this.backend.accrAuthLoginPost(
      loginModel.toAuthModel()
    );
    // this.backend.accrDronesByIdGet
    response.subscribe(x => {
      localStorage.setItem('jwt', x.access_token);
      localStorage.setItem('profile_type', x.profile_type);
      localStorage.setItem('user_name', x.user_name);
    },
      onFailure,
      onSuccess
    );
  }

  logout() {
    this.backend.accrAuthLogoutPost();
    localStorage.removeItem('jwt');
    localStorage.removeItem('profile_type');
    localStorage.removeItem('user_name');
  }

  register(registerModel: RegisterModel, onFailure, onSuccess) {
    // let registerModel = new RegisterModel(role, email, password, rememberMe);
    console.log(registerModel.toUserRegisterRequestModel());
    let response = this.backend.accrAuthRegisterPost(registerModel.toUserRegisterRequestModel());
    response.subscribe(_x => {
      console.log(_x);
    },
    onFailure,
    onSuccess
    );
  }
}
