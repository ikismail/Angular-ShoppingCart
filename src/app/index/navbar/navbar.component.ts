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
  favProdsCount = 0;
  cartProductCount = 0;

  @Output() myEvent = new EventEmitter();
  constructor(
    public authService: AuthService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.calculateFavProdCounts();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

  public calculateFavProdCounts() {
    this.favProdsCount = this.productService.getLocalFavouriteProducts().length;
  }
}
