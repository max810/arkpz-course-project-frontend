import { IUserRegisterRequestModel, UserRegisterRequestModel } from "../services/arkpz-api";

export class RegisterModel implements IUserRegisterRequestModel {
  role?: string;
  email!: string;  
  password!: string;
  rememberMe?: boolean;

  constructor(role: string, email: string, password: string, rememberMe: boolean = false){
    this.role = role;
    this.email = email;
    this.password = password;
    this.rememberMe = rememberMe;
  }

  public toUserRegisterRequestModel() {
    return new UserRegisterRequestModel(this);
  }
}
