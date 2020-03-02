import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { InvoicesComponent } from "./components/invoices/list/invoices.component";
import { CompaniesComponent } from "./components/companies/companies.component";
import { BillsComponent } from "./components/bills/bills.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AuthenticationService } from "./services/authentication.service";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignOutComponent } from "./components/sign-out/sign-out.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { environment } from "../environments/environment";
import ROUTES from "../constants/Routes";
import { AuthGuardService } from "./services/auth-guard.service";
import { I18nService } from "./services/i18n.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InvoicesComponent,
    CompaniesComponent,
    BillsComponent,
    StatisticsComponent,
    AdminComponent,
    SignOutComponent,
    SignInComponent,
    SignUpComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NgbModule
  ],
  providers: [ROUTES, AuthenticationService, AuthGuardService, I18nService],
  bootstrap: [AppComponent]
})
export class AppModule {}
