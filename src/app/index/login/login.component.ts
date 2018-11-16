import { NgForm, EmailValidator } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ToastyService, ToastOptions, ToastyConfig } from "ng2-toasty";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../shared/services/user.service";
import { AuthService } from "../../shared/services/auth.service";
import { User } from "../../shared/models/user";
declare var $: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [EmailValidator]
})
export class LoginComponent implements OnInit {
  user = {
    emailId: "",
    loginPassword: ""
  };

  errorInUserCreate = false;
  errorMessage: any;
  createUser;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastyService: ToastyService,
    private router: Router,
    private route: ActivatedRoute,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.position = "top-right";
    this.toastyConfig.theme = "material";

    this.createUser = new User();
  }

  ngOnInit() {}

  addUser(userForm: NgForm) {
    userForm.value["isAdmin"] = false;
    this.authService
      .createUserWithEmailAndPassword(
        userForm.value["emailId"],
        userForm.value["password"]
      )
      .then(res => {
        const user = {
          email: res.user.email,
          famil_name: res.user.displayName,
          uid: res.user.uid,
          verified_email: res.user.emailVerified,
          phoneNumber: res.user.phoneNumber,
          picture: res.user.photoURL
        };

        this.userService.createUser(user);

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
          this.router.navigate(["/"]);
        }, 1500);
      })
      .catch(err => {
        this.errorInUserCreate = true;
        this.errorMessage = err;
        const toastOption: ToastOptions = {
          title: "Error while Creating User",
          msg: err,
          showClose: true,
          timeout: 5000,
          theme: "material"
        };
        this.toastyService.error(toastOption);
      });
  }

  signInWithEmail(userForm: NgForm) {
    this.authService
      .signInRegular(userForm.value["emailId"], userForm.value["loginPassword"])
      .then(res => {
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

        this.router.navigate(["/"]);
      })
      .catch(err => {
        const toastOption: ToastOptions = {
          title: "Authentication Failed",
          msg: "Invalid Credentials, Please Check your credentials",
          showClose: true,
          timeout: 5000,
          theme: "material"
        };
        this.toastyService.error(toastOption);
      });
  }

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then(res => {
        if (res.additionalUserInfo.isNewUser) {
          this.userService.createUser(res.additionalUserInfo.profile);
        }
        const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
        location.reload();
        this.router.navigate(["/"]);
      })
      .catch(err => {
        const toastOption: ToastOptions = {
          title: "Error Occured",
          msg: "Please try again later",
          showClose: true,
          timeout: 5000,
          theme: "material"
        };
        this.toastyService.error(toastOption);
      });
  }
}
