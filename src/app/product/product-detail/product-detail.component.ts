import { Product } from "./../../shared/models/product";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../shared/services/product.service";
import { ToastyService, ToastOptions, ToastyConfig } from "ng2-toasty";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.product = new Product();
    this.toastyConfig.position = "top-right";
    this.toastyConfig.theme = "material";
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params["id"]; // (+) converts string 'id' to a number
      this.getProductDetail(id);
    });
  }

  getProductDetail(id: string) {
    // this.spinnerService.show();
    const x = this.productService.getProductById(id);
    x.snapshotChanges().subscribe(
      product => {
        // this.spinnerService.hide();
        const y = product.payload.toJSON() as Product;

        y["$key"] = id;
        this.product = y;
      },
      error => {
        const toastOption: ToastOptions = {
          title: "Error while fetching Product Detail",
          msg: error,
          showClose: true,
          timeout: 5000,
          theme: "material"
        };
        this.toastyService.error(toastOption);
      }
    );
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
