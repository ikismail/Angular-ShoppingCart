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
    if (this.authService.isLoggedIn()) {
      this.calculateFavProductCounts();
      this.calculateCartProductCounts();
    } else {
      this.calculateLocalFavProdCounts();
      this.calculateLocalCartProdCounts();
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
    location.reload();
  }

  public calculateLocalFavProdCounts() {
    this.favProdsCount = this.productService.getLocalFavouriteProducts().length;
  }

  public calculateFavProductCounts() {
    const x = this.productService
      .getUsersFavouriteProduct()
      .snapshotChanges()
      .subscribe(data => {
        this.favProdsCount = data.length;
      });
  }

  // Cart Functions

  public calculateLocalCartProdCounts() {
    this.cartProductCount = this.productService.getLocalCartProducts().length;
  }

  public calculateCartProductCounts() {
    const x = this.productService
      .getUsersCartProducts()
      .snapshotChanges()
      .subscribe(data => {
        this.cartProductCount = data.length;
      });
  }
}
