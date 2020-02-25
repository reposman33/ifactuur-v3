import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { InvoicesComponent } from "./components/invoices/invoices.component";
import { CompaniesComponent } from "./components/companies/companies.component";
import { BillsComponent } from "./components/bills/bills.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { AdminComponent } from "./components/admin/admin.component";
import { SignOutComponent } from "./components/sign-out/sign-out.component";
import ROUTES from "../constants/Routes";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InvoicesComponent,
    CompaniesComponent,
    BillsComponent,
    StatisticsComponent,
    AdminComponent,
    SignOutComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ROUTES],
  bootstrap: [AppComponent]
})
export class AppModule {}
