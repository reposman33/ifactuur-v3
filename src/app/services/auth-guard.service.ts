import { Injectable, Inject } from "@angular/core";
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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isSignedIn().pipe(
      tap((isSignedIn: boolean) => {
        if (!isSignedIn) {
          this.router.navigate([ROUTES.SIGN_IN]);
          return false;
        }
        return true;
      })
    );
  }
}
