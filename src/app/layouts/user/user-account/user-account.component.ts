import { Component, OnInit, AfterViewInit } from "@angular/core";
import { User } from "src/app/shared/models/user";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-user-account",
  templateUrl: "./user-account.component.html",
  styleUrls: ["./user-account.component.scss"],
})
export class UserAccountComponent implements AfterViewInit {
  // Enable Update Button

  constructor(public authService: AuthService) {}

  ngAfterViewInit(): void {}
}
