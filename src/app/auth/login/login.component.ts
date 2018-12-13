import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/shared/login-model.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }
  isError: boolean = false;
  isRegOk: Boolean;
  local: string;
  localText = {
    "en": {
      "loginForm": "Login Form",
      "`wrong`": "Wrong username or password",
      "pwd": "Password",
      "submit": "Submit",
      "register": "REGISTER",
      "regOk": "Registration successful!"
    },
    "ua": {
      "loginForm": "Форма Авторизації",
      "wrong": "Невірне ім'я користувача або пароль",
      "pwd": "Пароль",
      "submit": "Відправити",
      "register": "РЕЄСТРАЦІЯ",
      "regOk": "Успішно зареєстровано"
    }
  };
  email: string;
  password: string;
  ngOnInit() {
    this.local = localStorage.getItem('local');
    this.email = localStorage.getItem('email') || '';
    this.password ='';
    this.isRegOk = Boolean(localStorage.getItem('isRegOk'));
  }

  ngOnDestroy() {
    localStorage.removeItem('isRegOk');
  }

  login() {
    // ADD FORM with login fields
    this.authService.login(
      new LoginModel(this.email, this.password),
      x => {
        console.log("No such user.");
        this.isError = true;
      },
      x => {
        this.isError = false;
        let redirect = this.authService.redirectUrl ?
          this.authService.redirectUrl : '/';
        this.router.navigate([redirect]);
      },
    );
  }

  logout() {
    this.authService.logout();
    // localStorage.removeItem("profileType");
  }
}
