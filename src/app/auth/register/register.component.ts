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

  constructor(public authService: AuthService, public router: Router) {

  }
  role: string;
  email: string;
  password: string;
  requestFailed: boolean = false;
  errorMessage: string = "";
  ngOnInit() {
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
