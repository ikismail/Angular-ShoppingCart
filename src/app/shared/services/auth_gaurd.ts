import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(["/index/login"], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
}
