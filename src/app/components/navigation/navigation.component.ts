import { Component, ViewEncapsulation } from "@angular/core";
import ROUTES from "../../../constants/Routes";
@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent {
  _ROUTES = ROUTES;
  constructor() {}
  get ROUTES() {
    return this._ROUTES;
  }
}
