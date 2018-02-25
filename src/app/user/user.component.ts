import { AuthServiceService } from "./../index/shared/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  constructor(public authService: AuthServiceService) {}

  ngOnInit() {}
}
