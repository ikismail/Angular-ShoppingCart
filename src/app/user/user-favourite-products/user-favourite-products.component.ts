import { Component, OnInit } from "@angular/core";
import { Product } from "../../product/model/product";
import {
  ProductService,
  FavouriteProduct
} from "../../product/shared/product.service";
import { AuthService } from "../../index/shared/auth.service";

@Component({
  selector: "app-user-favourite-products",
  templateUrl: "./user-favourite-products.component.html",
  styleUrls: ["./user-favourite-products.component.scss"]
})
export class UserFavouriteProductsComponent implements OnInit {
  products: FavouriteProduct[];

  constructor(
    private productService: ProductService,
    public authService: AuthService
  ) {
    this.products = new Array<FavouriteProduct>();
  }

  ngOnInit() {
    this.getFavouriteProducts();
  }

  getFavouriteProducts() {
    const x = this.productService
      .getUsersFavouriteProduct()
      .snapshotChanges()
      .subscribe(data => {
        data.forEach(product => {
          const y = product.payload.toJSON() as FavouriteProduct;
          y["$key"] = product.key;
          console.log("favourite product", y);
          this.products.push(y);
        });
      });
  }

  removeFromFavourite($key: string) {
    this.productService.removeFavourite($key);
  }
}
