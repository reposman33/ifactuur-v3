import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import ROUTES from "../../../constants/Routes";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  ROUTES: ROUTES = ROUTES;
  constructor(private routerLink: RouterLink) {}

  ngOnInit() {}
}
