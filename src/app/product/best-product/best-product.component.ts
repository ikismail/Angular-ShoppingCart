import { ProductService } from "./../shared/product.service";
import { Product } from "./../model/product";
import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-best-product",
  templateUrl: "./best-product.component.html",
  styleUrls: ["./best-product.component.scss"]
})
export class BestProductComponent implements OnInit {
  bestProducts: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    $(document).ready(function() {
      $(".bestSeller").owlCarousel({
        // nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        lazyLoad: true
      });
    });

    this.getAllProducts();
  }

  getAllProducts() {
    const x = this.productService.getProducts();
    x.snapshotChanges().subscribe(product => {
      this.bestProducts = [];
      for (let i = 0; i < 5; i++) {
        const y = product[i].payload.toJSON();
        y["$key"] = product[i].key;
        this.bestProducts.push(y as Product);
      }
      // product.forEach(element => {
      //   const y = element.payload.toJSON();
      //   y["$key"] = element.key;
      //   this.bestProducts.push(y as Product);
      // });
    });
  }
}
