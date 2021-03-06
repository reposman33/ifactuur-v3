import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import ROUTES from "../../../../constants/Routes";
import { I18nService } from "src/app/services/i18n.service";
import { APIService } from "../../../services/api.service";
import invoices from "../../../../assets/invoice.json";

@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.scss"]
})
export class InvoicesComponent implements OnInit {
  DISPLAY_TABLE_ROWS: number = 15;
  DECIMAL_SIGN: string;
  rowData;
  get: Function;
  dateTimeFormat;

  constructor(private router: Router, private API: APIService) {
    this.get = I18nService.get;
    this.DECIMAL_SIGN = I18nService.getLocale() === "en" ? "." : ",";
    this.dateTimeFormat = new Intl.DateTimeFormat(I18nService.getLocale(), {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format.bind(this);
  }

  ngOnInit() {
    this.API.getInvoices({ cb: this.getTableRows, options: { rows: 10 } });
  }

  ngOnDestroy() {}

  getTableRows = (data, maxRows) => {
    const rowData = data.slice(0, maxRows);
    this.rowData = rowData
      .map(ob => ob.data())
      // format timefield
      .map(ob => {
        return {
          ...ob,
          dateTimeCreated: this.dateTimeFormat(new Date(ob.dateTimeCreated))
        };
      })
      // change invoice type into human readable string
      .map(ob => ({
        ...ob,
        type:
          ob.type === "1"
            ? this.get("INVOICES.TYPE_CREDIT")
            : ob.type === "2"
            ? this.get("INVOICES.TYPE_DEBIT")
            : ""
      }));
  };

  handleNewInvoice() {
    this.router.navigate([ROUTES.INVOICE]);
  }

  onEditDetail(id) {
    this.router.navigate([ROUTES.INVOICE], { queryParams: { id: id } });
  }

  // IMPORT INTO FIREBASE
  // DATA TO IMPORT IS IMPORTED THROUGH IMPORT STATEMENT
  onImportInvoices() {
    this.API.importInvoices(invoices);
  }
}
