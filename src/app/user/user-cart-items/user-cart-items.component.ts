import { Component, OnInit } from "@angular/core";
import {
  FavouriteProduct,
  ProductService
} from "../../shared/services/product.service";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-user-cart-items",
  templateUrl: "./user-cart-items.component.html",
  styleUrls: ["./user-cart-items.component.scss"]
})
export class UserCartItemsComponent implements OnInit {
  products: FavouriteProduct[] = [];
  page = 1;

  // Not Found Message
  messageTitle = "No Products Found in Cart";
  messageDescription = "Please, Add Products to your cart";

  constructor(
    private productService: ProductService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts() {
    const x = this.productService.getUsersCartProducts();
    x.snapshotChanges().subscribe(data => {
      this.products = [];
      data.forEach(product => {
        const y = product.payload.toJSON() as FavouriteProduct;
        y["$key"] = product.key;
        this.products.push(y);
      });
    });
  }

  removeFromCart($key: string) {
    this.productService.removeCart($key);
    this.getCartProducts();
  }
}
