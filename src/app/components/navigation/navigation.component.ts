import { Component, OnInit } from "@angular/core";
import { RouterLinkActive } from "@angular/router";
import ROUTES from "../../../constants/Routes";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  ROUTES = ROUTES;
  constructor() {}

  ngOnInit() {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    this.isLoggedIn = authUser && authUser.authUser;
  }
  isLoggedIn: boolean;
}
