import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  dbUser;
  loggedUser;
  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService
  ) {
    this.loggedUser = new User();

    this.user = firebaseAuth.authState;
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    });
  }

  isLoggedIn(): boolean {
    if (this.userDetails !== null) {
      return true;
    }
  }

  logout() {
    this.loggedUser = null;
    this.firebaseAuth.auth.signOut().then(res => this.router.navigate(["/"]));
  }

  createUserWithEmailAndPassword(emailID: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(
      emailID,
      password
    );
  }

  getLoggedInUser(): User {
    const user = this.firebaseAuth.auth.currentUser;
    if (user) {
      this.userService
        .isAdmin(user.email)
        .snapshotChanges()
        .subscribe(data => {
          data.forEach(el => {
            const y = el.payload.toJSON();
            this.dbUser = y;
          });
          this.userDetails = user;
          if (user != null) {
            this.loggedUser.$key = user.uid;
            this.loggedUser.userName = user.displayName;
            this.loggedUser.emailId = user.email;
            this.loggedUser.phoneNumber = user.phoneNumber;
            this.loggedUser.avatar = user.photoURL;
            this.loggedUser.isAdmin = this.dbUser["isAdmin"] || false;
          }
        });
    } else {
      this.userDetails = null;
    }
    return this.loggedUser;
  }

  isAdmin(): boolean {
    const user = this.getLoggedInUser();
    if (user != null) {
      if (user.isAdmin === true) {
        return true;
      }
    }
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    );
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}
