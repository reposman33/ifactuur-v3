import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { v4 as uuidv4 } from "uuid";
@Injectable({
  providedIn: "root"
})
export class DataService implements InMemoryDbService {
  constructor() {}

  genId() {
    return uuidv4();
  }

  createDb() {
    const invoices = [
      {
        date: "2020-01-31",
        company: "",
        periodFrom: "2020-01-01",
        periodTo: "2020-01-31",
        description: "FActuur januari 2020",
        hourlyRateInt: 75,
        hourlyRateDec: "",
        hours: 145,
        tax: "21",
        sum: "€ 9.649,75",
        status: "New",
        id: "18cd3247-1509-467f-b19f-39ab2e0b42b1"
      },
      {
        date: "2020-02-28",
        company: "",
        periodFrom: "2020-02-01",
        periodTo: "2020-02-28",
        description: "Factuur Februari",
        hourlyRateInt: 75,
        hourlyRateDec: "",
        hours: 130,
        tax: "21",
        sum: "€ 9.649,75",
        status: "New",
        id: "18cd3247-1509-467f-b19f-39ab2e0b42b2"
      },
      {
        date: "2020-03-31",
        company: "",
        periodFrom: "2020-03-01",
        periodTo: "2020-03-31",
        description: "Factuur Maart1",
        hourlyRateInt: 75,
        hourlyRateDec: "",
        hours: 165,
        tax: "21",
        sum: "€ 9.649,75",
        status: "New",
        id: "18cd3247-1509-467f-b19f-39ab2e0b42b3"
      }
    ];
    return { invoices };
  }
}
