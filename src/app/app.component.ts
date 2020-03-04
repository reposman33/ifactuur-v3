import { Component, ViewEncapsulation } from "@angular/core";
import { AuthenticationService } from "./services/Authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = "ifactuur-v3";
  isSignedIn: boolean;

  constructor(private authService: AuthenticationService) {
    this.authService.user.subscribe(user => (this.isSignedIn = !!user));
  }
}
