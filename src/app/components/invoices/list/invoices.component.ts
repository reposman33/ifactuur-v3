import { Component, OnInit } from "@angular/core";

import { I18nService } from "src/app/services/i18n.service";
import { TAX_VALUES } from "../../../../constants/misc";
import { Router } from "@angular/router";
import ROUTES from "../../../../constants/Routes";
import { APIService } from "../../../services/api.service";

@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.scss"]
})
export class InvoicesComponent implements OnInit {
  DISPLAY_TABLE_ROWS: number = 15;
  DECIMAL_SIGN: string;
  rowData: object[];
  get: Function;

  constructor(private router: Router, private API: APIService) {
    this.get = I18nService.get;
    this.DECIMAL_SIGN = I18nService.getLocale() === "en" ? "." : ",";
  }

  ngOnInit() {
    this.API.getInvoices().subscribe(res => {
      this.getTableRows(res);
    });
  }

  getTableRows(data) {
    this.rowData = data;
  }

  handleNewInvoice() {
    this.router.navigate([ROUTES.INVOICE]);
  }

  onEditDetail(id) {
    this.router.navigate([ROUTES.INVOICE], { queryParams: { id: id } });
  }
}
