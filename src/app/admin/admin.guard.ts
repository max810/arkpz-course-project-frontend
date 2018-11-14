import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let profileType = localStorage.getItem("profile_type");
    if(profileType.toLowerCase() == "admin") {
      return true;
    }

    this.router.navigate(['/homepage']);
    return false;

    // if (url == "profile") {
    //   switch (profileType) {
    //     case "user":
    //       url = 'profile-user';
    //       break;
    //     case "admin":
    //       url = 'profile-admin';
    //       break;
    //     default:
    //       alert(`ProfileTypeGuard received not profile navigation ${url}`)
    //       return false;
    //   }
    // }

    // console.log(profileType);
    // console.log(url);

    // if (profileType == "user"
    //   && url == "/profile-admin"
    //   ||
    //   profileType == "admin"
    //   && url == "/profile-user") {
    //   this.router.navigate(["/profile"]);
    //   return false;
    // }
    // this.router.navigate(["/profile"]);
    // return true;
  }
}
