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
    this.favoruiteProducts = this.productService.getLocalFavouriteProducts();

    console.log("length", this.favoruiteProducts.length);
  }
  removeLocalFavourite(key: string) {
    this.productService.removeLocalFavourite(key);
  }
}
