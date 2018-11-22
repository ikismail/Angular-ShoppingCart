import { ToastrService } from "./../../shared/services/toastr.service";
import { NgForm, EmailValidator } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
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
		private toastService: ToastrService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.createUser = new User();
	}

	ngOnInit() { }

	addUser(userForm: NgForm) {
		userForm.value["isAdmin"] = false;
		this.authService
			.createUserWithEmailAndPassword(userForm.value["emailId"], userForm.value["password"])
			.then((res) => {
				const user = {
					email: res.user.email,
					famil_name: res.user.displayName,
					uid: res.user.uid,
					verified_email: res.user.emailVerified,
					phoneNumber: res.user.phoneNumber,
					picture: res.user.photoURL
				};

				this.userService.createUser(user);

				this.toastService.success("Registering", "User Registeration");

				setTimeout((router: Router) => {
					$("#createUserForm").modal("hide");
					this.router.navigate(["/"]);
				}, 1500);
			})
			.catch((err) => {
				this.errorInUserCreate = true;
				this.errorMessage = err;
				this.toastService.error("Error while Creating User", err);
			});
	}

	signInWithEmail(userForm: NgForm) {
		this.authService
			.signInRegular(userForm.value["emailId"], userForm.value["loginPassword"])
			.then((res) => {
				this.toastService.success("Authentication Success", "Logging in please wait");

				const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");

				setTimeout((router: Router) => {
					this.router.navigate([returnUrl || "/"]);
				}, 1500);

				this.router.navigate(["/"]);
			})
			.catch((err) => {
				this.toastService.error("Authentication Failed", "Invalid Credentials, Please Check your credentials");
			});
	}

	signInWithGoogle() {
		this.authService
			.signInWithGoogle()
			.then((res) => {
				if (res.additionalUserInfo.isNewUser) {
					this.userService.createUser(res.additionalUserInfo.profile);
				}
				const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
				location.reload();
				this.router.navigate(["/"]);
			})
			.catch((err) => {
				this.toastService.error("Error Occured", "Please try again later");
			});
	}
}
