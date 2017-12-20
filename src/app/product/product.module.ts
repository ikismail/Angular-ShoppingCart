import { ProductRoutes } from "./product.routing";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { BestProductComponent } from "./best-product/best-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ProductRoutes)],
  declarations: [ProductComponent, BestProductComponent, ProductListComponent],
  exports: [BestProductComponent]
})
export class ProductModule {}
