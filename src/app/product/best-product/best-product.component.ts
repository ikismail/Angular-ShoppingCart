import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-best-product",
  templateUrl: "./best-product.component.html",
  styleUrls: ["./best-product.component.scss"]
})
export class BestProductComponent implements OnInit {
  constructor() {}

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
  }
}
