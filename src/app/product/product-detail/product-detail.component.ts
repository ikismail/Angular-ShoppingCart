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
  product: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params["id"]; // (+) converts string 'id' to a number
      this.getProductDetail(id);
    });
  }

  getProductDetail(id: string) {
    const x = this.productService.getProductById(id);
    x.snapshotChanges().subscribe(product => {
      const y = product.payload.toJSON() as Product;
      y["$key"] = id;
      this.product = y;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
