import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { RouterLinkActive } from "@angular/router";
import ROUTES from "../../../constants/Routes";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean;
  ROUTES = ROUTES;
  constructor() {}

  ngOnInit() {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    this.isLoggedIn = authUser && authUser.authUser;
  }
}
