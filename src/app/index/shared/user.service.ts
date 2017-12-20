import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import { User } from "../model/user";

@Injectable()
export class UserService {
  selectedUser: User = new User();
  users: AngularFireList<any>;

  location = {
    lat: null,
    lon: null
  };

  usersName: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {}

  getUsers() {
    this.users = this.db.list("clients");
    return this.users;
  }

  createUser(data: User) {
    this.users.push({
      emailId: data.emailId,
      password: data.password,
      location: {
        lat: this.location.lat,
        lon: this.location.lon
      },
      isAdmin: false
    });
  }

  setLocation(lat, lon) {
    this.location.lat = lat;
    this.location.lon = lon;
  }

  getUsersByUserName(searchText: string) {
    this.usersName = this.db.list("clients", ref =>
      ref
        .orderByChild("userName")
        .startAt(searchText)
        .endAt(searchText + "\uf8ff")
    );
    return this.usersName;
  }
}
