import { LoaderSpinnerService } from "./../../modules/loader-spinner/loader-spinner.service";
import { Product } from "./../model/product";
import { ProductService } from "./../shared/product.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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
    private spinnerService: LoaderSpinnerService
  ) {
    this.product = new Product();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params["id"]; // (+) converts string 'id' to a number
      this.getProductDetail(id);
    });
  }

  getProductDetail(id: string) {
    this.spinnerService.show();
    const x = this.productService.getProductById(id);
    x.snapshotChanges().subscribe(product => {
      this.spinnerService.hide();
      const y = product.payload.toJSON() as Product;

      console.log("getProduct id: " + id, y);

      y["$key"] = id;
      this.product = y;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
