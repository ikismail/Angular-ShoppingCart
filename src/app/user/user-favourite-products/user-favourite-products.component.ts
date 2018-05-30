import { Component, OnInit } from "@angular/core";
import {
  FavouriteProduct,
  ProductService
} from "../../shared/services/product.service";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-user-favourite-products",
  templateUrl: "./user-favourite-products.component.html",
  styleUrls: ["./user-favourite-products.component.scss"]
})
export class UserFavouriteProductsComponent implements OnInit {
  products: FavouriteProduct[] = [];
  page = 1;

  // Not Found Message
  messageTitle = "No Favourite Products Found";
  messageDescription = "Please, Add Favourite Products";

  constructor(
    private productService: ProductService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.getFavouriteProducts();
  }

  getFavouriteProducts() {
    const x = this.productService
      .getUsersFavouriteProduct()
      .snapshotChanges()
      .subscribe(data => {
        this.products = [];
        data.forEach(product => {
          const y = product.payload.toJSON() as FavouriteProduct;
          y["$key"] = product.key;
          this.products.push(y);
        });
      });
  }

  removeFromFavourite($key: string) {
    this.productService.removeFavourite($key);
    this.getFavouriteProducts();
  }
}
