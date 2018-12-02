import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  localText = {
    "en": {
      "root": "ACCR",
      "login": "Login",
      "logout": "Logout",
      "loggedIn": "Logged in as",
      "loggedOut": "Logged out",
    },
    "ua": {
      "root": "АСТРА",
      "login": "Авторизуватися",
      "logout": "Вийти",
      "loggedIn": "Авторизовано",
      "loggedOut": "Вийти",
    }
  };

  local: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  imgSrc: string;
  imgSrcs = {
    "en": "../assets/en.png",
    "ua": "../assets/ua.png"
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService, public router: Router
  ) {
    this.local = localStorage.getItem('local');
    this.imgSrc = this.imgSrcs[this.local];
  }

  public getUsername(): string {
    return localStorage.getItem('user_name');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/homepage']);
  }

  changeLocal() {
    this.local = localStorage.getItem('local');
    this.local = this.local == "en" ? "ua" : "en";
    console.log(this.local + " local");
    localStorage.setItem('local', this.local);

    location.reload();
    // this.imgSrc = this.imgSrcs[localStorage.getItem('local')];
  }
  // addJwt() {
  //   localStorage.setItem('jwt', "dick");
  // }
  // removeJwt() {
  //   localStorage.removeItem('jwt');
  // }
}
