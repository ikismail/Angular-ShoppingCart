import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../shared/models/user";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-user-account",
  templateUrl: "./user-account.component.html",
  styleUrls: ["./user-account.component.scss"]
})
export class UserAccountComponent implements OnInit {
  loggedUser: User;
  // Enable Update Button
  enbUpdBut: Boolean = true;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.loggedUser = this.authService.getLoggedInUser();
    console.log("logged User", this.loggedUser);
  }

  updateProfile(form: NgForm) {}
}
