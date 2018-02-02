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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params["id"]; // (+) converts string 'id' to a number

      console.log("id", id);
      // In a real app: dispatch action to load the details here.
    });
  }

  getProductDetail(id: string) {
    const x = this.productService.getProductById(id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
