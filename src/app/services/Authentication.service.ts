import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import ROUTES from "../../constants/Routes";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private _isSignedIn: boolean;
  public user: Observable<firebase.User>;
  private ROUTES: ROUTES = ROUTES;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    // subscribe to angularFireAuth.authState so localstorage 'user' reflects authenticated state
    this.user = this.angularFireAuth.user;
  }

  // AUTH API
  public SignUp(email: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  public PasswordReset(email: string) {
    this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  public signIn(email: string, password: string) {
    return this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem("signedIn", "true");
      });
  }

  public SignOut() {
    this.angularFireAuth.auth.signOut();
    localStorage.removeItem("signedIn");
  }

  public get isSignedIn(): boolean {
    const isSignedIn = localStorage.getItem("signedIn");
    return !!isSignedIn;
  }
}
