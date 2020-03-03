import { Injectable } from "@angular/core";
import { AuthenticationService } from "./Authentication.service";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import ROUTES from "../../constants/Routes";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isSignedIn) {
      return true;
    } else {
      route.routeConfig.path !== ROUTES.SIGN_IN &&
        this.router.navigate([ROUTES.SIGN_IN]);
      return false;
    }
  }
}
