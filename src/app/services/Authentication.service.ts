import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { first } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private _isSignedIn: boolean;
  public user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    // subscribe to angularFireAuth.authState so localstorage 'user' reflects authenticated state
    this.user = this.angularFireAuth.user;
    this.user.subscribe(user => {
      this._isSignedIn = !!user;
    });
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
      .then(res => (this._isSignedIn = !!res));
  }

  public SignOut() {
    this.angularFireAuth.auth.signOut();
  }

  public set isSignedIn(status: boolean) {
    this._isSignedIn = status;
  }
  public get isSignedIn(): boolean {
    return this._isSignedIn;
  }
}
