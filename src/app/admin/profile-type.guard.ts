import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileTypeGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url = state.url;
    let profileType = localStorage.getItem("profileType");
    if (url == "profile") {
      switch (profileType) {
        case "driver":
          url = 'profile-driver';
          break;
        case "employee":
          url = 'profile-employee';
          break;
        default:
          alert(`ProfileTypeGuard received not profile navigation ${url}`)
          return false;
      }
    }

    console.log(profileType);
    console.log(url);

    if (profileType == "driver"
      && url == "/profile-employee"
      ||
      profileType == "employee"
      && url == "/profile-driver") {
      this.router.navigate(["/profile"]);
      return false;
    }
    this.router.navigate(["/profile"]);
    return true;
  }
}
