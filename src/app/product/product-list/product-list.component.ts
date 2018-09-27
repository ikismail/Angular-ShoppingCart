import { Component, OnInit } from "@angular/core";
import { Product } from "../../shared/models/product";
import { AuthService } from "../../shared/services/auth.service";
import { ProductService } from "../../shared/services/product.service";
import { LoaderSpinnerService } from "../../shared/loader-spinner/loader-spinner";
import { ToastyService, ToastOptions, ToastyConfig } from "ng2-toasty";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  brands = [
    "All",
    "Google",
    "Apple",
    "Samsung",
    "OnePlus",
    "Lenovo",
    "Nokia",
    "Motorolla"
  ];

  selectedBrand: "All";

  page = 1;
  constructor(
    public authService: AuthService,
    private productService: ProductService,
    private spinnerService: LoaderSpinnerService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.position = "top-right";
    this.toastyConfig.theme = "material";
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.spinnerService.show();
    const x = this.productService.getProducts();
    x.snapshotChanges().subscribe(
      product => {
        this.spinnerService.hide();
        this.productList = [];
        product.forEach(element => {
          const y = element.payload.toJSON();
          y["$key"] = element.key;
          this.productList.push(y as Product);
        });
      },
      err => {
        const toastOption: ToastOptions = {
          title: "Error while fetching Products",
          msg: err,
          showClose: true,
          timeout: 5000,
          theme: "material"
        };
        this.toastyService.error(toastOption);
      }
    );
  }

  removeProduct(key: string) {
    this.productService.deleteProduct(key);
  }

  addFavourite(product: Product) {
    this.productService.addFavouriteProduct(product);
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }
}
