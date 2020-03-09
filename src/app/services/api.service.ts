import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore";
import * as firebase from "firebase";
@Injectable({
  providedIn: "root"
})
export class APIService {
  SERVER_URL: string = "http://localhost:8080/api/";

  subscription$;
  db;

  constructor(private firestore: AngularFirestore) {
    this.db = firebase.firestore();
  }

  public getInvoices() {
    return (this.subscription$ = this.firestore
      .collection("invoices")
      .valueChanges());
  }

  public getInvoice(id) {}

  public updateInvoice(invoice) {}

  public createInvoice(invoice) {}

  public deleteInvoice(id) {}

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
