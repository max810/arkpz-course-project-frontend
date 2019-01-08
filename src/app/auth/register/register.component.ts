import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/shared/register-model.type';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
      "registerForm": "Register Form",
      "errorMessage": "User already exists"
    },
    "ua": {
      "role": "Роль",
      "registerForm": "Форма реєстрації",
      "pwd": "Пароль",
      "submit": "Відправити",
      "errorMessage": "Такий користувач вже існує"
    }
  };

  constructor(public authService: AuthService, public router: Router, private modalService: NgbModal) {

  }
  role: string;
  email: string;
  password: string;
  requestFailed: boolean = false;
  errorMessage: string = "";
  ngOnInit() {
    this.local = localStorage.getItem('local');
  }

  openModal(content) {
    this.modalService.open(content);
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
        console.log("register fail")
        this.requestFailed = true;
      },
      x => {
        console.log("register ok")
        this.requestFailed = false;
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.email);
        localStorage.setItem('isRegOk', "1");
        this.modalService.dismissAll();
        this.router.navigate(['/login']);
      });
  }
}
