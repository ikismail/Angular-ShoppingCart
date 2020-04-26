import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  loggedUser: User;
  dbUser;
  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService
  ) {
    this.user = firebaseAuth.authState;
    this.dbUser = new User();
    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        userService
          .isAdmin(this.userDetails.email)
          .snapshotChanges()
          .subscribe((data) => {
            data.forEach((el) => {
              const y = el.payload.toJSON();
              this.dbUser = y;
            });
          });
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
    this.firebaseAuth.signOut().then((res) => this.router.navigate(["/"]));
  }

  createUserWithEmailAndPassword(emailID: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(emailID, password);
  }

  getLoggedInUser(): void {
    const loggedUser = new User();
    this.firebaseAuth.currentUser.then((user) => {
      console.log("Current User", user);
      if (user) {
        this.userDetails = user;
        if (user != null) {
          loggedUser.$key = user.uid;
          loggedUser.userName = user.displayName;
          loggedUser.emailId = user.email;
          loggedUser.phoneNumber = user.phoneNumber;
          loggedUser.avatar = user.photoURL;
          loggedUser.isAdmin = this.dbUser.isAdmin;
        }
      } else {
        this.userDetails = null;
      }
      this.loggedUser = loggedUser;
    });
  }

  isAdmin(): boolean {
    this.getLoggedInUser();
    // console.log("loggedUSer", user)
    if (this.loggedUser != null) {
      if (this.loggedUser.isAdmin === true) {
        return true;
      }
    }
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    );
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  signInWithGoogle() {
    return this.firebaseAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}
