import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import ROUTES from "../constants/Routes";
import { InvoicesComponent } from "./components/invoices/list/invoices.component";
import { BillsComponent } from "./components/bills/bills.component";
import { CompaniesComponent } from "./components/companies/companies.component";
import { AdminComponent } from "./components/admin/admin.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { InvoiceComponent } from "./components/invoices/detail/invoice/invoice.component";

const routes: Routes = [
  {
    path: ROUTES.INVOICES,
    component: InvoicesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ROUTES.INVOICE,
    component: InvoiceComponent,
    canActivate: [AuthGuard]
  },
  { path: ROUTES.BILLS, component: BillsComponent, canActivate: [AuthGuard] },
  {
    path: ROUTES.COMPANIES,
    component: CompaniesComponent,
    canActivate: [AuthGuard]
  },
  { path: ROUTES.ADMIN, component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: ROUTES.STATISTICS,
    component: StatisticsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ROUTES.SIGN_IN,
    component: SignInComponent
  },
  {
    path: ROUTES.SIGN_UP,
    component: SignUpComponent
  },
  {
    path: ROUTES.NOTFOUND,
    component: PageNotFoundComponent
  },
  {
    path: "",
    redirectTo: ROUTES.SIGN_IN,
    pathMatch: "full"
  },
  { path: "**", redirectTo: ROUTES.NOTFOUND }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
