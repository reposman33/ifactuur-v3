import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import ROUTES from "../../../constants/Routes";
import { AuthenticationService } from "../../services/Authentication.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {
  ROUTES: ROUTES = ROUTES;
  errorMsg: string = undefined;
  @ViewChild("email", { read: ElementRef, static: false })
  email: ElementRef;
  @ViewChild("password", { read: ElementRef, static: false })
  password: ElementRef;

  constructor(
    public authService: AuthenticationService,
    private renderer: Renderer2
  ) {}

  onSignIn(email, password) {
    this.authService
      .SignIn(email, password)
      .catch(err => (this.errorMsg = err.message));
  }

  // clear input fields and error message after failed sign in
  onClear() {
    if (this.errorMsg) {
      this.renderer.setProperty(this.email.nativeElement, "value", "");
      this.renderer.setProperty(this.password.nativeElement, "value", "");
      this.errorMsg = "";
    }
  }
}
