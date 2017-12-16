import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-bestProduct',
  templateUrl: './bestProduct.component.html',
  styleUrls: ['./bestProduct.component.scss']
})
export class BestProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
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
