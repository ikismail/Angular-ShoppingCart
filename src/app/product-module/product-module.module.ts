import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { ProductService } from "./common/product.service";
import { ProductListComponent } from "./productList/productList.component";
import { BestProductComponent } from './bestProduct/bestProduct.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductComponent,
    ProductListComponent,
    BestProductComponent
  ],
  providers: [ProductService],
  exports: [BestProductComponent]
})
export class ProductModule { }
