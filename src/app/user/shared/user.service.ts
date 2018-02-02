import { User } from "./user";
import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";

@Injectable()
export class UserService {
  selectedUser: User = new User();
  users: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.getUsers();
  }

  getUsers() {
    this.users = this.db.list("clients");
    return this.users;
  }

  createUser(data: User) {
    this.users.push(data);
  }
}
