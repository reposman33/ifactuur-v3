import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./../../services/Authentication.service";
@Component({
  selector: "app-sign-out",
  templateUrl: "./sign-out.component.html",
  styleUrls: ["./sign-out.component.scss"]
})
export class SignOutComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  handleOnSignOut() {
    this.authService.SignOut();
  }

  ngOnInit() {}
}
