import { Component, OnInit } from "@angular/core";
import { I18nService } from "src/app/services/i18n.service";
import { TAX_VALUES } from "../../../constants/misc";

@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.scss"]
})
export class InvoicesComponent implements OnInit {
  DECIMAL_SIGN;
  totalBeforeTax;
  tax;
  FIELDNAMES;
  taxFormatted;
  totalBeforeTaxFormatted;
  totalFormatted;
  TAX_VALUES = TAX_VALUES;

  get;

  constructor() {
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

  ngOnInit() {}
}
