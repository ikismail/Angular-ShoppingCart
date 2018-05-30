import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";

@Component({
  selector: "app-local-favourite-page",
  templateUrl: "./local-favourite-page.component.html",
  styleUrls: ["./local-favourite-page.component.scss"]
})
export class LocalFavouritePageComponent implements OnInit {
  favoruiteProducts: Product[];
  showDataNotFound = true;

  // Not Found Message
  messageTitle = "No Favourite Products Found";
  messageDescription = "Please, choose your favourite products";

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getFavouriteProduct();
  }
  removeLocalFavourite(product: Product) {
    this.productService.removeLocalFavourite(product);

    this.getFavouriteProduct();
  }

  getFavouriteProduct() {
    this.favoruiteProducts = this.productService.getLocalFavouriteProducts();
  }
}
