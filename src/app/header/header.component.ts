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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService, public router: Router
  ) { }
  public getUsername(): string {
    return localStorage.getItem('userName');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/homepage']);
  }
  // addJwt() {
  //   localStorage.setItem('jwt', "dick");
  // }
  // removeJwt() {
  //   localStorage.removeItem('jwt');
  // }
}
