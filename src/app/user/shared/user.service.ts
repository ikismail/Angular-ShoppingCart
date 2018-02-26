import { User } from "./user";
import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import { HttpClient, HttpHeaders } from "@angular/common/http/";

@Injectable()
export class UserService {
  selectedUser: User = new User();
  users: AngularFireList<User>;

  location = {
    lat: null,
    lon: null
  };

  private geoLocationURL = "https://geoip-db.com/jsonp";

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    this.users = this.db.list("clients");
    return this.users;
  }

  getGeoLocation() {
    const headers = new HttpHeaders()
      .set("Access-Control-Allow-origin", "*")
      .set("Content-Type", "application/json");

    return this.http.get(this.geoLocationURL);
  }

  createUser(data: User) {
    data.location = this.location;
    this.users.push(data);
  }

  setLocation(lat, lon) {
    this.location.lat = lat;
    this.location.lon = lon;
  }
}
