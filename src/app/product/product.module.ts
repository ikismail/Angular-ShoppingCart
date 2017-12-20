import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { BestProductComponent } from "./best-product/best-product.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ProductComponent, BestProductComponent],
  exports: [BestProductComponent]
})
export class ProductModule {}
