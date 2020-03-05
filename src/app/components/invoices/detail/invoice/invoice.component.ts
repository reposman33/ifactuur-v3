import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { I18nService } from "../../../../services/i18n.service";
import { APIService } from "../../../../services/api.service";
import * as CONSTANTS from "../../../../../constants/misc";
import ROUTES from "../../../../../constants/Routes";
import { Invoice } from "../../../../models/invoice";
import { flatMap, filter } from "rxjs/operators";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"]
})
export class InvoiceComponent implements OnInit {
  // references to static class methods for template
  get = I18nService.get;
  CONSTANTS = CONSTANTS;

  // use for decimal point and currency formatting
  getLocale = I18nService.getLocale;

  // we use this in the template
  DECIMAL_SIGN = I18nService.getLocale() === "en" ? "." : ",";

  // Names of the input fields from where we calculate tax and total
  FIELDNAMES = {
    HOURLYRATEINT: "hourlyRateInt",
    HOURLYRATEDEC: "hourlyRateDec",
    HOURS: "hours",
    TAX: "tax"
  };
  // classmembers utilized in the view to display amounts
  taxFormatted = undefined;
  totalBeforeTaxFormatted = undefined;
  totalFormatted = undefined;
  private ROUTES: ROUTES = ROUTES;
  invoiceId: string;

  // invoice form model for double data binding
  invoice: Invoice = {
    date: "",
    company: "",
    periodFrom: "",
    periodTo: "",
    description: "",
    hourlyRateInt: "",
    hourlyRateDec: "",
    hours: "",
    tax: "",
    sum: "",
    status: "",
    id: ""
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private API: APIService
  ) {}

  ngOnInit() {
    this.route.queryParams
      .pipe(
        filter(params => params.id),
        flatMap(params => this.API.getInvoice(params.id))
      )
      .subscribe(res => {
        this.invoice = { ...res };
        this.calculateTotal();
      });
  }

  // calculate totals from what the user provided
  calculateTotal() {
    // calculate net total
    const totalBeforeTaxUnFormatted =
      (this.invoice[this.FIELDNAMES.HOURLYRATEINT] +
        this.invoice[this.FIELDNAMES.HOURLYRATEDEC] / 100) *
      this.invoice[this.FIELDNAMES.HOURS];
    // format number
    this.totalBeforeTaxFormatted = totalBeforeTaxUnFormatted
      ? this.formatNumberAsCurrency(totalBeforeTaxUnFormatted)
      : null;

    // calculate tax
    const taxUnFormatted =
      totalBeforeTaxUnFormatted * (this.invoice[this.FIELDNAMES.TAX] / 100);
    // format number
    this.taxFormatted = taxUnFormatted
      ? this.formatNumberAsCurrency(taxUnFormatted)
      : null;

    // calculate total and format number
    this.totalFormatted =
      !!totalBeforeTaxUnFormatted || !!taxUnFormatted
        ? this.formatNumberAsCurrency(
            totalBeforeTaxUnFormatted + taxUnFormatted
          )
        : null;
  }

  formatNumberAsCurrency(number) {
    return new Intl.NumberFormat(this.getLocale(), {
      style: "currency",
      currency: "EUR"
    }).format(number);
  }

  onListInvoices() {
    this.router.navigate([ROUTES.INVOICES]);
  }

  onSaveInvoice(f: NgForm) {
    // add total sum
    const invoice = {
      ...f.value,
      sum: this.totalBeforeTaxFormatted,
      status: "New"
    };
    const res = this.API.createInvoice(invoice).subscribe(res =>
      console.log("created new invoice: ", res)
    );
  }
}
