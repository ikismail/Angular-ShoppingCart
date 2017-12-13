import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $(".bestSeller").owlCarousel({
        // nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        lazyLoad: true
      });
    });
  }
}
