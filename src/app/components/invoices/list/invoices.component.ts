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
  DECIMAL_SIGN: string;
  totalBeforeTax: string;
  tax: string;
  FIELDNAMES;
  taxFormatted: number;
  totalBeforeTaxFormatted: number;
  totalFormatted: number;
  TAX_VALUES: number[] = TAX_VALUES;

  rowData;
  get: Function;

  constructor(private router: Router, private API: APIService) {
    this.get = I18nService.get;
    this.DECIMAL_SIGN = I18nService.getLocale() === "en" ? "." : ",";
    this.totalBeforeTax = undefined;
    this.tax = undefined;
    this.FIELDNAMES = {
      HOURLYRATEINT: "hourlyRateInt",
      HOURLYRATEDEC: "hourlyRateDec",
      HOURS: "hours",
      TAX: "tax"
    };
    this.taxFormatted = undefined;
    this.totalBeforeTaxFormatted = undefined;
    this.totalFormatted = undefined;
  }

  ngOnInit() {
    this.API.getInvoices().subscribe(res => {
      this.rowData = res;
    });
  }

  handleNewInvoice() {
    this.router.navigate([ROUTES.INVOICE]);
  }

  onEditDetail(id) {
    this.router.navigate([ROUTES.INVOICE], { queryParams: { id: id } });
  }
}
