import { NgForm, EmailValidator } from "@angular/forms";
import { UserService } from "./../../user/shared/user.service";
import { Component, OnInit } from "@angular/core";
import {
  ToastyService,
  ToastOptions,
  ToastData,
  ToastyConfig
} from "ng2-toasty";
import { AuthService } from "../shared/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../user/shared/user";
declare var $: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [EmailValidator]
})
export class LoginComponent implements OnInit {
  emailId: string;
  password: string;

  createUser;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private toastyService: ToastyService,
    private router: Router,
    private route: ActivatedRoute,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.position = "top-right";
    this.toastyConfig.theme = "material";

    this.createUser = new User();
  }

  ngOnInit() { }

  // signup() {
  //   this.authService.signup(this.emailId, this.password);
  //   this.emailId = this.password = "";
  // }

  addUser(userForm: NgForm) {
    userForm.value["isAdmin"] = false;
    this.userService.createUser(userForm.value as User);
    const toastOption: ToastOptions = {
      title: "User Registeration",
      msg: "Registering",
      showClose: true,
      timeout: 3000,
      theme: "material"
    };
    this.toastyService.wait(toastOption);
    setTimeout((router: Router) => {
      $("#createUserForm").modal("hide");
    }, 1500);
  }

  login() {
    if (this.authService.login(this.emailId, this.password) === true) {
      const toastOption: ToastOptions = {
        title: "Authentication Success",
        msg: "Logging in please wait",
        showClose: true,
        timeout: 5000,
        theme: "material"
      };
      this.toastyService.wait(toastOption);
      const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
      setTimeout((router: Router) => {
        this.router.navigate([returnUrl || "/"]);
      }, 1500);
    } else {
      const toastOption: ToastOptions = {
        title: "Authentication Failed",
        msg: "Invalid Credentials, Please Check your credentials",
        showClose: true,
        timeout: 5000,
        theme: "material"
      };
      this.toastyService.error(toastOption);
      this.emailId = this.password = "";
    }
  }
}
