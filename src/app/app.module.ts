import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { InvoicesComponent } from "./components/invoices/invoices.component";
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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule
  ],
  providers: [ROUTES, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
