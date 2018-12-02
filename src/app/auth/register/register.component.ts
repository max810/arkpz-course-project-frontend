import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/shared/register-model.type';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  local: string;
  localText = {
    "en": {
      "role": "Role",
      "pwd": "Password",
      "submit": "Submit",
      "registerForm": "Register Form"
    },
    "ua": {
      "role": "Роль",
      "registerForm": "Форма реєстрації",
      "pwd": "Пароль",
      "submit": "Відправити",
    }
  };

  constructor(public authService: AuthService, public router: Router) {

  }
  role: string;
  email: string;
  password: string;
  requestFailed: boolean = false;
  errorMessage: string = "";
  ngOnInit() {
    this.local = localStorage.getItem('local');
  }

  register() {
    console.log(this.role || "no role bounded");
    let registerModel = new RegisterModel(
      this.role,
      this.email,
      this.password,
      false
    );
    this.authService.register(registerModel,
      x => {
        this.requestFailed = true;
      },
      x => {
        this.requestFailed = false;
        this.router.navigate(['/login']);
      });
  }
}
