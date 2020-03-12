import { Component, ViewEncapsulation } from "@angular/core";
import { AuthenticationService } from "./../../services/Authentication.service";
import { Router } from "@angular/router";
import ROUTES from "../../../constants/Routes";

@Component({
  selector: "app-sign-out",
  templateUrl: "./sign-out.component.html",
  styleUrls: ["./sign-out.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SignOutComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  handleOnSignOut() {
    this.authService.SignOut();
    this.router.navigate([ROUTES.SIGN_IN]);
  }
}
