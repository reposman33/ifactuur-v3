import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { AuthenticationService } from "./services/Authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = "ifactuur-v3";
  isSignedIn: boolean = false;

  constructor(public authService: AuthenticationService) {}

  ngOnInit() {
    this.authService.isSignedIn().subscribe(res => {
      this.isSignedIn = res;
    });
  }
}
