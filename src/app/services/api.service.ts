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

  public getInvoices(args) {
    return this.db
      .collection("invoices")
      .get()
      .then(res => args.cb(res.docs, args.options.rows));
  }

  public getInvoice(id) {
    return this.db
      .collection("invoices")
      .where("id", "==", id)
      .get();
  }

  // IMPORT INTO FIREBASE
  public importInvoices(invoices) {
    invoices.map((invoice, i) =>
      this.db
        .collection("invoices")
        .add(invoice)
        .then(res =>
          console.log(
            `${i === invoices.length - 1 ? "LAST " : ""}Document ${i}:${
              invoices.length
            } added`
          )
        )
        .catch(err => console.log("ERROR: ", err))
    );
  }

  //  public updateInvoice(invoice) {}

  //  public createInvoice(invoice) {}

  //  public deleteInvoice(id) {}

  // TODO: implement a real backend instead of local storage...
}
