import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class APIService {
  SERVER_URL: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) {}

  // HTTP PUBLIC ANGULAR-IN-MEMORY-WEB-API
  public getInvoices() {
    return this.httpClient.get(this.SERVER_URL + "invoices");
  }

  public getInvoice(id) {
    return this.httpClient.get(this.SERVER_URL + "invoices/" + id);
  }

  public updateInvoice(invoice) {
    return this.httpClient.put(
      `${this.SERVER_URL}invoices/${invoice.id}`,
      invoice
    );
  }
  public createInvoice(invoice) {
    return this.httpClient.post(`${this.SERVER_URL}invoices`, invoice);
  }

  public deleteInvoice(id) {
    return this.httpClient.delete(`${this.SERVER_URL}invoices/${id}`);
  }

  // TODO: implement a real backend instead of local storage...
  public savePage(data: { [page: string]: any }) {
    const _page: string = Object.keys(data)[0];
    const _data: any = JSON.stringify(data[_page]);
    localStorage.setItem(_page, _data);
  }

  public getPage(page: string): string | null {
    const data = localStorage.getItem(page);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
}
