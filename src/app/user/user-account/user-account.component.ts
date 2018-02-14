import { AuthServiceService } from "./../../index/shared/auth.service";
import { User } from "./../shared/user";
import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user-account",
  templateUrl: "./user-account.component.html",
  styleUrls: ["./user-account.component.scss"]
})
export class UserAccountComponent implements OnInit {
  loggedUser: User;
  // Enable Update Button
  enbUpdBut: Boolean = true;

  constructor(
    private authService: AuthServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loggedUser = this.authService.getLoggedInUser();
    console.log("logged User", this.loggedUser);
  }

  updateProfile(form: NgForm) {}
}
