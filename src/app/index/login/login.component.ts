import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";
import {
  ToastyService,
  ToastOptions,
  ToastData,
  ToastyConfig
} from "ng2-toasty";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.position = "bottom-right";
    this.toastyConfig.theme = "material";
  }

  ngOnInit() {
    // GeoLocation getting current Locatino Lattitude and Longitude
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
  }
  setGeoLocation(position: any) {
    this.userService.setLocation(
      position["coords"].latitude,
      position["coords"].longitude
    );
  }
}
