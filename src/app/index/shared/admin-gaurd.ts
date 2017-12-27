import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthServiceService } from "./auth.service";

@Injectable()
export class AdminGaurd implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  canActivate() {
    if (this.authService.isLoggedIn() && this.authService.isAdmin()) {
      return true;
    }
    this.router.navigate(["no-access"]);
    return false;
  }
}
