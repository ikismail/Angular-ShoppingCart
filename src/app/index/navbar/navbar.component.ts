import { AuthService } from "./../shared/auth.service";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../../product/shared/product.service";
declare var $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    public productService: ProductService
  ) {}

  ngOnInit() {
   
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
    location.reload();
  }

  


}
