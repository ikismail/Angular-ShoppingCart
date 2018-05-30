import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";

import * as moment from "moment";
import { User } from "../models/user";

@Injectable()
export class UserService {
  selectedUser: User = new User();
  users: AngularFireList<User>;

  location = {
    lat: null,
    lon: null
  };

  constructor(private db: AngularFireDatabase) {
    this.getUsers();
  }

  getUsers() {
    this.users = this.db.list("clients");
    return this.users;
  }

  createUser(data: User) {
    data.location = this.location;
    data.createdOn = moment(new Date()).format("X");
    this.users.push(data);
  }

  updateUser(user: User) {
    this.users.update(user.$key, user);
  }

  setLocation(lat, lon) {
    this.location.lat = lat;
    this.location.lon = lon;
  }
}
