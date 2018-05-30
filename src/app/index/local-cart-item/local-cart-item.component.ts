import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";
import { ProductService } from "../../shared/services/product.service";
@Component({
  selector: "app-local-cart-item",
  templateUrl: "./local-cart-item.component.html",
  styleUrls: ["./local-cart-item.component.scss"]
})
export class LocalCartItemComponent implements OnInit {
  localCartProducts: Product[];
  showDataNotFound = true;

  // Not Found Message
  messageTitle = "No Products Found in Cart";
  messageDescription = "Please, Add Products to Cart";

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getLocalCartProduct();
  }

  removeLocalCartProduct(product: Product) {
    this.productService.removeLocalCartProduct(product);

    // Recalling
    this.getLocalCartProduct();
  }

  getLocalCartProduct() {
    this.localCartProducts = this.productService.getLocalCartProducts();
  }
}
