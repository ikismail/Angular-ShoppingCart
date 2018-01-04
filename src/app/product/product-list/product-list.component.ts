import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsList: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    const x = this.productService.getProducts();
    x.snapshotChanges().subscribe(product => {
      this.productsList = [];
      product.forEach(element => {
        const y = element.payload.toJSON();
        y["$key"] = element.key;
        console.log("y", y);
        this.productsList.push(y as Product);
      });
    });
  }

}
