import { Injectable, Inject } from "@angular/core";
import { AuthenticationService } from "./Authentication.service";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import ROUTES from "../../constants/Routes";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate() {
    return this.authService.isSignedIn();
  }
}
