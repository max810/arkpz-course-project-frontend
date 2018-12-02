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

  local: string;
  localText = {
    "en": {
      "loginForm": "Login Form",
      "wrong": "Wrong username or password",
      "pwd": "Password",
      "submit": "Submit",
      "register": "REGISTER"
    },
    "ua": {
      "loginForm": "Форма Авторизації",
      "wrong": "Невірне ім'я користувача або пароль",
      "pwd": "Пароль",
      "submit": "Відправити",
      "register": "РЕЄСТРАЦІЯ"
    }
  };
  email: string;
  password: string;
  ngOnInit() {
    this.local = localStorage.getItem('local');
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
