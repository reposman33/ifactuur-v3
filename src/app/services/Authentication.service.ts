import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  userData$: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData$ = angularFireAuth.authState;
  }

  // AUTH API
  public SignUp(email: string, password: string) {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(err => console.log("ERROR: ", err));
  }

  public PasswordReset(email: string) {
    this.angularFireAuth.auth
      .sendPasswordResetEmail(email)
      .then(res => console.log(res))
      .catch(err => console.log("ERROR: ", err));
  }

  public SignIn(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
  }

  public SignOut() {
    this.angularFireAuth.auth
      .signOut()
      .then(res => console.log("logged out"))
      .catch(err => console.log("ERROR: ", err));
  }

  public isSignedIn(): Promise<boolean> {
    return new Promise(resolve => {
      this.angularFireAuth.auth.onAuthStateChanged((user: any) =>
        user ? resolve(true) : resolve(false)
      );
    });
  }
}
