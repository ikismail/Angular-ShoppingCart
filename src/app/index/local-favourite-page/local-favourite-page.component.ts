import { Component, OnInit } from "@angular/core";
import { Product } from "../../product/model/product";
import { ProductService } from "../../product/shared/product.service";

@Component({
  selector: "app-local-favourite-page",
  templateUrl: "./local-favourite-page.component.html",
  styleUrls: ["./local-favourite-page.component.scss"]
})
export class LocalFavouritePageComponent implements OnInit {
  favoruiteProducts: Product[];
  showDataNotFound = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getFavouriteProduct();
  }
  removeLocalFavourite(product: Product) {
    console.log("removing product: ", product);
    this.productService.removeLocalFavourite(product);

    this.getFavouriteProduct();
  }

  getFavouriteProduct() {
    this.favoruiteProducts = this.productService.getLocalFavouriteProducts();
  }
}
