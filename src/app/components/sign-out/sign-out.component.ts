import { Component, ViewEncapsulation } from "@angular/core";
import { AuthenticationService } from "./../../services/Authentication.service";
@Component({
  selector: "app-sign-out",
  templateUrl: "./sign-out.component.html",
  styleUrls: ["./sign-out.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SignOutComponent {
  constructor(private authService: AuthenticationService) {}

  handleOnSignOut() {
    this.authService.SignOut();
  }
}
