import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import ROUTES from "../constants/Routes";
import { InvoicesComponent } from "./components/invoices/invoices.component";
import { BillsComponent } from "./components/bills/bills.component";
import { CompaniesComponent } from "./components/companies/companies.component";
import { AdminComponent } from "./components/admin/admin.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";

const routes: Routes = [
  { path: "", component: InvoicesComponent },
  { path: ROUTES.INVOICES, component: InvoicesComponent },
  { path: ROUTES.BILLS, component: BillsComponent },
  { path: ROUTES.COMPANIES, component: CompaniesComponent },
  { path: ROUTES.ADMIN, component: AdminComponent },
  { path: ROUTES.STATISTICS, component: StatisticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
