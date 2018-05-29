import { Component, OnInit } from "@angular/core";
import { Product } from "../../product/model/product";
import { ProductService } from "../../product/shared/product.service";

@Component({
  selector: "app-local-cart-item",
  templateUrl: "./local-cart-item.component.html",
  styleUrls: ["./local-cart-item.component.scss"]
})
export class LocalCartItemComponent implements OnInit {
  localCartProducts: Product[];
  showDataNotFound = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getLocalCartProduct();
  }

  removeLocalCartProduct(product: Product) {
    console.log("removing product" + product.productName + "from cart");
    this.productService.removeLocalCartProduct(product);

    // Recalling
    this.getLocalCartProduct();
  }

  getLocalCartProduct() {
    this.localCartProducts = this.productService.getLocalCartProducts();
  }
}
