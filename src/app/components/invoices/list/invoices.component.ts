import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import ROUTES from "../../../../constants/Routes";
import { I18nService } from "src/app/services/i18n.service";
import { APIService } from "../../../services/api.service";
import { firestore } from "firebase";

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
    this.dateTimeFormat = new Intl.DateTimeFormat(
      I18nService.getLocale()
    ).format;
  }

  ngOnInit() {
    this.API.getInvoices().subscribe(res => {
      this.getTableRows(res, 10);
    });
  }

  ngOnDestroy() {}

  getTableRows(data, maxRows) {
    this.rowData = data.slice(0, maxRows);
  }

  handleNewInvoice() {
    this.router.navigate([ROUTES.INVOICE]);
  }

  onEditDetail(id) {
    this.router.navigate([ROUTES.INVOICE], { queryParams: { id: id } });
  }
}
