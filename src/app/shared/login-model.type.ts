import { IAuthModel, AuthModel } from "../services/arkpz-api";

export class LoginModel implements IAuthModel {
  email!: string;  
  password!: string;
  rememberMe?: boolean;

  constructor(email: string, password: string, rememberMe: boolean = false){
    this.email = email;
    this.password = password;
    this.rememberMe = rememberMe;
  }
  
  toAuthModel() {
    return new AuthModel(this);
  }
}
