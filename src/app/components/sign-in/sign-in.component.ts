import { Component, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { I18nService } from "../../services/i18n.service";
import ROUTES from "../../../constants/Routes";
import { AuthenticationService } from "../../services/Authentication.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {
  ROUTES: ROUTES = ROUTES;
  errorMsg: string;
  @ViewChild("inputEmail", { read: ElementRef, static: false })
  private inputEmail: ElementRef;
  @ViewChild("inputPassword", { read: ElementRef, static: false })
  private inputPassword: ElementRef;
  get;

  constructor(
    public authService: AuthenticationService,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.get = I18nService.get;
  }

  onSignIn(email, password) {
    this.errorMsg = "";
    if (this.authService.isSignedIn) {
      this.errorMsg = this.get("ALERT_ALREADY_SIGNED_IN");
    } else {
      this.authService
        .signIn(email, password)
        .then(res => this.router.navigate([ROUTES.INVOICES]))
        .catch(err => {
          this.errorMsg = err.message;
        });
    }
  }
}
