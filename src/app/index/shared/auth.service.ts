import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { Observable } from "rxjs/Observable";
import { log } from "util";
import { Buffer } from "buffer";
import { User } from "../model/user";

@Injectable()
export class AuthServiceService {
  user: Observable<firebase.User>;
  usersList: User[] = [];

  constructor(private userService: UserService) {
    this.getAllUsers();
  }

  login(email: string, password: string): boolean {
    let status = false;

    this.usersList.forEach(user => {
      if (email === user.emailId && password === user.password) {
        const loggedInUser = user;
        const objStr = JSON.stringify(loggedInUser);
        const token = new Buffer(objStr).toString("base64");
        localStorage.setItem("token", token);
        sessionStorage.setItem("token", token);
        status = true;
        return status;
      }

      return status;
    });

    return status;
  }

  logout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }

  isLoggedIn(): Boolean {
    const token = sessionStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return false;
    }

    const strObj = new Buffer(token || "", "base64").toString("utf8");
    const loggedUser = JSON.parse(strObj);
    if (loggedUser["isAdmin"] === true) {
      return true;
    }
    return false;
  }

  getLoggedInUser(): User {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return null;
    }

    const strObj = new Buffer(token || "", "base64").toString("utf8");
    const loggedUser: User = JSON.parse(strObj);
    return loggedUser;
  }

  getAllUsers() {
    const x = this.userService.getUsers();
    x.snapshotChanges().subscribe(user => {
      this.usersList = [];
      user.forEach(element => {
        const y = element.payload.toJSON();
        y["$key"] = element.key;
        this.usersList.push(y as User);
      });
    });
  }
}
